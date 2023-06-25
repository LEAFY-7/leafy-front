import { Expose, Type } from 'class-transformer';
import { AuthorDto } from './author.dto';

export class FeedDto {
    @Expose({ name: 'id' })
    public readonly id: string = '';

    @Expose({ name: 'author' })
    @Type(() => AuthorDto)
    public readonly author: AuthorDto = new AuthorDto();

    @Expose({ name: 'imgUrl' })
    public readonly imgUrl: string = '';

    @Expose({ name: 'title' })
    public readonly title: string = '';

    @Expose({ name: 'tag' })
    public readonly tag: string[] = [];
}
