import { Expose } from 'class-transformer';

export class NoticeDto {
    @Expose({ name: 'id' })
    public readonly id: string = '';

    @Expose({ name: 'title' })
    public readonly title: string = '';

    @Expose({ name: 'viewCount' })
    public readonly viewCount: string = '';
    
    @Expose({ name: 'date' })
    public readonly date: string = '';

    @Expose({ name: 'content' })
    public readonly content: string = '';

    @Expose({ name: 'isHide'})
    public readonly isHide: string = '';
}
