import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import { UserDto } from 'dto/user/user.dto';
import { CSSProperties } from 'react';

interface IProps {
    data: UserDto;
    style?: CSSProperties;
}

export default function UserProfile({ data, style }: IProps) {
    const { id, name, profileImage, isAdmin } = data;

    return (
        <Profile.Container>
            <Profile.Image src={profileImage} style={{ width: '48px', height: '48px', ...style }} alt="" />
            <Profile.Name>{name}</Profile.Name>
        </Profile.Container>
    );
}

const Profile = {
    Container: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
    `,
    Name: styled.p`
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        height: fit-content;
    `,
    Image: styled(LazyImage)``,
};
