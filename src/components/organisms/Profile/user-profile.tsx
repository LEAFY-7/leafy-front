import styled from '@emotion/styled';
import { UserDto } from 'dto/user/user.dto';
import LazyImage from 'components/atoms/LazyImage/default-image';

interface IProps {
    data: UserDto;
}

export default function UserProfile(props: IProps) {
    return (
        <Profile.Container>
            <Profile.Image />
        </Profile.Container>
    );
}

const Profile = {
    Container: styled.div``,
    Image: styled(LazyImage)``,
};
