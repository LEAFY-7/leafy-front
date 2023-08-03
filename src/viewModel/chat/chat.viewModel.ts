import { action, autorun, makeObservable, observable, runInAction } from 'mobx';
import React from 'react';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class ChatViewModel extends DefaultViewModel {
    public isActive: boolean;
    public currentId: number;
    public myMessage: string;

    public messages: Array<{ state: string; message: string; index: number; time: string; isRead: boolean }>;
    public textareaRef: React.RefObject<HTMLTextAreaElement>;
    public chatContainerRef: React.RefObject<HTMLElement>;
    public previousScrollHeightRef: unknown | number;

    public isLoadingPrevMessages: boolean;
    public isShouldLoadPrevMessages: boolean;

    constructor(props: IProps) {
        super(props);
        this.currentId = 0;
        this.myMessage = '';
        this.messages = [];

        this.textareaRef = React.createRef<HTMLTextAreaElement>();
        this.chatContainerRef = React.createRef<HTMLElement>();
        this.previousScrollHeightRef = React.createRef<number | null>();

        this.isLoadingPrevMessages = false;
        this.isShouldLoadPrevMessages = false;

        makeObservable(this, {
            currentId: observable,
            myMessage: observable,
            messages: observable,
            textareaRef: observable,
            chatContainerRef: observable,
            previousScrollHeightRef: observable,

            isLoadingPrevMessages: observable,
            isShouldLoadPrevMessages: observable,

            handleSendMessageByButton: action,
            handleSendMessageByEnter: action,

            handleChangeMessage: action,
            handleChangeCurrentUserId: action,
            handleLeaveChatRoom: action,
        });

        autorun(() => {
            this.scrollToBottom(); // componentDidUpdate 기능
        });
    }

    private handleTextareaCursorRewind = () => {
        if (!this.textareaRef.current) return;
        this.textareaRef.current.selectionStart = 0;
        this.textareaRef.current.selectionEnd = 0;
    };
    // 임시 - 메시지 추가
    private generateMessages = () => {
        return new Array(20).fill(null).map((_, index) => ({
            state: Math.random() < 0.5 ? 'HOST' : 'MEMBER',
            message: '기존 메시지 입니다.',
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
            index: index,
            isRead: index > 10 ? false : true,
        }));
    };
    // 임시 - 역방향 메시지 추가
    private generatePrevMessages = () => {
        return new Array(20).fill(null).map((_, index) => ({
            state: Math.random() < 0.5 ? 'HOST' : 'MEMBER',
            message: '새로운 메시지 ' + new Date().getSeconds() + index,
            time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
            index: new Date().getSeconds() + index,
            isRead: true,
        }));
    };

    // 채팅창 맽 밑으로 이동
    private scrollToBottom = () => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };

    // 읽지 않은 상태의 index찾기
    private scrollToMessage = (index) => {
        const chatContainer = this.chatContainerRef.current;
        if (chatContainer) {
            const messageElement = chatContainer.querySelector(`[data-index="${index}"]`);
            if (messageElement) {
                messageElement.scrollIntoView();
            }
        }
    };
    // 현재 창에서 맨 위의 높이
    private handleScrollSave = () => {
        const chatContainer = this.chatContainerRef.current;
        if (!chatContainer) return;
        this.previousScrollHeightRef = chatContainer.scrollTop;
        return this.previousScrollHeightRef;
    };

    // 읽지 않은 상태부터 위치
    private scrollToUnRead = () => {
        const firstUnreadIndex = this.messages.findIndex((message) => !message.isRead);
        if (firstUnreadIndex !== -1) {
            setTimeout(() => {
                this.scrollToMessage(firstUnreadIndex);
            }, 0);
        } else {
            this.scrollToBottom();
        }
    };
    // 초기 데이터 가져오기
    getMessages = () => {
        const newMessages = this.generateMessages();
        this.messages = newMessages;
        this.handleScrollSave();
    };

    // 역방향 데이터 패칭
    getPrevMessageAtTop = () => {
        const chatContainer = this.chatContainerRef.current;

        if (!chatContainer) return;

        const newMessages = this.generatePrevMessages();

        runInAction(() => {
            this.messages = [...newMessages, ...this.messages];
        });

        setTimeout(() => {
            chatContainer.scrollTop = (this.previousScrollHeightRef as number) - chatContainer.clientHeight;
        }, 0);
    };

    private getFetchPrevMessages = async () => {
        if (this.isLoadingPrevMessages) return;

        this.isLoadingPrevMessages = true;
        const preHeight = this.handleScrollSave();

        try {
            // 실제로 데이터를 불러오는 로직을 수행
            const newMessages = await this.generatePrevMessages();

            runInAction(() => {
                this.messages = [...newMessages, ...this.messages];
            });

            setTimeout(() => {
                if (typeof preHeight === 'number' && this.chatContainerRef.current) {
                    this.chatContainerRef.current.scrollTop =
                        this.chatContainerRef.current.scrollHeight - preHeight;
                }
            }, 0);
        } catch (error) {
            console.error('이전 메시지 불러오기 실패', error);
        } finally {
            this.isLoadingPrevMessages = false;
        }
    };

    componentDidMount = () => {
        this.getMessages();
        this.scrollToUnRead();
    };

    componentDidUpdate = () => {
        this.getFetchPrevMessages();
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
            this.scrollToBottom();
        }, 0);
    };

    // 메시지 보내기 - 엔터키
    handleSendMessageByEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>, state: 'HOST' | 'MEMBER') => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.handleSendMessageByButton(state);
            this.handleTextareaCursorRewind;
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
        runInAction(() => {
            this.currentId = id;
        });
    };
    // 채팅방 나가기
    handleLeaveChatRoom = () => {
        runInAction(() => {
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
