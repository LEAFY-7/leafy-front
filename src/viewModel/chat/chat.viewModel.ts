import React from 'react';
import io, { Socket } from 'socket.io-client';
import { action, autorun, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';
import { plainToInstance } from 'class-transformer';
import { ChatMessageDto } from 'dto/chat/chat-message.dto';
import socketConfigs from 'configs/socket.config';
import { ChatRoomModel } from 'models/chat/chatRoom.model';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface IProps {}

export default class ChatViewModel extends DefaultViewModel {
    public chatContainerRef: React.RefObject<HTMLElement>;
    public endpoint: string;
    public chatSocket: Socket;
    public globalSocket: Socket;
    public roomState: ChatRoomModel;
    public lastPrevMessageId: string;
    public lastNextMessageId: string;
    public myText: string;
    public prevMessageList: {
        totalPage: number;
        currentPage: number;
        pageSize: number;
        loading: boolean;
        hasMore: boolean;
        pages: Map<number, ChatMessageDto[]>;
    };
    public nextMessageList: {
        totalPage: number;
        currentPage: number;
        pageSize: number;
        loading: boolean;
        hasMore: boolean;
        pages: Map<number, ChatMessageDto[]>;
    };
    public newMessageList: ChatMessageDto[];

    constructor(props: IProps) {
        super(props);
        this.chatContainerRef = React.createRef<HTMLElement>();

        // 소켓
        this.chatSocket = null;
        this.globalSocket = null;

        // 엔드포인트
        this.endpoint = 'http://localhost:5000/';

        // 채팅방 상태
        this.roomState = { roomId: '', me: 0, you: 0, prev: 0 };

        // 마지막 메시지 아이디
        this.lastPrevMessageId = '';
        this.lastNextMessageId = '';

        // 이전 메시지들
        this.prevMessageList = {
            pages: new Map(),
            loading: false,
            hasMore: true,
            totalPage: 5,
            currentPage: 0,
            pageSize: 20,
        };
        // 이후 메시지들
        this.nextMessageList = {
            pages: new Map(),
            loading: false,
            hasMore: true,
            totalPage: 5,
            currentPage: 0,
            pageSize: 20,
        };
        // 새로운 메시지
        this.newMessageList = [];

        // 텍스트
        this.myText = '';

        makeObservable(this, {
            chatSocket: observable,
            roomState: observable,
            newMessageList: observable,
            prevMessageList: observable,
            nextMessageList: observable,
            chatContainerRef: observable,
            myText: observable,

            handleDisconnectSocket: action,
            handleGetMoreMessages: action,
            handleGetMoreNextMessages: action,
            handleSendMessage: action,
            handleSendMessageByEnter: action,
            handleChangeMessage: action,
            handleLeaveChatRoom: action,
        });

        autorun(() => {
            this.handleScrollToBottom();
        });
    }

    // 채팅창 비우기
    private handleClearTextarea = () => {
        runInAction(() => {
            this.myText = '';
        });
    };

    // 채팅방 비우기
    private handleClearChatMessageList = () => {
        return runInAction(() => {
            this.roomState.roomId = '';
            this.roomState.you = 0;
            this.myText = '';
            this.lastPrevMessageId = '';
            this.lastNextMessageId = '';
            this.newMessageList = [];
            this.prevMessageList = {
                pages: new Map(),
                loading: false,
                hasMore: true,
                totalPage: 5,
                currentPage: 0,
                pageSize: 20,
            };
            this.nextMessageList = {
                pages: new Map(),
                loading: false,
                hasMore: true,
                totalPage: 5,
                currentPage: 0,
                pageSize: 20,
            };
        });
    };

    // 이전 메시지 패칭
    private getMorePrevChatMessage = async () => {
        if (!this.prevMessageList.hasMore || !this.lastPrevMessageId) return;
        return await api.get(
            `/v1/chat-message/prev/${this.roomState.roomId}?lastPrevMessageId=${this.lastPrevMessageId}`,
        );
    };

    // 이후 메시지 패칭
    private getMoreNextChatMessage = async () => {
        if (!this.nextMessageList.hasMore || !this.lastNextMessageId) return;
        return await api.get(
            `/v1/chat-message/next/${this.roomState.roomId}?lastPrevMessageId=${this.lastNextMessageId}`,
        );
    };
    // 채팅창 맽 밑으로 이동
    private handleScrollToBottom = () => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };

    // 특정 메시지 엘리먼트 찾기
    private handleFindMessageIndex = (index) => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            const messageElement = chatContainer.querySelector(
                `[data-index="${this.prevMessageList.currentPage}-${index}"]`,
            );

            if (messageElement) {
                messageElement.scrollIntoView();
            }
        }
    };

    // 읽지 않은 상태부터 위치
    private handleLocateScrollToUnRead = (messageList: ChatMessageDto[]) => {
        const firstUnreadIndex = messageList?.findIndex((message) => {
            if (message.sender === this.roomState.me) return false;
            if (message.sender === this.roomState.you) {
                return !message.isRead;
            }
        });
        if (firstUnreadIndex !== -1) {
            setTimeout(() => {
                this.handleFindMessageIndex(firstUnreadIndex - 1);
            }, 0);
        } else {
            setTimeout(() => {
                this.handleScrollToBottom();
            }, 0);
        }
    };
    // 역방향 스크롤시 맨 마지막 메시지 위치
    private handleLocateScrollToPrev = () => {
        if (!this.prevMessageList.hasMore) return;

        const prevPageMessages = this.prevMessageList.pages.get(this.prevMessageList.currentPage);

        const prevLastIndex = prevPageMessages?.at(-1);
        if (!prevLastIndex) return;

        setTimeout(() => {
            this.handleFindMessageIndex(prevPageMessages.length - 1);
        }, 0);
    };

    // 쿼리 찾기
    handleGetQueryParams(query: string) {
        const queryParams = new URLSearchParams(query);
        const me = queryParams.get('me');
        const you = queryParams.get('you');
        if (!me || !you) return;
        const sortedValues = [me, you].sort();
        const roomId = sortedValues.join('_');

        return runInAction(() => {
            this.roomState.roomId = roomId;
            this.roomState.me = +me;
            this.roomState.you = +you;
            this.roomState.prev = +you;
        });
    }

    // 메시지 삭제
    private deleteMessage = async () => {};

    // 채팅방 삭제
    private deleteChatRoom = () => {};

    // 메시지 가져오기
    private getMessages = async () => {
        const { roomId, me, you } = this.roomState;
        await this.chatSocket.emit('join', { roomId, me, you });
        await this.chatSocket.on('messageHistory', (messages) => {
            const messageSize = messages.length;
            const messageList = messages.map((message) => plainToInstance(ChatMessageDto, message));

            if (messageSize) {
                this.lastPrevMessageId = messageList.at(-1).id;
                this.lastNextMessageId = messageList.at(0).id;
            }

            runInAction(() => {
                this.prevMessageList.pages.set(this.prevMessageList.currentPage, messageList.reverse());
            });

            this.handleLocateScrollToUnRead(messageList);
        });
    };

    // 이전 데이터 가져오기
    private handleGetPrvMessage = async () => {
        if (!this.lastPrevMessageId) return;
        this.prevMessageList.loading = true;
        const prevChatMessageList = await this.getMorePrevChatMessage();

        if (prevChatMessageList?.data.length === 0) {
            return runInAction(() => {
                this.prevMessageList.hasMore = false;
                this.prevMessageList.loading = false;
            });
        }
        const newCurrentPage = this.prevMessageList.currentPage + 1;

        const loadMessage = await prevChatMessageList?.data?.map((message) =>
            plainToInstance(ChatMessageDto, message),
        );
        runInAction(() => {
            this.lastPrevMessageId = loadMessage.at(-1).id || '';
            this.prevMessageList.pages.set(newCurrentPage, loadMessage.reverse());
            this.prevMessageList.loading = false;
            this.prevMessageList.currentPage = newCurrentPage;
        });
        this.handleLocateScrollToPrev();
    };

    // 이후 데이터 가져오기
    private handleGetNextMessage = async () => {
        if (!this.lastNextMessageId) return;
        this.nextMessageList.loading = true;
        const nextChatMessageList = await this.getMoreNextChatMessage();

        if (nextChatMessageList?.data.length === 0) {
            return runInAction(() => {
                this.nextMessageList.hasMore = false;
                this.nextMessageList.loading = false;
            });
        }

        const newCurrentPage = this.nextMessageList.currentPage + 1;

        const loadMessage = await nextChatMessageList.data?.map((message) =>
            plainToInstance(ChatMessageDto, message),
        );

        runInAction(() => {
            this.lastNextMessageId = loadMessage.at(-1).id;
            this.nextMessageList.pages.set(newCurrentPage, loadMessage);
            this.nextMessageList.loading = false;
            this.nextMessageList.currentPage = newCurrentPage;
        });
    };

    // 연결 성공
    handleConnectSocket = (space: 'global' | 'chat') => {
        return runInAction(() => {
            this.chatSocket = io(`${this.endpoint}${space}`);
        });
    };

    // 연결 끊기
    handleDisconnectSocket = () => {
        const { roomId } = this.roomState;
        this.chatSocket.emit('roomDisconnect', { roomId });
        this.chatSocket.off('receiveMessage', this.handleReceiveMessage);
        this.chatSocket.disconnect();
        this.handleClearChatMessageList();
    };

    // 처음 마운트될 때
    handleJoinRoom = async (query) => {
        await this.handleConnectSocket('chat');
        await this.handleGetQueryParams(query);
        await this.getMessages();
    };

    // 역방향으로 스크롤
    handleGetMoreMessages = async () => {
        if (!this.prevMessageList.hasMore && this.lastPrevMessageId) return;
        await this.handleGetPrvMessage();
    };

    // 무한 스크롤
    handleGetMoreNextMessages = async () => {
        if (!this.nextMessageList.hasMore && this.lastNextMessageId) return;
        await this.handleGetNextMessage();
    };

    // 메시지 받기
    handleReceiveMessage = (message) => {
        const newMessage = plainToInstance(ChatMessageDto, message);

        runInAction(() => {
            this.newMessageList = [...this.newMessageList, newMessage];
        });
        setTimeout(() => {
            this.handleScrollToBottom();
        }, 0);
    };

    // 메시지 보내기
    handleSendMessage = async () => {
        const socket = this.chatSocket;
        if (socket) {
            socket.emit('send', {
                roomId: this.roomState.roomId,
                me: this.roomState.me,
                text: this.myText,
            });
        }
        this.handleClearTextarea();
        await socket.on('receiveMessage', this.handleReceiveMessage);
    };

    // 메시지 보내기 - 엔터키
    handleSendMessageByEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.handleSendMessage();
        }
    };

    // 메시지 입력창 - onChange
    handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        return runInAction(() => {
            this.myText = value;
        });
    };

    // 채팅방 이동
    handleLeaveChatRoom = () => {
        this.handleClearChatMessageList();
    };
    // 채팅방 나타나기
    handleShowChatRoom = (time: number = 100) => {
        return setTimeout(() => {
            const formEl = document.getElementById('chat_room_wrapper');
            if (!formEl) return;
            formEl.style.opacity = '1';
        }, time);
    };
}
