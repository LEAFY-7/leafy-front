import { Expose, Type } from 'class-transformer';
import { FeedDto } from './feed.dto';

export default class FeedListDto {
    @Expose({ name: 'scrollRequest' })
    public readonly meta: { key: number } = { key: 0 };

    @Expose({ name: 'body' })
    @Type(() => FeedDto)
    public readonly data: FeedDto[] = [];
}
