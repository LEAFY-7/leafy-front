import { configure } from 'mobx';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import DefaultViewModel from 'viewModel/default.viewModel';
import FeedViewModel from 'viewModel/feed/feed.viewModel';
import MainViewModel from 'viewModel/main/main.viewModel';
import SearchViewModel from 'viewModel/search/search.viewModel';
import UserViewModel from 'viewModel/user/user.viewModel';

let store: any = null;
configure({ enforceActions: 'observed' });

export interface MobxInitProps {}

export class RootStore {
    //public 뷰모델네임 : 뷰모델타입;
    public defaultViewModel: DefaultViewModel;
    public mainViewModel: MainViewModel;
    public searchViewModel: SearchViewModel;
    public authViewModel: AuthViewModel;
    public userViewModel: UserViewModel;
    public feedViewModel: FeedViewModel;

    constructor(initialData: MobxInitProps) {
        const initData = Object.assign(initialData, {});
        //this.뷰모델네임 = new 뷰모델(initData);
        this.defaultViewModel = new DefaultViewModel(initData);
        this.mainViewModel = new MainViewModel(initData);
        this.searchViewModel = new SearchViewModel(initData);
        this.authViewModel = new AuthViewModel(initData);
        this.userViewModel = new UserViewModel(initData);
        this.feedViewModel = new FeedViewModel(initData);
    }
}

export default function initializeStore(initData: MobxInitProps) {
    store = new RootStore(initData);

    return store;
}
