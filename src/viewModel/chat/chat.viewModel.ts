import React from 'react';
import axios from 'axios';
import io, { Socket } from 'socket.io-client';
import { action, autorun, makeObservable, observable, runInAction } from 'mobx';
import { plainToInstance } from 'class-transformer';

import DefaultViewModel from 'viewModel/default.viewModel';
import { ChatRoomModel } from 'models/chat/chatRoom.model';
import { ChatMessageDto } from 'dto/chat/chat-message.dto';

import socketConfigs from 'configs/socket.config';
import { toast } from 'react-toastify';
import { ChatMessageModel } from 'models/chat/chatMessage.model';
import { formatDate } from 'utils/formatDate';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
const containerId = 'chat-toast-container';
interface IProps {}

export default class ChatViewModel extends DefaultViewModel {
    public chatContainerRef: React.RefObject<HTMLElement>;
    public isRoomEnter: boolean;
    public endpoint: string;
    public chatSocket: Socket;
    public globalSocket: Socket;
    public lastPrevMessageId: string;
    public lastNextMessageId: string;
    public myText: string;
    public roomState: ChatRoomModel = new ChatRoomModel();
    public prevMessageList: ChatMessageModel = new ChatMessageModel();
    public nextMessageList: ChatMessageModel = new ChatMessageModel();
    public newMessageList: ChatMessageDto[];

    constructor(props: IProps) {
        super(props);
        this.chatContainerRef = React.createRef<HTMLElement>();
        this.isRoomEnter = false;
        this.chatSocket = null; // 채팅 소켓
        this.globalSocket = null; // 글로벌 소켓
        this.endpoint = 'http://localhost:5000/'; // 엔드포인트
        this.lastPrevMessageId = ''; // 마지막 이전 메시지 아이디
        this.lastNextMessageId = ''; // 마지막 이후 메시지 아이디
        this.newMessageList = []; // 새로운 메시지
        this.myText = ''; // 텍스트

        makeObservable(this, {
            chatSocket: observable,
            roomState: observable,
            newMessageList: observable,
            prevMessageList: observable,
            nextMessageList: observable,
            chatContainerRef: observable,
            myText: observable,

            handleDisconnectChatSocket: action,
            handleGetMoreMessages: action,
            handleGetMoreNextMessages: action,
            handleSendMessage: action,
            handleSendMessageByEnter: action,
            handleChangeMessage: action,
            handleLeaveChatRoom: action,
            handleGetQueryParams: action,
            handleChangeCurrentId: action,
        });

        autorun(() => {
            this.handleScrollToBottom();
            if (this.chatSocket) {
                this.chatSocket.on(socketConfigs.receiveMessage, this.handleReceiveMessage);
            }
        });
    }

