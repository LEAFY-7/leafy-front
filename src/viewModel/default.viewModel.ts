import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { UserDto } from 'dto/user/user.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { ApiModule } from 'modules/api.module';

export enum themeModes {
    light = 'light',
    dark = 'dark',
}
interface IProps {}

export default class DefaultViewModel {
    public themeModel: themeModes;
    public api: ApiModule;
    public me: UserDto = new UserDto();

    constructor(props: IProps) {
        this.themeModel = (localStorage.getItem('leafy') as themeModes) || themeModes.light;
        this.api = ApiModule.getInstance();
        makeObservable(this, {
            me: observable,
            themeModel: observable,

            handleThemeMode: action,
            getMe: action,
        });
    }

    handleThemeMode = () => {
        runInAction(() => {
            if (this.themeModel === themeModes.dark) {
                this.themeModel = themeModes.light;
            } else {
                this.themeModel = themeModes.dark;
            }
            localStorage.setItem('leafy', this.themeModel);
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
