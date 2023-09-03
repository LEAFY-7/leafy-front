import { ChatMessageDto } from 'dto/chat/chat-message.dto';

export class ChatMessageModel {
    public pages: Map<number, ChatMessageDto[]> = new Map();
    public loading: boolean = false;
    public hasMore: boolean = true;
    public currentPage: number = 0;
    public pageSize: number = 20;
}
