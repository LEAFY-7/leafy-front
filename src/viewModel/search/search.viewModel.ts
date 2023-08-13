import { action, makeObservable, observable, runInAction } from 'mobx';
import { SearchModel } from 'models/search/search.model';
import { ChangeEvent, MouseEvent } from 'react';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class SearchViewModel extends DefaultViewModel {
    public searchModel: SearchModel = new SearchModel();
    public list: any[] = [];
    constructor(props: IProps) {
        super(props);
        makeObservable(this, {
            searchModel: observable,
            list: observable,

            handleChangeKeyword: action,
            getList: action,
        });
    }

    handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        runInAction(() => {
            this.searchModel = { ...this.searchModel, keyword: value };
        });
    };

    getList = async () => {};

    handleClickSearch = (event: MouseEvent<HTMLButtonElement>) => {
        this.getList();
    };
}
