import { Expose } from 'class-transformer';
import { ChatUserDto } from './chat-user.dto';

export class ChatListMessageDto {
    @Expose({ name: 'id' })
    public readonly id: string = '';

    @Expose({ name: 'sender' })
    public readonly sender: ChatUserDto = new ChatUserDto();

    @Expose({ name: 'text' })
    public readonly text: string = '';

    @Expose({ name: 'isRead' })
    public readonly isRead: boolean = false;

    @Expose({ name: 'createdAt' })
    public readonly createdAt: string = '';

    @Expose({ name: 'updatedAt' })
    public readonly updatedAt: string = '';
}
