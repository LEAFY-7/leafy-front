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

export default class ChatViewModel extends DefaultViewModel {
    public isActive: boolean;
    public currentId: number;
    public myMessage: string;

    public messages: Array<{ state: string; message: string; index: number; time: string; isRead: boolean }>;
    public chatContainerRef: React.RefObject<HTMLElement>;
    public previousScrollHeightRef: unknown | number;

    constructor(props: IProps) {
        super(props);
        this.currentId = 0;
        this.myMessage = '';
        this.messages = [];

        this.chatContainerRef = React.createRef<HTMLElement>();
        this.previousScrollHeightRef = React.createRef<number | null>();

        makeObservable(this, {
            currentId: observable,
            myMessage: observable,
            messages: observable,
            chatContainerRef: observable,
            previousScrollHeightRef: observable,

            // 스크롤 이동 관련
            handleSaveCurrentScrollTop: observable,
            // 메시지 전송 관련
            handleSendMessageByButton: action,
            handleSendMessageByEnter: action,
            handleChangeMessage: action,
            // 채팅방 이동과 관련
            handleChangeCurrentUserId: action,
            handleLeaveChatRoom: action,
        });

        autorun(() => {
            this.handleScrollToBottom(); // componentDidUpdate 기능
        });
    }

    // 임시 - 메시지 추가
    private createMessages = () => {
        return new Array(20).fill(null).map((_, index) => ({
            state: Math.random() < 0.5 ? 'HOST' : 'MEMBER',
            message: '기존 메시지 입니다.',
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
            index: index,
            isRead: index > 10 ? false : true,
        }));
    };
    // 임시 - 역방향 메시지 추가
    private createPrevMessages = () => {
        return new Array(20).fill(null).map((_, index) => {
            const randomIndex = Math.floor(Math.random() * tempMessage.length); // 루프마다 새로운 랜덤 인덱스 생성

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
    private handleScrollToMessage = (index) => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            const messageElement = chatContainer.querySelector(`[data-index="${index}"]`);
            if (messageElement) {
                messageElement.scrollIntoView();
            }
        }
    };
    // 현재 창에서 맨 위의 높이 저장
    handleSaveCurrentScrollTop = () => {
        const chatContainer = this.chatContainerRef.current;
        if (!chatContainer) return;
        console.log('처음에 스크롤 상단의 높이', chatContainer.scrollHeight);
        this.previousScrollHeightRef = chatContainer.scrollHeight;
        return this.previousScrollHeightRef;
    };
    handleDeleteCurrentScrollTop = () => {
        if (!this.chatContainerRef.current) return;
        this.chatContainerRef = null;
        this.previousScrollHeightRef = null;
    };

    // 읽지 않은 상태부터 위치
    private handleLocateScrollToUnRead = () => {
        const firstUnreadIndex = this.messages.findIndex((message) => !message.isRead);
        if (firstUnreadIndex !== -1) {
            setTimeout(() => {
                this.handleScrollToMessage(firstUnreadIndex);
            }, 0);
        } else {
            this.handleScrollToBottom();
        }
    };
    // 초기 데이터 가져오기
    getMessages = () => {
        const newMessages = this.createMessages();
        this.messages = newMessages;
    };

    // 역방향 데이터 패칭
    getPrevMessageAtTop = () => {
        const chatContainer = this.chatContainerRef.current;
        console.log(chatContainer.scrollHeight, chatContainer.clientHeight, chatContainer.scrollTop);

        if (!chatContainer) return;

        const newMessages = this.createPrevMessages();

        runInAction(() => {
            this.messages = [...newMessages, ...this.messages];
        });

        console.log(chatContainer.scrollHeight, chatContainer.clientHeight, this.previousScrollHeightRef);
        console.log(chatContainer.scrollHeight - (this.previousScrollHeightRef as number));
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight - (this.previousScrollHeightRef as number);
        }, 0);
    };

    componentDidMount = () => {
        this.getMessages();
        this.handleLocateScrollToUnRead();
    };

    handleGetMoreMessages = () => {
        this.getPrevMessageAtTop();
    };

    // 메시지 보내기 - 전송버튼
    handleSendMessageByButton = (state: 'HOST' | 'MEMBER') => {
        const newIndex = this.messages.length;
        const newMessage = {
            state,
            message: this.myMessage,
            index: newIndex,
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
            isRead: true,
        };
        runInAction(() => {
            this.messages = [...this.messages, newMessage];
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
        runInAction(() => {
            this.myMessage = value;
        });
    };
    // 채팅방 바꾸기
    handleChangeCurrentUserId = (id: number) => {
        return runInAction(() => {
            this.currentId = id;
        });
    };
    // 채팅방 나가기
    handleLeaveChatRoom = () => {
        return runInAction(() => {
            this.currentId = 0;
            this.myMessage = '';
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
