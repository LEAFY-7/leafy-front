import { AuthDto } from 'dto/auth/auth.dto';
import { Alert } from './alert.module';

enum LocalStorageKey {
    LEAFYER = 'leafyer',
}
enum ErrorMessage {
    GET = '로컬 스토리지에서 가져오는 도중 에러가 발생했습니다.',
    SAVE = '로컬 스토리지에 저장하는 도중 에러가 발생했습니다.',
    REMOVE = '로컬 스토리지에서 삭제하는 도중 에러가 발생했습니다.',
}
type ErrorMessageKey = keyof typeof ErrorMessage;

class TokenModule {
    private leafyer = LocalStorageKey.LEAFYER;

    public save = ({ token, userAuth, userId }: AuthDto) => {
        try {
            const defaultAuthDto = new AuthDto();

            const updatedToken = token || defaultAuthDto.token;
            const updatedUserAuth = userAuth || defaultAuthDto.userAuth;
            const updatedUserId = userId || defaultAuthDto.userId;

            const updatedLeafyerToken = {
                token: updatedToken,
                userAuth: updatedUserAuth,
                userId: updatedUserId,
            };

            window.localStorage.setItem(this.leafyer, JSON.stringify(updatedLeafyerToken));
            return true;
        } catch (error) {
            this.handleError('SAVE', error);
            throw error;
        }
    };

    public get = () => {
        try {
            const leafyer = window.localStorage.getItem(this.leafyer);
            return {
                leafyer: leafyer ? JSON.parse(leafyer) : new AuthDto(),
            };
        } catch (error) {
            this.handleError('GET', error);
            throw error;
        }
    };

    public remove = () => {
        try {
            window.localStorage.removeItem(this.leafyer);
            return true;
        } catch (error) {
            this.handleError('REMOVE', error);
            throw error;
        }
    };

    private handleError = (message: ErrorMessageKey, error: Error) => {
        console.error(ErrorMessage[message], error);
        Alert.alert(ErrorMessage[message]);
    };
}

const tokenModule = new TokenModule();
export default tokenModule;
