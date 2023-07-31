import React from 'react';
// import io from 'socket.io-client';
import PageContainer from 'components/templates/page-container';
import TextField from 'components/molecules/TextField/default-textField';
import { Controller, useForm } from 'react-hook-form';
import { SignUphModel } from 'models/auth/signUp.model';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import { RiLockPasswordLine } from 'react-icons/ri';

// let socket;

const ChatView = () => {
    // const ENDPOINT = 'http://localhost:5000/chat';
    // React.useEffect(() => {
    //     socket = io(ENDPOINT);
    //     console.log(socket);

    //     socket.emit('join', { name, room });
    // }, [ENDPOINT]);

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            nickName: '',
        },
    });

    const handleFormSubmit = (data) => {
        console.log(data);
    };

    console.log(errors);
    return (
        <PageContainer>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Controller
                    name={'name'}
                    control={control}
                    defaultValue={''}
                    rules={{
                        required: '이름 입력은 필수 입니다.',
                        minLength: {
                            value: 2,
                            message: '최소 2자리 이상 입력하셔야 합니다.',
                        },
                        maxLength: {
                            value: 4,
                            message: '최대 20자리 이하 입력하세야 합니다.',
                        },
                    }}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <>
                            <TextField error={!!error} disabled>
                                <TextField.Wrapper style={{ height: '100px' }}>
                                    <TextField.Label>아이디</TextField.Label>
                                    <TextField.Container
                                        id="input_container"
                                        rightIcon={<RiLockPasswordLine />}
                                    >
                                        <TextField.Input
                                            value={value}
                                            type="text"
                                            placeholder="안녕하세여"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                            }}
                                            style={{ width: '300px' }}
                                        />
                                    </TextField.Container>
                                    <TextField.HelperText
                                        leftIcon={<RiLockPasswordLine />}
                                        style={{ padding: '0 8px' }}
                                    >
                                        {error?.message}
                                    </TextField.HelperText>
                                </TextField.Wrapper>
                            </TextField>
                        </>
                    )}
                />
                <RectangleButton type="submit" variant="primary">
                    버튼
                </RectangleButton>
            </form>
        </PageContainer>
    );
};

export default ChatView;
