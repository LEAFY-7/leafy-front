import { Expose, Type } from 'class-transformer';
import { UserDto } from 'dto/user/user.dto';
import { AuthorDto } from './author.dto';

export class FeedDto {
    @Expose({ name: 'id' })
    public readonly id: string = '';

    @Expose({ name: 'author' })
    @Type(() => AuthorDto)
    public readonly author: UserDto = new UserDto();

    @Expose({ name: 'imgUrl' })
    public readonly imgUrl: string = '';

    @Expose({ name: 'title' })
    public readonly title: string = '';

    @Expose({ name: 'tag' })
    public readonly tag: string[] = [];

    @Expose({ name: 'size' })
    public readonly size: string = '';
}
