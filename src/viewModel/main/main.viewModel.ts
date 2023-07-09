import FeedList from '@db/feed.json';
import { FeedDto } from '@dto/feed/feed.dto';
import DefaultViewModel from '@viewModel/default.viewModel';
import { plainToInstance } from 'class-transformer';
import { action, makeObservable, observable } from 'mobx';

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

    getList = async () => {
        // api 예시
        // await this.api
        //     .get(`/v1/post/`)
        //     .then((result: AxiosResponse<FeedDto[]>) => {
        //         runInAction(() => {
        //             this.feedList = result.data.map((feed: FeedDto) => plainToInstance(FeedDto, feed));
        //         });
        //     })
        //     .catch((error: AxiosError) => {
        //         console.log('error : ', error);
        //         if (error.status === 402) {
        //         }
        //         return false;
        //     });

        this.feedList = FeedList.data.map((feed: FeedDto) => plainToInstance(FeedDto, feed));
    };
}
