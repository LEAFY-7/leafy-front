import { plainToInstance } from 'class-transformer';
import CommentData from 'db/comment.json';
import FeedData from 'db/feed.json';
import { CommentDto } from 'dto/feed/comment.dto';
import { FeedDto } from 'dto/feed/feed.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class FeedViewModel extends DefaultViewModel {
    public detail: FeedDto = new FeedDto();
    public list: FeedDto[] = [];
    public commentList: CommentDto[] = [];
    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            detail: observable,
            list: observable,
            commentList: observable,

            getDetail: action,
            getList: action,
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
            let newComment = [];
            for (let i = 0; i < CommentData.data.length; i++) {
                if (CommentData.data[i].parantId === this.detail.id) {
                    newComment.push(plainToInstance(CommentDto, CommentData.data[i]));
                }
            }
            this.commentList = newComment;
        });
    };

    getList = async () => {
        runInAction(() => {
            this.list = FeedData.data.map((feed: FeedDto) => plainToInstance(FeedDto, feed));
        });
    };
}
