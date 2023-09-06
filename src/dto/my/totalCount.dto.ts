import { Expose } from 'class-transformer';

export default class TotalCountDto {
    @Expose({ name: 'feedCount' })
    public readonly feedCount: number = 0;

    @Expose({ name: 'followerCount' })
    public readonly followerCount: number = 0;

    @Expose({ name: 'followingCount' })
    public readonly followingCount: number = 0;

    @Expose({ name: 'likeCount' })
    public readonly likeCount: number = 0;
}
