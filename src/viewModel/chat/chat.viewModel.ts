import React from 'react';
import axios from 'axios';
import io, { Socket } from 'socket.io-client';
import { action, autorun, makeObservable, observable, runInAction } from 'mobx';
import { plainToInstance } from 'class-transformer';
import { toast } from 'react-toastify';

import DefaultViewModel from 'viewModel/default.viewModel';
import { ChatRoomModel } from 'models/chat/chatRoom.model';
import { ChatMessageDto } from 'dto/chat/chat-message.dto';
import tokenModule from 'modules/token.module';
import formatDate from 'modules/formatDate.module';

import socketConfigs from 'configs/socket.config';
import { ChatMessageModel } from 'models/chat/chatMessage.model';
import { ChatUserDto } from 'dto/chat/chat-user.dto';
import { ChatListDto } from 'dto/chat/chat-list.dto';

const initializeMessageModel = () => ({
    pages: new Map(),
    loading: false,
    hasMore: true,
    currentPage: 0,
    pageSize: 20,
});

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
    public endpoint: string;
    public chatSocket: Socket;
    public userSocket: Socket;
    public user: ChatUserDto = new ChatUserDto();
    public chatList: ChatListDto[] = [new ChatListDto()];

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
        this.chatSocket = null; // 채팅 소켓
        this.userSocket = null; // 글로벌 소켓
        this.endpoint = 'ws://localhost:5000/'; // 엔드포인트
        this.lastPrevMessageId = ''; // 마지막 이전 메시지 아이디
        this.lastNextMessageId = ''; // 마지막 이후 메시지 아이디
        this.newMessageList = []; // 새로운 메시지
        this.myText = ''; // 텍스트
        this.roomState.me = +tokenModule.get().leafyer.userId || 0;

        makeObservable(this, {
            userSocket: observable,
            chatSocket: observable,
            user: observable,
            chatList: observable,
            roomState: observable,
            newMessageList: observable,
            prevMessageList: observable,
            nextMessageList: observable,
            chatContainerRef: observable,
            myText: observable,

            handleUserSocket: action,
            handleChatRoomSocket: action,
            handleDisconnectChatSocket: action,

            handleReverseScroll: action,
            handleForwardScroll: action,
            handleSendMessage: action,
            handleSendMessageByEnter: action,
            handleChangeMessage: action,
            handleChangePartner: action,
            handleLeaveChatRoom: action,
            handleQueryParams: action,
        });

        autorun(() => {
            this.handleScrollToBottom();
            if (this.chatSocket) {
                this.chatSocket.on(socketConfigs.receiveMessage, this.handleReceiveMessage);
            }
        });
    }

    // 글로벌 소켓 연결
    private handleConnectChat = () => {
        return runInAction(() => {
            this.chatSocket = io(`${this.endpoint}chat`);
        });
    };

    // 채팅방 소켓 연결
    private handleConnectUser = () => {
        return runInAction(() => {
            this.userSocket = io(`${this.endpoint}user`);
        });
    };

    // 글로벌 소켓 조인
    private handleJoinUser = async () => {
        const { me } = this.roomState;
        try {
            // console.log('조인', me);
            await this.userSocket.emit('join', { userId: +me });
        } catch {
            console.log('에러');
            this.userSocket.on('error', (errorMessage) => {
                console.error(errorMessage);
            });
        }
    };

    handleSendUser = async (userId: number) => {
        try {
            await this.userSocket.emit('send-user', { userId });
        } catch {
            console.log('에러');
        }
    };

    handleReceiveUser = async () => {
        const { me } = this.roomState;

        await this.userSocket.on('receive-user', ({ data, userId }) => {
            if (+userId === me) {
                try {
                    return runInAction(() => {
                        this.chatList = data.chatList?.map((chat) => plainToInstance(ChatListDto, chat));
                    });
                } catch {
                    console.log('에러');
                    this.userSocket.on('error', (error) => {
                        console.log('에러 :', error);
                    });
                }
            } else {
                console.log('No');
            }
        });
    };

    // 채팅방 소켓 조인
    handleJoinChatRoom = async () => {
        const { roomId, me, you } = this.roomState;
        try {
            await this.chatSocket.emit(socketConfigs.join, { roomId, me, you });
            toast(`${you}님과의 채팅방에 입장하였습니다.`, { containerId });
        } catch {
            this.chatSocket.on('error', (errorMessage) => {
                console.error(errorMessage);
                toast.error('에러가 발생했습니다. 다시 시도해주세요.', { containerId });
            });
        }
    };

    // 채팅창 비우기
    private handleClearTextarea = () => {
        return runInAction(() => {
            this.myText = '';
        });
    };

    // 채팅방 비우기
    private handleClearChatRoom = () => {
        return runInAction(() => {
            this.roomState.roomId = '';
            this.roomState.you = 0;
            this.lastPrevMessageId = '';
            this.lastNextMessageId = '';
            this.newMessageList = [];
            this.prevMessageList = initializeMessageModel();
            this.nextMessageList = initializeMessageModel();
        });
    };

    // 채팅방 상세 패칭
    private getChatRoom = async ({ roomId, me, you }) => {
        const { data } = await api.get(`/v1/chat-room/${roomId}?me=${me}&you=${you}`);
        return data;
    };

    // 정방향 무한 스크롤 메시지 패칭
    private getMorePrevChatMessage = async () => {
        if (!this.prevMessageList.hasMore || !this.lastPrevMessageId) return;
        return await api.get(
            `/v1/chat-message/prev/${this.roomState.roomId}?lastMessageId=${this.lastPrevMessageId}`,
        );
    };

    // 역방향 무한 스크롤 메시지 패칭
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
            const messages: ChatMessageDto[] | null = await this.getChatRoom({ roomId, me, you });

            if (!messages) return;

            const messageSize = messages.length;
            const messageList = messages.map((message) => plainToInstance(ChatMessageDto, message));

            console.log('message', messageList);
            const readUntil = messageList.at(-1).createdAt;

            if (messageSize) {
                this.lastPrevMessageId = messageList.at(0).id || '';
                this.lastNextMessageId = messageList.at(-1).id || '';
            }

            runInAction(() => {
                this.prevMessageList.pages.set(this.prevMessageList.currentPage, messageList);
            });

            this.handleScrollToUnRead(this.lastNextMessageId);
            toast.success(`${formatDate.YMDHM(readUntil)}까지 읽었습니다.`, { containerId });
        } catch (error) {
            this.chatSocket.on('error', (errorMessage) => {
                console.error(errorMessage);
            });
        }
    };

    // 이전 데이터 가져오기
    private handlePrevMessages = async () => {
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

        await toast.success(`${formatDate.YMDHM(loadMessage.at(0).createdAt)} 메시지를 불러옵니다.`, {
            containerId,
        });
    };

    // 이후 데이터 가져오기
    private handleNextMessage = async () => {
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

        runInAction(() => {
            this.lastNextMessageId = newLastPrevId;
            this.nextMessageList.pages.set(newCurrentPage, loadMessage);
            this.nextMessageList.loading = false;
            this.nextMessageList.currentPage = newCurrentPage;
        });

        await toast.success(`메시지를 불러옵니다.`, { containerId });
    };

    private handleGetUser = async () => {
        try {
            await this.userSocket.on('get-user', ({ data, userId }) => {
                if (userId !== this.roomState.me) return;

                let updatedChatList = [...this.chatList];

                runInAction(() => {
                    this.user = plainToInstance(ChatUserDto, data.user);
                });

                if (this.roomState.roomId) {
                    const foundIndex = data.chatList.findIndex((chat) => chat.id === this.roomState.roomId);
                    updatedChatList = data.chatList.map((chat) => plainToInstance(ChatListDto, chat));

                    if (foundIndex >= 0) {
                        updatedChatList[foundIndex].count = 0;
                    }
                    runInAction(() => {
                        this.chatList = updatedChatList;
                    });
                } else {
                    runInAction(() => {
                        this.chatList = data.chatList.map((chat) => plainToInstance(ChatListDto, chat));
                    });
                }
            });
        } catch {
            console.log('에러 ');
        }
    };
    private handleSendRoom = async () => {
        try {
            const { me, roomId } = this.roomState;
            await this.chatSocket.emit(socketConfigs.enterRoom, { userId: me, roomId });
            const foundIndex = this.chatList.findIndex((chat) => chat.id === roomId);

            if (foundIndex >= 0) {
                this.chatList[foundIndex].count = 0;

                runInAction(() => {
                    this.chatList = [...this.chatList];
                });
            }
        } catch {
            this.chatSocket.on('error', (errorMessage) => {
                console.error(errorMessage);
            });
        }
    };

    // 채팅방 소켓 - MessagesHistory
    handleGetMessagesHistory = async () => {
        try {
            await this.handleSendRoom();

            await this.chatSocket.on(socketConfigs.messageHistory, ({ messages, me }) => {
                console.log('받은 데이터', { messages, me });
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
                toast.success(`${formatDate.YMDHM(readUntil)}까지 읽었습니다.`, { containerId });
            });
        } catch {
            this.chatSocket.on('error', (errorMessage) => {
                console.error(errorMessage);
                toast.error('에러가 발생했습니다. 다시 시도해주세요.', { containerId });
            });
        }
    };

    // 연결 끊기 - 채팅방 소켓
    handleDisconnectChatSocket = () => {
        const { roomId, me } = this.roomState;
        this.chatSocket.emit(socketConfigs.roomDisconnect, { roomId, me });
        this.chatSocket.off(socketConfigs.receiveMessage, this.handleReceiveMessage);
        this.chatSocket.disconnect();
        this.handleLeaveChatRoom();
    };

    // 연결 끊기 - 글로벌 소켓
    handleDisconnectUserSocket = () => {
        this.userSocket.disconnect();
    };

    // 유저 소켓 핸들러
    handleUserSocket = async () => {
        await this.handleConnectUser();
        await this.handleJoinUser();
        this.handleGetUser();
    };

    // 채팅방 소켓 핸들러
    handleChatRoomSocket = async ({ query }: { query: string }) => {
        this.handleQueryParams(query);
        await this.handleConnectChat();
        await this.handleJoinChatRoom();
        this.handleGetMessagesHistory();
    };

    handleInit = async () => {
        await this.getMe;
        const me = this.me.userId;
        runInAction(() => {
            this.roomState.me = me;
        });
    };

    // 역방향으로 스크롤
    handleReverseScroll = async () => {
        if (!this.prevMessageList.hasMore && this.lastPrevMessageId) return;
        await this.handlePrevMessages();
    };

    // 무한 스크롤
    handleForwardScroll = async () => {
        if (!this.nextMessageList.hasMore && this.lastNextMessageId) return;
        await this.handleNextMessage();
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
        const { me, you } = this.roomState;

        try {
            const socket = this.chatSocket;
            if (socket) {
                await socket.emit(socketConfigs.send, {
                    roomId: this.roomState.roomId,
                    me: this.roomState.me,
                    you: this.roomState.you,
                    text: this.myText,
                });
            }

            this.handleClearTextarea();
            console.log('보낼 상대', you);
            this.handleSendUser(you);
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

    // 채팅방 떠나기
    handleLeaveChatRoom = () => {
        this.handleClearChatRoom();
        this.handleClearTextarea();
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
    handleQueryParams(query: string) {
        const queryParams = new URLSearchParams(query);
        const me = queryParams.get('me');
        const you = queryParams.get('you');
        if (!me || !you) return;
        const sortedValues = [me, you].sort();
        const roomId = sortedValues.join('_');

        runInAction(() => {
            this.roomState.roomId = roomId;
            this.roomState.me = +me;
            this.roomState.you = +you;
            this.roomState.prev = +you;
        });
    }

    // 채팅 상대 변경
    handleChangePartner = (you: number) => {
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
