import { Expose, Type } from 'class-transformer';
import { AuthorDto } from './author.dto';
import FeedImageDto from './feedImage.dto';

export class FeedDto {
    @Expose({ name: 'feedId' })
    public readonly id: number = 0;

    @Expose({ name: 'feedImages' })
    @Type(() => FeedImageDto)
    public readonly images: FeedImageDto[] = [];

    @Expose({ name: 'feedAuthorResponse' })
    @Type(() => AuthorDto)
    public readonly author: AuthorDto = new AuthorDto();

    @Expose({ name: 'title' })
    public readonly title: string = '';

    @Expose({ name: 'content' })
    public readonly content: string = '';

    @Expose({ name: 'createdAt' })
    public readonly createdAt: string = '';

    @Expose({ name: 'feedType' })
    public readonly type: string = '';

    @Expose({ name: 'humidity' })
    public readonly humidity: number = 0;

    @Expose({ name: 'modifiedAt' })
    public readonly modifiedAt: string = '';

    @Expose({ name: 'nickname' })
    public readonly nickname: string = '';

    @Expose({ name: 'species' })
    public readonly species: string = '';

    @Expose({ name: 'temperature' })
    public readonly temperature: number = 0;

    @Expose({ name: 'waterAmount' })
    public readonly waterAmount: number = 0;

    @Expose({ name: 'wateringPeriod' })
    public readonly wateringPeriod: string = '';
}
