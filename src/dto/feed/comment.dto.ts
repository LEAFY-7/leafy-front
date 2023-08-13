import { UserDto } from 'dto/user/user.dto';

export class CommentDto {
    public readonly parantId: number = 0;
    public readonly author: UserDto = new UserDto();
    public readonly id: number = 0;
    public readonly content: string = '';
}
