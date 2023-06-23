import { action, makeObservable, observable, runInAction } from 'mobx';
import { ChangeEvent } from 'react';
import { SearchModel } from '../../model/search/search.model';
import DefaultViewModel from '../default.viewModel';

interface IProps {}

export default class SearchViewModel extends DefaultViewModel {
    public searchModel: SearchModel = new SearchModel();

    constructor(props: IProps) {
        super(props);
        makeObservable(this, {
            searchModel: observable,

            handleChangeKeyword: action,
        });
    }

    handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        runInAction(() => {
            this.searchModel = { ...this.searchModel, keyword: value };
        });
    };
}
