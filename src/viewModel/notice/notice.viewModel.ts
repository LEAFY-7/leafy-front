import { plainToInstance } from 'class-transformer';
import NoticeData from 'db/notice.json';
import { NoticeDto } from 'dto/notice/notice.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class NoticeViewModel extends DefaultViewModel {
    public noticeList: NoticeDto[] = [];
    public detail: NoticeDto = new NoticeDto();
    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            noticeList: observable,
            detail:observable,
            getNoticeData: action,
            getNoticeDetail: action,
        });
    }

    saveNoticeData = (result) => {
        runInAction(() => {});
    };

    getNoticeData = async () => {
        this.noticeList = NoticeData.data.map((notice) => plainToInstance(NoticeDto, notice));
    };
    getNoticeDetail = async (id) => {
        runInAction(() => {
            this.detail = plainToInstance(
                NoticeDto,
                NoticeData.data.find((notice) => notice.id === id),
            );
        });
    };
}
