import React from 'react';
import { action, autorun, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

const tempMessage = [
    '이것은 임시 메시지 ㅋㅋㅋㅋㅋㅋㅋㅋ',
    '하하하하하하하 ㅋㅋㅋㅋㅋㅋㅋㅋ',
    'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
    'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    '안녕핫게요',
    '임시 메시지입니다. ',
    'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
];

interface IProps {}

type Message = { state: string; message: string; index: number; time: string; isRead: boolean };

export default class ChatViewModel extends DefaultViewModel {
    public isRoomEnter: boolean;
    public currentId: number;
    public prevCurrentId: number;
    public myMessage: string;
    public chatContainerRef: React.RefObject<HTMLElement>;

    public chatList: {
        totalPage: number;
        currentPage: number;
        pageSize: number;
        loading: boolean;
        hasMore: boolean;
        pages: Map<number, Message[]>;
    };

    constructor(props: IProps) {
        super(props);
        this.chatContainerRef = React.createRef<HTMLElement>();

        this.isRoomEnter = false;
        this.currentId = 0;
        this.prevCurrentId = 0;
        this.myMessage = '';

        this.chatList = {
            pages: new Map(),
            loading: false,
            hasMore: true,
            totalPage: 5,
            currentPage: 1,
            pageSize: 20,
        };

        makeObservable(this, {
            chatContainerRef: observable,
            isRoomEnter: observable,
            currentId: observable,
            prevCurrentId: observable,
            myMessage: observable,
            chatList: observable,

            // 메시지 전송 관련
            handleSendMessageByButton: action,
            handleSendMessageByEnter: action,
            handleChangeMessage: action,
            // 채팅방 이동과 관련
            handleChangeCurrentUserId: action,
            handleLeaveChatRoom: action,
        });

        autorun(() => {
            this.handleScrollToBottom();
        });
    }

    // 임시 - 메시지 추가
    private createMessages = () => {
        return new Array(20).fill(null).map((_, index) => ({
            state: Math.random() < 0.5 ? 'HOST' : 'MEMBER',
            message: '기존 메시지 입니다.',
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
            index: index,
            isRead: index > 2 ? false : true,
        }));
    };
    // 임시 - 역방향 메시지 추가
    private createPrevMessages = () => {
        return new Array(20).fill(null).map((_, index) => {
            const randomIndex = Math.floor(Math.random() * tempMessage.length);
            return {
                state: Math.random() < 0.5 ? 'HOST' : 'MEMBER',
                message: tempMessage[randomIndex] + new Date().getSeconds() + index,
                time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
                index: new Date().getSeconds() + index,
                isRead: true,
            };
        });
    };

    // 채팅창 맽 밑으로 이동
    private handleScrollToBottom = () => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };

    // 읽지 않은 상태의 index찾기
    private handleScrollToUnReadMessage = (index) => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            const messageElement = chatContainer.querySelector(
                `[data-index="${this.chatList.currentPage}-${index}"]`,
            );

            if (messageElement) {
                messageElement.scrollIntoView();
            }
        }
    };
    // 추가된 메시지의 맨 마지막 index 찾기
    private handleScrollToPrevMessage = (index) => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            const messageElement = chatContainer.querySelector(
                `[data-index="${this.chatList.currentPage}-${index}"]`,
            );

            if (messageElement) {
                messageElement.scrollIntoView();
            }
        }
    };

    // 읽지 않은 상태부터 위치
    private handleLocateScrollToUnRead = () => {
        const currentPageMessages = this.chatList.pages.get(this.chatList.currentPage);
        const firstUnreadIndex = currentPageMessages?.findIndex((message) => !message.isRead);

        if (firstUnreadIndex !== -1) {
            setTimeout(() => {
                this.handleScrollToUnReadMessage(firstUnreadIndex);
            }, 0);
        } else {
            this.handleScrollToBottom();
        }
    };
    // 역방향 스크롤시 맨 마지막 메시지 위치
    private handleLocateScrollToPrev = () => {
        const prevPageMessages = this.chatList.pages.get(this.chatList.currentPage);
        const prevLastIndex = prevPageMessages?.at(-1);
        if (!prevLastIndex) return;
        this.handleScrollToPrevMessage(this.chatList.pageSize - 1);
    };

    // 초기 데이터 패칭
    getMessages = () => {
        const newMessages = this.createMessages();
        return runInAction(() => {
            this.chatList.pages.set(this.chatList.currentPage, newMessages);
        });
    };

    // 새로운 데이터 패칭
    getPrevMessageAtTop = () => {
        this.chatList.loading = true;

        const newPrevMessages = this.createPrevMessages();
        const newCurrentPage = this.chatList.currentPage + 1;
        if (newPrevMessages.length === 0) {
            runInAction(() => {
                this.chatList.hasMore = false;
                this.chatList.loading = false;
            });
            return;
        }

        runInAction(() => {
            const currentPageMessages = this.chatList.pages.get(newCurrentPage);
            this.chatList.pages.set(newCurrentPage, [...newPrevMessages, ...(currentPageMessages || [])]);
            this.chatList.loading = false;
            this.chatList.currentPage = newCurrentPage;
        });
    };

    // 초기 마운트 될 때,
    handleGetMessageWhenDidMount = async () => {
        await this.getMessages();
        this.handleLocateScrollToUnRead();
        this.handleShowChatRoom(300);
    };

    // 역방향으로 스크롤
    handleGetMoreMessages = async () => {
        await this.getPrevMessageAtTop();
        setTimeout(() => {
            this.handleLocateScrollToPrev();
        }, 0);
    };

    // 메시지 보내기 - 전송버튼
    handleSendMessageByButton = (state: 'HOST' | 'MEMBER') => {
        const currentPageMessages = this.chatList.pages.get(this.chatList.currentPage);
        const newIndex = currentPageMessages ? currentPageMessages.length : 0;
        const newMessage: Message = {
            state,
            message: this.myMessage,
            index: newIndex,
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
            isRead: true,
        };
        runInAction(() => {
            if (currentPageMessages) {
                currentPageMessages.push(newMessage);
            } else {
                this.chatList.pages.set(1, [newMessage]);
            }
            this.myMessage = '';
        });

        setTimeout(() => {
            this.handleScrollToBottom();
        }, 0);
    };

    // 메시지 보내기 - 엔터키
    handleSendMessageByEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>, state: 'HOST' | 'MEMBER') => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.handleSendMessageByButton(state);
        }
    };
    // 메시지 입력창
    handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        return runInAction(() => {
            this.myMessage = value;
        });
    };
    // 채팅방 바꾸기
    handleChangeCurrentUserId = (id: number) => {
        return runInAction(() => {
            this.currentId = id;
            this.prevCurrentId = id;
            this.chatList = {
                pages: new Map(),
                loading: false,
                hasMore: true,
                totalPage: 5,
                currentPage: 1,
                pageSize: 20,
            };
        });
    };
    // 채팅방 나가기
    handleLeaveChatRoom = () => {
        return runInAction(() => {
            this.currentId = 0;
            this.myMessage = '';
            this.chatList = {
                pages: new Map(),
                loading: false,
                hasMore: true,
                totalPage: 5,
                currentPage: 1,
                pageSize: 20,
            };
        });
    };
    // 채팅방 보여주는 이벤트
    handleShowChatRoom = (time: number = 100) => {
        return setTimeout(() => {
            const formEl = document.getElementById('chat_room_wrapper');
            if (!formEl) return;
            formEl.style.opacity = '1';
        }, time);
    };
}