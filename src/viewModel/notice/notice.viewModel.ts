import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import pageUrlConfig from 'configs/pageUrl.config';
import NoticeData from 'db/notice.json';
import { NoticeDto } from 'dto/notice/notice.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { Alert } from 'modules/alert.module';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class NoticeViewModel extends DefaultViewModel {
    public list: NoticeDto[] = [];
    public detail: NoticeDto = new NoticeDto();
    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            list: observable,
            detail: observable,
            getList: action,
            getDetail: action,
        });
    }

    getList = async () => {
        runInAction(() => {
            this.list = NoticeData.data.map((notice: NoticeDto) => plainToInstance(NoticeDto, notice));
        });

        await this.api
            .get('url', { key: 'value' })
            .then((result: AxiosResponse<NoticeDto[]>) => {
                const data = result.data;
                runInAction(() => {
                    this.list = data.map((notice: NoticeDto) => plainToInstance(NoticeDto, notice));
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);
                return false;
            });
    };
    getDetail = async (id: number) => {
        runInAction(() => {
            this.detail = plainToInstance(
                NoticeDto,
                NoticeData.data.find((notice: NoticeDto) => +notice.id === +id),
            );
        });

    //     await this.api
    //         .get(`/url/${id}`)
    //         .then((result: AxiosResponse<NoticeDto>) => {
    //             runInAction(() => {
    //                 this.detail = plainToInstance(NoticeDto, result.data);
    //             });
    //         })
    //         .catch((error: AxiosError) => {
    //             console.log('error : ', error);

    //             // 에러 핸들링
    //             switch (+error.code) {
    //                 case 401:
    //                     Alert.alert('인증에 오류가 발생 했습니다.\n다시 로그인 해주세요.', () =>
    //                         this.router.replace(pageUrlConfig.signIn),
    //                     );
    //                     break;
    //                 case 403:
    //                     Alert.alert('요청 권한이 없습니다.', () => this.router.replace(pageUrlConfig.notice));
    //                     break;
    //                 case 422:
    //                     Alert.alert('요청하신 공지사항이 없습니다.', () =>
    //                         this.router.replace(pageUrlConfig.notice),
    //                     );
    //                     break;
    //                 case 500:
    //                     Alert.alert('서버에 문제가 발생했습니다.\n잠시 후 다시 시도해주세요.');
    //                     break;
    //             }
    //             return false;
    //         });
    };
}
