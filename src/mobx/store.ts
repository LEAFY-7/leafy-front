import AuthViewModel from '@viewModel/auth/auth.viewModel';
import DefaultViewModel from '@viewModel/default.viewModel';
import MainViewModel from '@viewModel/main/main.viewModel';
import SearchViewModel from '@viewModel/search/search.viewModel';
import { configure } from 'mobx';

let store: any = null;
configure({ enforceActions: 'observed' });

export interface MobxInitProps {}

export class RootStore {
    public defaultViewModel: DefaultViewModel;
    public mainViewModel: MainViewModel;
    public searchViewModel: SearchViewModel;
    public authViewModel: AuthViewModel;

    constructor(initialData: MobxInitProps) {
        const initData = Object.assign(initialData, {});
        this.defaultViewModel = new DefaultViewModel(initData);
        this.mainViewModel = new MainViewModel(initData);
        this.searchViewModel = new SearchViewModel(initData);
        this.authViewModel = new AuthViewModel(initData);
    }
}

export default function initializeStore(initData: MobxInitProps) {
    store = new RootStore(initData);

    return store;
}
