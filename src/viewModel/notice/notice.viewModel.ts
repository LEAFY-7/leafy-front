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
    public page:number = 1;
    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            page:observable,
            list: observable,
            detail: observable,
            getList: action,
            getDetail: action,
            insertList: action,
            updateList: action,
            deleteList: action,
        });
    }

    getList = async () => {
        await this.api
            .get('/v1/notice', {page:this.page})
            .then((result: AxiosResponse<NoticeDto[]>) => {
                const data = result.data;
                runInAction(() => {
                    data.map((notice: NoticeDto) => plainToInstance(NoticeDto, notice));
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);

                Alert.alert('서버에 문제가 발생했습니다. \n 잠시 후 다시 시도해주세요.');
                return false;
            });
    };
    getDetail = async (id: number) => {
        await this.api
            .get(ServerType.API, `/v1/notice/${id}`)
            .then((result: AxiosResponse<NoticeDto>) => {
                if (this.detail.isHide && !this.me.user.isAdmin)
                    window.location.replace(`${pageUrlConfig.notice}`);
                runInAction(() => {
                    this.detail = plainToInstance(NoticeDto, result.data);
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);

                // 에러 핸들링
                switch (+error.status) {
                    case 401:
                        Alert.alert('인증에 오류가 발생 했습니다.\n다시 로그인 해주세요.', () => {
                            // this.router.replace(pageUrlConfig.signIn),
                        });
                        break;
                    case 403:
                        Alert.alert('요청 권한이 없습니다.', () => {
                            // this.router.replace(pageUrlConfig.notice)
                        });
                        break;
                    case 422:
                        Alert.alert('요청하신 공지사항이 없습니다.', () => {
                            // this.router.replace(pageUrlConfig.notice),
                        });
                        break;
                    case 500:
                        Alert.alert('서버에 문제가 발생했습니다.\n잠시 후 다시 시도해주세요.');
                        break;
                }
                return false;
            });
    };
    insertList = async (detail: NoticeDto) => {
        await this.api
            .post(ServerType.API, '/v1/notice', detail)
            .then((result: AxiosResponse<NoticeDto>) => {
                Alert.alert('저장에 성공했습니다!');
                runInAction(() => {
                    this.list = [...this.list, detail];
                });
            })
            window.location.replace(`${pageUrlConfig.noticeDetail}/${detail.id}`);
        })
        .catch((error: AxiosError)=>{
            console.log(`error : `, error);
            
            switch (+error.status){
                case 404:
                    Alert.alert('인증에 실패했습니다. 다시 로그인해주세요.', () =>  {
                        // this.router.replace(pageUrlConfig.signIn)
                    });
                    break;
                case 500:
                    Alert.alert('서버에 문제가 발생했습니다. \n 잠시 후 다시 시도해주세요.');
                    break;
            }
            return false;
        });
            
    }

    updateList = async (detail: NoticeDto) => {
        await this.api
            .put(ServerType.API, `/v1/notice`, detail)
            .then((result: AxiosResponse<NoticeDto>) => {
                Alert.alert('수정을 완료했습니다!');
                const data = result.data;
                runInAction(() => {
                    this.detail = data;
                });

                window.location.replace(`${pageUrlConfig.notice}/${data.id}`);
            })
            .catch((error: AxiosError) => {
                console.log(`error : `, error);

                switch (+error.status) {
                    case 404:
                        Alert.alert('인증에 실패했습니다. 다시 로그인해주세요.', () => {
                            // this.router.replace(pageUrlConfig.signIn)
                        });
                        break;
                    case 500:
                        Alert.alert('서버에 문제가 발생했습니다. \n 잠시 후 다시 시도해주세요.');
                        break;
                }
                return false;
            });
    };

    deleteList = async (id: number) => {
        await this.api
            .delete(ServerType.API, `/v1/notice/${id}`)
            .then((result: AxiosResponse<NoticeDto[]>) => {
                const data = result.data;
                Alert.alert('존재하지 않는 글입니다.', () => {
                    // this.router.replace(pageUrlConfig.notice);
                });
                runInAction(() => {
                    window.location.replace(`${pageUrlConfig.notice}`);
                    this.list = data.filter((d) => +d.id != id);
                });
                window.location.replace(`${pageUrlConfig.notice}`);
            })
            .catch((error) => {
                console.log('error : ', error);

            switch (+error.code){
                case 404:
                    Alert.alert('인증에 실패했습니다. 다시 로그인해주세요.', () =>  {
                        // this.router.replace(pageUrlConfig.signIn)
                    });
                    break;
                case 500:
                    Alert.alert('서버에 문제가 발생했습니다. \n 잠시 후 다시 시도해주세요.');
                    break;
            }
            return false;
        })
    }

    handleClickPage = (event: any)=>{
        const {id} = event.currentTarget.dataset;

        runInAction(()=>{
            this.page = id;
        });

        return id;
    }
    
    handleClickOffset = () =>{
        const offset = this.page+10;
        return offset;
    }
}
