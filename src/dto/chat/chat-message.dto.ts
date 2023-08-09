import { Expose } from 'class-transformer';

export class ChatMessageDto {
    @Expose({ name: 'id' })
    public readonly id: string = '';

    @Expose({ name: 'sender' })
    public readonly sender: number = 0;

    @Expose({ name: 'text' })
    public readonly text: string = '';

    @Expose({ name: 'isRead' })
    public readonly isRead: boolean = false;

    @Expose({ name: 'createdAt' })
    public readonly createdAt: number = 0;

    @Expose({ name: 'updatedAt' })
    public readonly updatedAt: number = 0;
}
