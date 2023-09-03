import { Type } from 'class-transformer';
import { AuthorDto } from './author.dto';

export class CommentDto {
    public readonly parantId: number = 0;

    @Type(() => AuthorDto)
    public readonly author: AuthorDto = new AuthorDto();
    public readonly id: number = 0;
    public readonly content: string = '';
}
