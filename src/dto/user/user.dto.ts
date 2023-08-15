import { Expose } from 'class-transformer';

export class UserDto {
    @Expose({ name: 'id' })
    public readonly id: number = 0;

    @Expose({ name: 'name' })
    public readonly name: string = '';

    @Expose({ name: 'profileImage' })
    public readonly profileImage: string = '';

    @Expose({ name: 'backgroundImage' })
    public readonly backgroundImage: string = '';

    @Expose({ name: 'introduce' })
    public readonly introduce: string = '';

    @Expose({ name: 'follow' })
    public readonly follow: number = 0;

    @Expose({ name: 'following' })
    public readonly following: number = 0;

    @Expose({ name: 'contentCount' })
    public readonly contentCount: number = 0;

    @Expose({ name: 'isAdmin' })
    public readonly isAdmin: boolean = false;
}
