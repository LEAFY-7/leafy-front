import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import Linker from 'components/atoms/Linker/linker';
import pageUrlConfig from 'configs/pageUrl.config';
import { AuthorDto } from 'dto/feed/author.dto';
import UserResponseDataDto from 'dto/user/userResponseData.dto';
import { CSSProperties } from 'react';

interface IProps {
    data: UserResponseDataDto | AuthorDto;
    style?: CSSProperties;
}

export default function UserProfile({ data, style }: IProps) {
    const { userId, nickName, profileImage } = data;

    return (
        <Linker href={`${pageUrlConfig.user}/${userId}`}>
            <Profile.Container>
                <Profile.Image
                    src={profileImage}
                    style={{ width: '48px', height: '48px', ...style }}
                    alt=""
                />
                <Profile.Name>{nickName}</Profile.Name>
            </Profile.Container>
        </Linker>
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
