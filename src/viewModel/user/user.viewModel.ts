import { action, makeObservable, observable, runInAction } from 'mobx';
import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';

import { SignUphModel } from 'models/auth/signUp.model';
import DefaultViewModel from 'viewModel/default.viewModel';
import { ServerType } from 'constants/constants';

import FeedActivityDto from 'dto/my/feedActivity.dto';
import MyPageDto from 'dto/my/mypage.dto';
import TotalCountDto from 'dto/my/totalCount.dto';
import { UserDto } from 'dto/user/user.dto';

interface IProps {}

export default class UserViewModel extends DefaultViewModel {
    public user: UserDto = new UserDto();
    public totalCount: TotalCountDto = new TotalCountDto();
    public chartList: FeedActivityDto[] = [new FeedActivityDto()];
    public userInformation: SignUphModel = new SignUphModel();

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            user: observable,
            userInformation: observable,
            totalCount: observable,
            chartList: observable,

            getUser: action,
            getMyPage: action,
        });
    }
    getMyPage = () => {
        return this.api
            .get(ServerType.API, '/v1/users/my-page')
            .then((result: AxiosResponse<MyPageDto>) => {
                runInAction(() => {
                    this.totalCount = plainToInstance(TotalCountDto, result.data.totalCountResponse);
                    this.chartList = plainToInstance(FeedActivityDto, result.data.feedMonthlyActivity);
                });
            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
    };

    getUser = async (userId: number) => {
        await this.api
            .get(ServerType.API, '/v1/users', userId)
            .then((result: AxiosResponse<UserDto>) => {
                runInAction(() => {
                    this.user = plainToInstance(UserDto, result.data);
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);
                return false;
            });
    };
}
