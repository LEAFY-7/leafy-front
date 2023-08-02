import { plainToInstance } from 'class-transformer';
import NoticeData from 'db/notice.json';
import { NoticeDto } from 'dto/notice/notice.dto';
import { NoticeModel } from 'models/notice/notice.model';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class NoticeViewModel extends DefaultViewModel {
    public noticeList: NoticeDto[] = [];
    public hashTag: [] = [];

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            noticeList: observable,
            hashTag: observable,

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
