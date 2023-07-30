import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import { UserDto } from 'dto/user/user.dto';

interface IProps {
    data: UserDto;
}

export default function UserProfile(props: IProps) {
    const { id, name, profileImage, isAdmin } = props.data;
    console.log(props.data);
    return (
        <Profile.Container>
            <Profile.Image src={profileImage} style={{ width: '48px', height: '48px' }} alt="" />
            <Profile.Name>{name}</Profile.Name>
        </Profile.Container>
    );
}

const Profile = {
    Container: styled.div`
        display: flex;
    `,
    Name: styled.p``,
    Image: styled(LazyImage)``,
};
