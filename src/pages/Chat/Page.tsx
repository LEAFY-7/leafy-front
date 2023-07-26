import MonoTemplate from 'components/templates/mono-template';

// import io from 'socket.io-client';

const name = '하하';
const room = '훠훠훠';
let socket;

const Chat = () => {
    // const ENDPOINT = 'http://localhost:5000/chat';
    // React.useEffect(() => {
    //     socket = io(ENDPOINT);
    //     console.log(socket);

    //     socket.emit('join', { name, room });
    // }, [ENDPOINT]);

    return <MonoTemplate mainSection={<div>채팅목록</div>} />;
};

export default Chat;
