import io from 'socket.io-client';
import PageContainer from 'components/templates/page-container';
import TextField from 'components/molecules/TextField/headless-textField';

let socket;

const ChatView = () => {
    // const ENDPOINT = 'http://localhost:5000/chat';
    // React.useEffect(() => {
    //     socket = io(ENDPOINT);
    //     console.log(socket);

    //     socket.emit('join', { name, room });
    // }, [ENDPOINT]);

    return (
        <PageContainer>
            {/* <TextField>
                <TextField.Input value="dd" type="text" />
                <TextField.HelperText>dd</TextField.HelperText>
            </TextField> */}
        </PageContainer>
    );
};

export default ChatView;
