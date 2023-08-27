import { Expose } from 'class-transformer';

export default class UserResponseDataDto {
    @Expose({ name: 'userId' })
    public readonly userId: number = 0;

    @Expose({ name: 'name' })
    public readonly name: string = '';

    @Expose({ name: 'nickName' })
    public readonly nickName: string = '';

    @Expose({ name: 'profileImage' })
    public readonly profileImage: string = '';

    @Expose({ name: 'backgroundImage' })
    public readonly backgroundImage: string = '';

    @Expose({ name: 'introduction' })
    public readonly introduce: string = '';

    @Expose({ name: 'isAdmin' })
    public readonly isAdmin: boolean = false;

    @Expose({ name: 'phone' })
    public readonly phone: string = '';
}
