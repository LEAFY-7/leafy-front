import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import pageUrlConfig from 'configs/pageUrl.config';
import { PageNationCount, ServerType } from 'constants/constants';
import { QnaDto } from 'dto/qna/qna.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { Alert } from 'modules/alert.module';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class QnaViewModel extends DefaultViewModel {
    public list: QnaDto[] = [];
    public detail: QnaDto = new QnaDto();
    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            list: observable,
            detail: observable,
            deleteList: action,
        });
    }

    deleteList = async (id:number) => {
        await this.api.delete(ServerType.API, `/v1/qna/${id}`)
        .then((result: AxiosResponse<QnaDto[]>) => {
            const data = result.data;
            Alert.alert('존재하지 않는 글입니다.', () => {
                // this.router.replace(pageUrlConfig.notice);
            });
            runInAction(() => {
                window.location.replace(`${pageUrlConfig.myPage}`);
                this.list = data.filter((d) => +d.id != id);
            });
        })
        .catch((error:AxiosError)=>{
            console.log('error : ', error)

            switch(+error.status){
                case 401:
                    Alert.alert('인증에 실패했습니다. 다시 로그인해주세요.', () => {
                        // this.router.replace(pageUrlConfig.signIn)
                    });
                    break;

                case 500:
                    break;
            }
        });
    }
}