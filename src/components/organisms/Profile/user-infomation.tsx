import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import { UserDto } from 'dto/user/user.dto';

interface IProps {
    data: UserDto;
}

const UserInfomation = ({ data }: IProps) => {
    return (
        <Container
            background={
                data.backgroundImage
                    ? data.backgroundImage
                    : `${process.env.PUBLIC_URL}/image/default/default-user-bg.svg`
            }
        >
            {/* <Profile> */}
            <LazyImage src={data.profileImage} alt="" />
            {/* </Profile> */}
        </Container>
    );
};

export default UserInfomation;

const Container = styled.div<{ background: any }>`
    width: 100%;
    height: 320px;
    border-radius: 16px;
    background: url(${({ background }) => background}) no-repeat;
    background-size: cover;
`;
