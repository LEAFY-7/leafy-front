import { Expose } from 'class-transformer';

export default class FeedActivityDto {
    @Expose({ name: 'year' })
    public readonly year: number = 0;

    @Expose({ name: 'month' })
    public readonly month: number = 0;

    @Expose({ name: 'count' })
    public count: number = 0;
}
