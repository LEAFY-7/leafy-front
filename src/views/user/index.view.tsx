import PageContainer from 'components/templates/page-container';
import { Alert } from 'modules/alert.module';
import { useEffect } from 'react';

/**
 * 유저(채널)
 */
const UserView = () => {
    useEffect(() => {
        Alert.alert('test');
    }, []);

    return (
        <PageContainer>
            {/* <BoxWithBackgroundImage as="section" height="280px">
                {user?.bgImg ? (
                    <BgImg src={user.bgImg} alt="기본 이미지" />
                ) : (
                    <BgImg src={`${publicUrl}/image/default/default-user-bg.svg`} alt="기본 이미지" />
                )}

                <Flex.RowToColumnOnTabletSm style={{ width: '100%' }}>
                    {user?.img ? (
                        <AuthImg src={user.img} alt="기본 이미지" />
                    ) : (
                        <AuthImg src={`${publicUrl}/image/default/default-auth-img.svg`} alt="기본 이미지" />
                    )}
                    <IntroductionBox>{user.simpleIntroduction}</IntroductionBox>
                </Flex.RowToColumnOnTabletSm>
            </BoxWithBackgroundImage> */}
        </PageContainer>
    );
};

export default UserView;
