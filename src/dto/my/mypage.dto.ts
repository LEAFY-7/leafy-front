import { Expose, Type } from 'class-transformer';
import PreviewFeedDto from 'dto/feed/previewFeed.dto';
import FollowDto from 'dto/user/follow.dto';
import FeedActivityDto from './feedActivity.dto';

export default class MypageDto {
    @Expose({ name: 'followerCount' })
    public readonly followerCount: number = 0;

    @Expose({ name: 'followingCount' })
    public readonly followingCount: number = 0;

    @Expose({ name: 'feedMonthlyActivity' })
    @Type(() => FeedActivityDto)
    public readonly feedMonthlyActivity: FeedActivityDto[] = [];

    @Expose({ name: 'followers' })
    @Type(() => FollowDto)
    public readonly followers: FollowDto[] = [];

    @Expose({ name: 'followings' })
    @Type(() => FollowDto)
    public readonly followings: FollowDto[] = [];

    @Expose({ name: 'feeds' })
    @Type(() => PreviewFeedDto)
    public readonly feeds: PreviewFeedDto[] = [];
}
