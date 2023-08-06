import { plainToInstance } from 'class-transformer';
import NoticeData from 'db/notice.json';
import { NoticeDto } from 'dto/notice/notice.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class NoticeViewModel extends DefaultViewModel {
    public noticeList: NoticeDto[] = [];

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            noticeList: observable,

            getNoticeData: action,
        });
    }

    saveNoticeData = (result) => {
        runInAction(() => {});
    };

    getNoticeData = async () => {
        this.noticeList = NoticeData.data.map((notice) => plainToInstance(NoticeDto, notice));
    };
}
