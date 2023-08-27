import UserInfomation from 'components/organisms/Profile/user-infomation';
import PageContainer from 'components/templates/page-container';
import { UserDto } from 'dto/user/user.dto';
import { useEffect } from 'react';

/**
 * 유저(채널)
 */
const UserView = () => {
    useEffect(() => {}, []);

    return (
        <PageContainer>
            <UserInfomation data={new UserDto()} />
        </PageContainer>
    );
};

export default UserView;
