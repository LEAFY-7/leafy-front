import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { ServerType } from 'constants/constants';
import FeedListDto from 'dto/feed/feedList.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class MainViewModel extends DefaultViewModel {
    public feedList: FeedListDto = new FeedListDto();
    public hashTag: [] = [];

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            feedList: observable,
            hashTag: observable,

            getMainData: action,
        });
    }

    saveMainData = (result) => {
        runInAction(() => {
            this.feedList = plainToInstance(FeedListDto, result.data.scrollResponse);
        });
    };

    getMainData = async () => {
        const params = {};
        await this.api
            .get(ServerType.API, `/v1/main`)
            .then((result: AxiosResponse<any[]>) => {
                this.saveMainData(result);
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);
                if (error.status === 402) {
                }
                return false;
            });
        // this.feedList = FeedData.data.map((feed) => plainToInstance(FeedDto, feed));
    };

    test = async () => {
        await this.api.get(ServerType.API, '/v1/alarm/count');
    };
}
