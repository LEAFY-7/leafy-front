import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

export default function useViewModel(viewModelName: ViewModelName) {
    const store = useContext(MobXProviderContext);

    return store[viewModelName];
}

export enum ViewModelName {
    //키워드 = 'store에 있는 뷰모델 네임'
    MAIN = 'mainViewModel',
    SEARCH = 'searchViewModel',
    AUTH = 'authViewModel',
    DEFAULT = 'defaultViewModel',
    USER = 'userViewModel',
    FEED = 'feedViewModel',
    MY_EDIT = 'myEditViewModel',
    NOTICE = 'noticeViewModel',
}
