import { Expose } from 'class-transformer';

export default class FeedImageDto {
    @Expose({ name: 'feedId' })
    public readonly feedId: number = 0;
    @Expose({ name: 'feedImageId' })
    public readonly id: number = 0;
    @Expose({ name: 'image' })
    public readonly image: string = '';
    @Expose({ name: 'imageHeight' })
    public readonly height: number = 0;
}
