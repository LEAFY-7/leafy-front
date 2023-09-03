import { Expose } from 'class-transformer';

export class NoticeDto {
    @Expose({ name: 'noticeId' })
    public readonly id: number;

    @Expose({ name: 'title' })
    public readonly title: string = '';

    @Expose({ name: 'viewCount' })
    public readonly viewCount?: number;
    
    @Expose({ name: 'createAt' })
    public readonly date?: string;

    @Expose({ name: 'modifiedAt' })
    public readonly modified?: string;

    @Expose({ name: 'contents' })
    public readonly content: string = '';

    @Expose({ name: 'isHide'})
    public readonly isHide: boolean;
}
