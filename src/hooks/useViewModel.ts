import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

export default function useViewModel(viewModelName: ViewModelName) {
    const store = useContext(MobXProviderContext);

    return store[viewModelName];
}

export enum ViewModelName {
    MAIN = 'mainViewModel',
    SEARCH = 'searchViewModel',
    AUTH = 'authViewModel',
}
