import { ApiModule } from '@modules/api.module';
import { action, makeObservable, observable, runInAction } from 'mobx';
export enum themeModes {
    light = 'light',
    dark = 'dark',
}
interface IProps {}

export default class DefaultViewModel {
    public themeModel = themeModes.light;
    public api: ApiModule;
    constructor(props: IProps) {
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
            return this;
        });
    };
}
