import { plainToInstance } from 'class-transformer';
import FeedList from 'db/feed.json';
import { FeedDto } from 'dto/feed/feed.dto';
import { action, makeObservable, observable } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

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
        // const params = {};
        // await this.api
        //     .get(`/v1/post/`)
        //     .then((result: AxiosResponse<FeedDto[]>) => {
        //         // 중복제거

        //         // 만약 리스트가 0개라면 더 이상 요청 금지

        //         runInAction(() => {
        //             // 리스트에 추가
        //             this.feedList = [...this.feedList, ...result.data];
        //             // 리스트 통으로 교체
        //             this.feedList = result.data?.map((feed: FeedDto) => plainToInstance(FeedDto, feed));
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
