import io from 'socket.io-client';
import PageContainer from 'components/templates/page-container';

let socket;

const ChatView = () => {
    // const ENDPOINT = 'http://localhost:5000/chat';
    // React.useEffect(() => {
    //     socket = io(ENDPOINT);
    //     console.log(socket);

    //     socket.emit('join', { name, room });
    // }, [ENDPOINT]);

    return <PageContainer>ChatView</PageContainer>;
};

export default ChatView;