    // 채팅창 비우기
    private handleClearTextarea = () => {
        return runInAction(() => {
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
                currentPage: 0,
                pageSize: 20,
            };
            this.nextMessageList = {
                pages: new Map(),
                loading: false,
                hasMore: true,
                currentPage: 0,
                pageSize: 20,
            };
        });
    };

    // 채팅방 상세 패칭
    private getChatRoom = async ({ roomId, me, you }) => {
        const { data } = await api.get(`/v1/chat-room/${roomId}?me=${me}&you=${you}`);
        return data;
    };

    // 이전 메시지 패칭
    private getMorePrevChatMessage = async () => {
        if (!this.prevMessageList.hasMore || !this.lastPrevMessageId) return;
        return await api.get(
            `/v1/chat-message/prev/${this.roomState.roomId}?lastMessageId=${this.lastPrevMessageId}`,
        );
    };

    // 이후 메시지 패칭
    private getMoreNextChatMessage = async () => {
        if (!this.nextMessageList.hasMore || !this.lastNextMessageId) return;
        return await api.get(
            `/v1/chat-message/next/${this.roomState.roomId}?lastMessageId=${this.lastNextMessageId}`,
        );
    };

    private handleGlobalToast = () => {
        const globalToastEl = document.getElementById('app-toast-container');
        globalToastEl.style.display = 'none';
    };

    // 채팅창 이동 변경 관리 - 채팅창 맽 밑으로 이동
    private handleScrollToBottom = () => {
        const chatContainer = this.chatContainerRef.current;
        if (!chatContainer) return;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    // 채팅창 이동 변경 관리 - 특정 메시지 엘리먼트 찾기
    private handleFindMessageIndex = (id) => {
        const { currentPage } = this.prevMessageList;
        const chatContainer = this.chatContainerRef.current;

        if (!chatContainer) return;
        const messageEl = chatContainer.querySelector(`[data-index="${currentPage}-${id}"]`);

        if (!messageEl) return;
        messageEl.scrollIntoView();
    };

    // 채팅창 이동 변경 관리 - 읽지 않은 상태부터 위치
    private handleScrollToUnRead = (lastNextMessageId: string = '') => {
        if (lastNextMessageId) {
            setTimeout(() => {
                this.handleFindMessageIndex(lastNextMessageId);
            }, 0);
        } else {
            setTimeout(() => {
                this.handleScrollToBottom();
            }, 0);
        }
    };
    // 채팅창 이동 변경 관리 - 역방향 스크롤시 맨 마지막 메시지 위치
    private handleLocateScrollToPrev = (targetId: string = '') => {
        // const prevPageMessages = this.prevMessageList.pages.get(this.prevMessageList.currentPage);
        // const prevLastIndex = prevPageMessages?.at(-1);
        // if (!prevLastIndex) return;

        setTimeout(() => {
            this.handleFindMessageIndex(targetId);
        }, 0);
    };

    // 메시지 삭제
    private deleteMessage = async () => {};

    // 채팅방 삭제
    private deleteChatRoom = () => {};

    private newGetMessage = async () => {
        const { roomId, me, you } = this.roomState;
        try {
            await this.chatSocket.emit(socketConfigs.join, { roomId, me, you });
            const messages: ChatMessageDto[] | null = await this.getChatRoom({ roomId, me, you });

            if (!messages) return;

            const messageSize = messages.length;
            const messageList = messages.map((message) => plainToInstance(ChatMessageDto, message));
            const readUntil = messageList.at(-1).createdAt;

            if (messageSize) {
                this.lastPrevMessageId = messageList.at(0).id || '';
                this.lastNextMessageId = messageList.at(-1).id || '';
            }

            runInAction(() => {
                this.prevMessageList.pages.set(this.prevMessageList.currentPage, messageList);
            });

            this.handleScrollToUnRead(this.lastNextMessageId);
            toast.success(`채팅방에 입장하였습니다.`, { containerId });
            toast.success(`${formatDate(readUntil)}까지 읽었습니다.`, { containerId });
        } catch (error) {
            await toast.error('에러가 발생했습니다. 다시 시도해주세요.', { containerId });
        }
    };

    // 메시지 가져오기
    private getMessages = async () => {
        const { roomId, me, you } = this.roomState;
        try {
            await this.chatSocket.emit(socketConfigs.join, { roomId, me, you });
            await this.chatSocket.on(socketConfigs.messageHistory, ({ messages, me }) => {
                console.log('메세지', messages);
                // if (!messages.length) {
                //     toast.success('새로운 채팅방을 시작하였습니다.', { containerId });
                // }
                if (me !== this.roomState.me) return;
                const messageSize = messages.length;
                const messageList = messages.map((message) => plainToInstance(ChatMessageDto, message));
                const readUntil = messageList.at(-1).createdAt;

                if (messageSize) {
                    this.lastPrevMessageId = messageList.at(0).id || '';
                    this.lastNextMessageId = messageList.at(-1).id || '';
                }

                runInAction(() => {
                    this.prevMessageList.pages.set(this.prevMessageList.currentPage, messageList);
                });

                this.handleScrollToUnRead(this.lastNextMessageId);
                toast.success(`채팅방에 입장하였습니다.`, { containerId });
                toast.success(`${formatDate(readUntil)}까지 읽었습니다.`, { containerId });
            });
        } catch {
            this.chatSocket.on('error', (errorMessage) => {
                console.error(errorMessage);
                toast.error('에러가 발생했습니다. 다시 시도해주세요.', { containerId });
            });
        }
    };

    // 이전 데이터 가져오기
    private handleGetPrvMessage = async () => {
        if (!this.lastPrevMessageId) return;

        this.prevMessageList.loading = true;
        const prevChatMessageList = await this.getMorePrevChatMessage();

        if (!prevChatMessageList?.data.length) return;
        if (prevChatMessageList?.data.length < this.prevMessageList.pageSize) {
            runInAction(() => {
                this.prevMessageList.hasMore = false;
                this.prevMessageList.loading = false;
            });
        }

        const newCurrentPage = this.prevMessageList.currentPage + 1;
        const loadMessage = await prevChatMessageList?.data?.map((message) =>
            plainToInstance(ChatMessageDto, message),
        );

        const targetId = loadMessage.at(-1).id || '';

        runInAction(() => {
            this.lastPrevMessageId = loadMessage.at(0).id || '';
            this.prevMessageList.pages.set(newCurrentPage, loadMessage);
            this.prevMessageList.loading = false;
            this.prevMessageList.currentPage = newCurrentPage;
        });
        this.handleLocateScrollToPrev(targetId);

        await toast.success(`${formatDate(loadMessage.at(0).createdAt)} 메시지를 불러옵니다.`, {
            containerId,
        });
    };

    // 이후 데이터 가져오기
    private handleGetNextMessage = async () => {
        if (!this.lastNextMessageId) return;
        this.nextMessageList.loading = true;
        const nextChatMessageList = await this.getMoreNextChatMessage();

        if (nextChatMessageList?.data.length < this.nextMessageList.pageSize) {
            runInAction(() => {
                this.nextMessageList.hasMore = false;
                this.nextMessageList.loading = false;
            });
        }

        const newCurrentPage = this.nextMessageList.currentPage + 1;

        const loadMessage = await nextChatMessageList.data?.map((message) =>
            plainToInstance(ChatMessageDto, message),
        );
        const newLastPrevId = loadMessage.at(-1)?.id || '';

        return runInAction(() => {
            this.lastNextMessageId = newLastPrevId;
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
    handleDisconnectChatSocket = () => {
        const { roomId, me } = this.roomState;
        this.chatSocket.emit(socketConfigs.roomDisconnect, { roomId, me });
        this.chatSocket.off(socketConfigs.receiveMessage, this.handleReceiveMessage);
        this.chatSocket.disconnect();
        this.handleClearChatMessageList();
    };

    // 처음 마운트될 때
    handleJoinRoom = async (query) => {
        this.handleGetQueryParams(query);
        this.handleConnectSocket('chat');
        await this.getMessages();
        // await this.newGetMessage();
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
        try {
            const socket = this.chatSocket;
            if (socket) {
                socket.emit(socketConfigs.send, {
                    roomId: this.roomState.roomId,
                    me: this.roomState.me,
                    text: this.myText,
                });
            }
            this.handleClearTextarea();
        } catch {
            toast.error('에러가 발생했습니다.', { containerId });
        }
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
        this.handleGlobalToast();
        return setTimeout(() => {
            const formEl = document.getElementById('chat_room_wrapper');
            if (!formEl) return;
            formEl.style.opacity = '1';
        }, time);
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

    handleChangeCurrentId = (you: number) => {
        return runInAction(() => {
            this.roomState.you = you;
        });
    };

    handleClear = () => {
        const globalToastEl = document.getElementById('app-toast-container');
        globalToastEl.style.display = 'block';
        clearTimeout(this.handleShowChatRoom(300));
    };
}
