import { Expose } from 'class-transformer';

export class AuthorDto {
    @Expose({ name: 'userId' })
    public readonly userId: number = 0;

    @Expose({ name: 'profile' })
    public readonly profile: string = '';

    @Expose({ name: 'nickName' })
    public readonly nickName: string = '';

    @Expose({ name: 'profileImage' })
    public readonly profileImage: string = '';
}
