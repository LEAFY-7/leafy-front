import { Expose } from 'class-transformer';

export class ChatUserDto {
    @Expose({ name: 'id' })
    public readonly id: number = 0;

    @Expose({ name: 'nickName' })
    public readonly nickName: string = '';

    @Expose({ name: 'email' })
    public readonly email: string = '';

    @Expose({ name: 'profileImage' })
    public readonly profileImage: string = '';

    @Expose({ name: 'createdAt' })
    public readonly createdAt: Date = new Date();

    @Expose({ name: 'updatedAt' })
    public readonly updatedAt: Date = new Date();

    @Expose({ name: 'chatRoom' })
    public readonly chatRoom: string[] = [];
}
