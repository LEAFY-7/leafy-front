import { plainToInstance } from 'class-transformer';
import FeedData from 'db/feed.json';
import { FeedDto } from 'dto/feed/feed.dto';
import { makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class FeedViewModel extends DefaultViewModel {
    public detail: FeedDto = new FeedDto();
    public list;
    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            detail: observable,
        });
    }

    getDetail = async (id: number) => {
        // await this.api
        //     .get('/v1/feeds', { id: id })
        //     .then((result: AxiosResponse<FeedDto>) => {
        //         runInAction(() => {
        //             this.detail = plainToInstance(FeedDto, result.data);
        //         });
        //     })
        //     .catch((error: AxiosError) => {
        //         console.log('error : ', error);
        //         return false;
        //     });

        runInAction(() => {
            this.detail = plainToInstance(
                FeedDto,
                FeedData.data.find((feed) => feed.id === id),
            );
        });
    };
}
