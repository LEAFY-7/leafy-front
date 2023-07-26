import { Expose } from 'class-transformer';

export class UserDto {
    @Expose({ name: 'id' })
    public readonly id: number = 0;

    @Expose({ name: 'name' })
    public readonly name: string = '';

    @Expose({ name: 'profileImage' })
    public readonly profileImage: string = '';

    @Expose({ name: 'isAdmin' })
    public readonly isAdmin: boolean = false;
}
