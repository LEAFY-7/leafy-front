import { Type } from 'class-transformer';
import { AuthorDto } from './author.dto';

export default class PreviewFeedDto {
    @Type(() => AuthorDto)
    public readonly author: AuthorDto = new AuthorDto();

    public readonly feedId: 0;

    public readonly title: string = '';

    public readonly content: string = '';

    public readonly likeCount: 0;

    public readonly image: string = '';
}
