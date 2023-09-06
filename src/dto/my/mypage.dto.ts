import { Expose, Type } from 'class-transformer';
import PreviewFeedDto from 'dto/feed/previewFeed.dto';
import FollowDto from 'dto/user/follow.dto';
import FeedActivityDto from './feedActivity.dto';
import TotalCountDto from './totalCount.dto';

export default class MyPageDto {
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

    @Expose({ name: 'qnas' })
    public readonly qnas = [];

    @Expose({ name: 'totalCountResponse' })
    public readonly totalCountResponse: TotalCountDto = new TotalCountDto();
}
