import { Expose } from 'class-transformer';
import { ChatListMessageDto } from './chat-list-message.dto';
import { ChatUserDto } from './chat-user.dto';

export class ChatListDto {
    @Expose({ name: 'id' })
    public readonly id: string = '';

    @Expose({ name: 'count' })
    public count: number = 0;

    @Expose({ name: 'latestMessage' })
    public readonly latestMessage: ChatListMessageDto = new ChatListMessageDto();

    @Expose({ name: 'partner' })
    public readonly partner: ChatUserDto = new ChatUserDto();
}
