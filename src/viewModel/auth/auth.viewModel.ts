import { AxiosError, AxiosResponse } from 'axios';
import { ServerType } from 'constants/constants';
import { AuthDto } from 'dto/auth/auth.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import tokenModule from 'modules/token.module';
import { Alert } from 'modules/alert.module';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
    public isEmailCheck: boolean;
    public isNickNameCheck: boolean;
    public isActive: boolean;
    public authState: SignUphModel = new SignUphModel();

    constructor(props: IProps) {
        super(props);
        this.isEmailCheck = false;
        this.isActive = false;

        makeObservable(this, {
            isEmailCheck: observable,
            isActive: observable,
            authState: observable,

            handleCheckEmail: action,
            handleToggle: action,
            handleSignUp: action,
            handleSignIn: action,
        });
    }

    private maskEmail = (email: string, numCharsToShow: number) => {
        const atIndex = email.indexOf('@');
        if (atIndex >= numCharsToShow) {
            const maskedPart = '*'.repeat(atIndex - numCharsToShow);
            return email.substring(0, numCharsToShow) + maskedPart + email.substring(atIndex);
        } else {
            return email;
        }
    };

    handleToggle = () => {
        runInAction(() => {
            this.isActive = !this.isActive;
        });
    };

    handleInputChange = (key, value) => {
        runInAction(() => {
            this.authState[key] = value;
        });
    };

    // 이메일 찾기
    handleFindEmail = (authState) => {
        const { name, phone } = authState;
        const phoneNumberWithoutHyphens = phone.replace(/-/g, '');

        return this.api
            .get(ServerType.API, `/v1/users/email?name=${name}&phone=${phoneNumberWithoutHyphens}`)
            .then((response: AxiosResponse<string>) => {
                const maskedEmail = this.maskEmail(response.data, 3);
                Alert.alert(`이메일은 ${maskedEmail} 입니다.`);
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 404) {
                    Alert.alert('이름과 전화번호로 가입된 이메일이 존재하지 않습니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };

    // 이메일 중복 체크
    handleCheckEmail = (e) => {
        e.preventDefault();
        const email = this.authState.email;
        return this.api
            .get(ServerType.API, `/v1/users/check/email?email=${email}`)
            .then(({ status }: AxiosResponse) => {
                if (status === 204) {
                    runInAction(() => {
                        this.isEmailCheck = true;
                    });
                    Alert.alert(`${email}은(는) 사용이 가능합니다.`);
                }
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 409) {
                    Alert.alert('이미 사용중인 이메일입니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };

    // 회원가입
    handleSignUp = async (authState) => {
        const { name, nickName, email, password, confirmPassword, phone } = authState;
        const phoneNumberWithoutHyphens = phone.replace(/-/g, '');

        runInAction(() => {
            this.authState.name = name;
            this.authState.nickName = nickName;
            this.authState.email = email;
            this.authState.password = password;
            this.authState.confirmPassword = confirmPassword;
            this.authState.phone = phoneNumberWithoutHyphens;
        });

        return this.api
            .post(ServerType.API, '/v1/users/sign-up', {
                name: this.authState.name,
                nickName: this.authState.nickName,
                email: this.authState.email,
                password: this.authState.password,
                confirmPassword: this.authState.confirmPassword,
                phone: phoneNumberWithoutHyphens,
            })
            .then((response: AxiosResponse<AuthDto>) => {
                tokenModule.save({
                    token: response.data.token,
                    userAuth: response.data.userAuth,
                    userId: response.data.userId,
                });
                window.location.replace('/');
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 400) {
                    Alert.alert('입력하신 내용이 형식에 맞지 않습니다.');
                } else if (error && error.status === 409) {
                    Alert.alert('이메일 혹은 닉네임이 이미 존재합니다.');
                } else if (error && error.status === 500) {
                    Alert.alert('서버에 요청이 실패하였습니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };

    // 로그인
    handleSignIn = (authState) => {
        return this.api
            .post(ServerType.API, '/v1/users/sign-in', authState)
            .then((response: AxiosResponse<AuthDto>) => {
                console.log(response);
                tokenModule.save({
                    token: response.data.token,
                    userAuth: response.data.userAuth,
                    userId: response.data.userId,
                });
                window.location.replace('/');
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 400) {
                    Alert.alert('아이디 또는 비밀번호가 형식에 맞지 않습니다.');
                } else if (error && error.status === 401) {
                    Alert.alert('비밀번호가 맞지 않습니다. 다시 확인해주세요.');
                } else if (error && error.status === 404) {
                    Alert.alert('이메일이 맞지 않습니다. 다시 확인해주세요.');
                } else if (error && error.status === 500) {
                    Alert.alert('서버에 요청이 실패하였습니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };
}

// 닉네임 중복 체크
// handleCheckNickName = (e) => {
//     e.preventDefault();
//     const nickName = this.authState.nickName;
//     return this.api
//         .get(ServerType.API, `/v1/users/check/nickname?nickName=${nickName}`)
//         .then(({ status }: AxiosResponse) => {
//             if (status === 204) {
//                 runInAction(() => {
//                     this.isNickNameCheck = true;
//                 });
//                 Alert.alert(`${nickName}은(는) 사용이 가능합니다.`);
//             }
//         })
//         .catch((error: AxiosError) => {
//             if (error && error.status === 204) {
//                 Alert.alert('닉네임 형식이 맞지 않습니다.');
//             } else if (error && error.status === 409) {
//                 Alert.alert('이미 사용중인 닉네임입니다.');
//             } else {
//                 Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
//             }
//         });
// };
