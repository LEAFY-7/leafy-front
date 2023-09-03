import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { ServerType } from 'constants/constants';
import CommentData from 'db/comment.json';
import FeedData from 'db/feed.json';
import { CommentDto } from 'dto/feed/comment.dto';
import { FeedDto } from 'dto/feed/feed.dto';
import FeedListDto from 'dto/feed/feedList.dto';
import { UserDto } from 'dto/user/user.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { CommentModel } from 'models/feed/comment.model';
import { ChangeEvent } from 'react';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class FeedViewModel extends DefaultViewModel {
    public followers: UserDto[] = [];
    public detail: FeedDto = new FeedDto();
    public list: FeedListDto = new FeedListDto();
    public commentList: CommentDto[] = [];
    public commentModel: CommentModel = new CommentModel();
    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            detail: observable,
            list: observable,
            commentList: observable,
            commentModel: observable,
            followers: observable,

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
        await this.api
            .get(ServerType.API, '/v1/feeds')
            .then((result: AxiosResponse<FeedListDto>) => {
                runInAction(() => {
                    this.list = plainToInstance(FeedListDto, result.data);
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);
                return false;
            });
        // runInAction(() => {
        //     this.list = FeedData.data.map((feed: FeedDto) => plainToInstance(FeedDto, feed));
        // const newFollowers = [];
        // for(let i =0; i < FeedData.data.length; i++){
        //     const is
        // }
        // this.followers = FeedData.data.map((feed: FeedDto) => {
        //     return plainToInstance(UserDto, feed.author);
        // });
        // });
    };

    handleChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        runInAction(() => {
            this.commentModel = { content: value };
        });
    };
}
