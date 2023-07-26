import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { AuthDto } from 'dto/auth/auth.dto';
import { UserDto } from 'dto/user/user.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { ApiModule } from 'modules/api.module';
import TokenModule from 'modules/token.module';

export enum themeModes {
    light = 'light',
    dark = 'dark',
}
interface IProps {}

export default class DefaultViewModel {
    public themeModel: themeModes;
    public themeToken: TokenModule;
    public authToken: TokenModule;
    public api: ApiModule;
    public me: UserDto = new UserDto();
    public auth: AuthDto = new AuthDto();

    constructor(props: IProps) {
        this.api = ApiModule.getInstance();
        this.authToken = TokenModule.getInstance('leafyerA');
        this.themeToken = TokenModule.getInstance('leafyerT');
        this.auth = this.authToken.getToken() || '';
        this.themeModel = this.themeToken.getToken() || themeModes.light;
        makeObservable(this, {
            me: observable,
            themeModel: observable,

            handleLogOut: action,
            handleThemeMode: action,
            getMe: action,
        });
    }

    handleLogOut = () => {
        this.authToken.removeToken();
        window.location.href = '/auth/signin';
    };

    handleThemeMode = () => {
        runInAction(() => {
            if (this.themeModel === themeModes.dark) {
                this.themeModel = themeModes.light;
            } else {
                this.themeModel = themeModes.dark;
            }
            this.themeToken.saveToken(this.themeModel);
            return this;
        });
    };

    getMe = async () => {
        await this.api
            .get('/v1/me')
            .then((result: AxiosResponse<UserDto>) => {
                runInAction(() => {
                    this.me = plainToInstance(UserDto, result.data);
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);
                return false;
            });
    };
}
