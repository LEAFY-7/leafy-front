import { action, makeObservable, observable, runInAction } from 'mobx';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';

import { SignUphModel } from 'models/auth/signUp.model';
import DefaultViewModel from 'viewModel/default.viewModel';
import { ServerType } from 'constants/constants';

import FeedActivityDto from 'dto/my/feedActivity.dto';
import MyPageDto from 'dto/my/mypage.dto';
import TotalCountDto from 'dto/my/totalCount.dto';
import { UserDto } from 'dto/user/user.dto';
import tokenModule from 'modules/token.module';
import { Alert } from 'modules/alert.module';
import { error } from 'console';

interface IProps {}

export default class UserViewModel extends DefaultViewModel {
    public user: UserDto = new UserDto();
    public totalCount: TotalCountDto = new TotalCountDto();
    public chartList: FeedActivityDto[] = [new FeedActivityDto()];
    public userInformation: SignUphModel = new SignUphModel();
    public myImage: any = null;

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            user: observable,
            userInformation: observable,
            totalCount: observable,
            chartList: observable,
            myImage: observable,

            getUser: action,
            getMyPage: action,
        });
    }
    getMyPage = () => {
        return this.api
            .get(ServerType.API, '/v1/users/my-page')
            .then((result: AxiosResponse<MyPageDto>) => {
                runInAction(() => {
                    this.totalCount = plainToInstance(TotalCountDto, result.data.totalCountResponse);
                    this.chartList = plainToInstance(FeedActivityDto, result.data.feedMonthlyActivity);
                });
            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
    };

    getUser = async (userId: number) => {
        await this.api
            .get(ServerType.API, '/v1/users', userId)
            .then((result: AxiosResponse<UserDto>) => {
                runInAction(() => {
                    this.user = plainToInstance(UserDto, result.data);
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);
                return false;
            });
    };

    getPageNationOfFollow = (event: React.ChangeEvent<HTMLButtonElement>) => {
        const { id, name } = event.currentTarget.dataset;

        // switch (name){
        //     case
        // }
    };

    /**
     * 이미지 업로드 관련 API 요청 로직
     */

    // 수정 - 임시
    postMyImage = (imageFile: FormData) => {
        axios
            .post('http://www.leafyer.com:8080/api/v1/users/image', imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: tokenModule.get().leafyer.token,
                },
            })
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // 수정 이전
    updateMyImage = (imageFile: File) => {
        this.api
            .post(ServerType.API, '/v1/users/image', imageFile)
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    updateMyBackGroundImg = () => {
        // this.api.post()
    };
    updateMyInformation = () => {};

    // DELETE로 요청했는데, POST로 보내짐...
    deleteMyImage = () => {
        this.api
            .delete(ServerType.API, '/v1/users/image')
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    deleteMyBackgroundImage = () => {
        this.api
            .delete(ServerType.API, '/v1/users/background-image')
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    /**
     * 설정 관련 API 요청
     *
     * 1. 회원 공개 - 200, 204, 500
     * 2. 댓글 알람
     * 3. 전체 알람 비공개
     */

    patchMemberDisclosure = () => {
        this.api
            .patch(ServerType.API, '/v1/users/hide')
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error) => {
                Alert.alert('요청에 실패하였습니다. 다시 시도해주세요.');
            });
    };

    patchReviewAlarm = () => {
        this.api
            .patch(ServerType.API, '/v1/users/comment-notification')
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error) => {
                Alert.alert('요청에 실패하였습니다. 다시 시도해주세요.');
            });
    };
    patchAllAlarm = () => {
        this.api
            .patch(ServerType.API, '/v1/users/all-notification')
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error) => {
                Alert.alert('요청에 실패하였습니다. 다시 시도해주세요.');
            });
    };
}
