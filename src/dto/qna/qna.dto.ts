import { Expose } from 'class-transformer';

export class QnaDto {
    @Expose({ name: 'qnaId' })
    public readonly id?: number;
    @Expose({ name: 'createdAt' })
    public readonly createdAt?: string;
    @Expose({ name: 'modifiedAt' })
    public readonly modifiedAt?: string;
    @Expose({ name: 'isDelete' })
    public readonly isDelete?: boolean;
    @Expose({ name: 'contents' })
    public readonly contents: string;
    @Expose({ name: 'title' })
    public readonly title: string;
    @Expose({ name: 'viewCount' })
    public readonly viewCount?: number;
    @Expose({ name: 'userId' })
    public readonly userId?: number;
    @Expose({ name: 'comments' })
    public readonly comments?: string;
    @Expose({ name: 'replies' })
    public readonly replies?: string;
}