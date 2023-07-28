import { AuthDto } from 'dto/auth/auth.dto';

enum LocalStorageKey {
    USER_AUTH = 'userAuth',
    TOKEN = 'token',
}
enum ErrorMessage {
    GET = '로컬 스토리지에서 가져오는 도중 에러가 발생했습니다.',
    SAVE = '로컬 스토리지에 저장하는 도중 에러가 발생했습니다.',
    REMOVE = '로컬 스토리지에서 삭제하는 도중 에러가 발생했습니다.',
}
type ErrorMessageKey = keyof typeof ErrorMessage;

interface AuthToken {
    auth: Omit<AuthDto, 'userId'>;
}

class TokenModule {
    private tokenKey = LocalStorageKey.TOKEN; // jwt 토큰
    private userAuthKey = LocalStorageKey.USER_AUTH; // user 상태

    public save = ({ auth: { token, userAuth } }: AuthToken) => {
        try {
            window.localStorage.setItem(this.tokenKey, JSON.stringify(token));
            window.localStorage.setItem(this.userAuthKey, JSON.stringify(userAuth));
            return true;
        } catch (error) {
            this.handleError('SAVE', error);
            throw error;
        }
    };

    public get = () => {
        try {
            const token = window.localStorage.getItem(this.tokenKey);
            const userAuth = window.localStorage.getItem(this.userAuthKey);
            return {
                token: token ? JSON.parse(token) : null,
                userAuth: token ? JSON.parse(userAuth) : null,
            };
        } catch (error) {
            this.handleError('GET', error);
            throw error;
        }
    };

    public remove = () => {
        try {
            window.localStorage.removeItem(this.tokenKey);
            window.localStorage.removeItem(this.userAuthKey);
            return true;
        } catch (error) {
            this.handleError('REMOVE', error);
            throw error;
        }
    };

    private handleError = (message: ErrorMessageKey, error: Error) => {
        console.error(ErrorMessage[message], error);
    };
}

const tokenModule = new TokenModule();
export default tokenModule;
