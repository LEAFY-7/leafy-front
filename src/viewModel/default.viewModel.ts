import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { ServerType } from 'constants/constants';
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
        this.api = ApiModule.getInstance();
        this.themeModel = JSON.parse(window.localStorage.getItem('leafyer-Theme')) || themeModes.light;

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
            return this;
        });
        window.localStorage.setItem('leafyer-Theme', JSON.stringify(this.themeModel));
    };

    getMe = async () => {
        await this.api
            .get(ServerType.API, '/v1/users/me')
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
