import { plainToInstance } from 'class-transformer';
import { action, makeObservable, observable, runInAction } from 'mobx';
import FeedList from '../../db/feed.json';
import { FeedDto } from '../../dto/feed/feed.dto';
import DefaultViewModel from '../default.viewModel';

interface IProps {}

export default class MainViewModel extends DefaultViewModel {
    public feedList: FeedDto[] = [];

    constructor(props: IProps) {
        super(props);
        makeObservable(this, {
            feedList: observable,

            getList: action,
        });
    }

    getList = () => {
        runInAction(() => {
            this.feedList = FeedList.data.map((feed: FeedDto) => plainToInstance(FeedDto, feed));
        });
    };
}
