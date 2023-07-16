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

    constructor(props: IProps) {
        this.themeModel = (localStorage.getItem('leafy') as themeModes) || themeModes.light;
        this.api = ApiModule.getInstance();
        makeObservable(this, {
            themeModel: observable,

            handleThemeMode: action,
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
}
