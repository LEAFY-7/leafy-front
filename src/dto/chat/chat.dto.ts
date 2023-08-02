import { Expose } from 'class-transformer';

export class ChatDto {
    @Expose({ name: 'state' })
    public readonly state: 'HOST' | 'MEMBER' = 'HOST';

    @Expose({ name: 'message' })
    public readonly message: string = '';

    @Expose({ name: 'createdAt' })
    public readonly createdAt: number = 0;

    @Expose({ name: 'isRead' })
    public readonly isRead: boolean = false;
}
