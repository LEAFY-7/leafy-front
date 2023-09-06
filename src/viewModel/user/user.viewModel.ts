import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { ServerType } from 'constants/constants';
import MyPageDto from 'dto/my/mypage.dto';
import TotalCountDto from 'dto/my/totalCount.dto';
import { UserDto } from 'dto/user/user.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class UserViewModel extends DefaultViewModel {
    public user: UserDto = new UserDto();
    public totalCount: TotalCountDto = new TotalCountDto();
    public countList: number = 0;

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            user: observable,
            totalCount: observable,

            getUser: action,
            getMyPage: action,
        });
    }
    getMyPage = () => {
        return this.api
            .get(ServerType.API, '/v1/users/my-page')
            .then((result: AxiosResponse<MyPageDto>) => {
                console.log('마이', result);

                runInAction(() => {
                    this.totalCount = plainToInstance(TotalCountDto, result.data.totalCountResponse);
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
                console.log('받은 데이터', result.data);
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
