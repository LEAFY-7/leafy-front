import { Expose } from 'class-transformer';

export class QnaDto {
    @Expose({ name: 'qnaId' })
    public readonly id: number;
    @Expose({ name: 'createdAt' })
    public readonly createdAt: number;
    @Expose({ name: 'modifiedAt' })
    public readonly modifiedAt: number;
    @Expose({ name: 'isDelete' })
    public readonly isDelete: number;
    @Expose({ name: 'contents' })
    public readonly contents: number;
    @Expose({ name: 'title' })
    public readonly title: number;
    @Expose({ name: 'viewCount' })
    public readonly viewCount: number;
    @Expose({ name: 'userId' })
    public readonly userId: number;
    @Expose({ name: 'comments' })
    public readonly comments: number;
    @Expose({ name: 'replies' })
    public readonly replies: number;
}