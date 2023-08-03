import React from 'react';
import { observer } from 'mobx-react';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import pageUrlConfig from 'configs/pageUrl.config';
import * as Styled from './background.styles';

import PageContainer from 'components/templates/page-container';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import FindEmailForm from './find-email-form';
import FindPwdForm from './find-pwd-form';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import AuthTemplate from 'components/templates/auth-template';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const FindView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    React.useEffect(() => {
        authViewModel.handleTimeoutId();
        return () => clearTimeout(authViewModel.handleTimeoutId());
    }, [authViewModel.toggle]);
    return (
        <PageContainer style={{ overflow: 'visible', height: '100vh' }}>
            <AuthTemplate>
                {!authViewModel.toggle && (
                    <>
                        <FindEmailForm />
                        <RectangleButton
                            size="md"
                            backgroundColor="transparent"
                            color="primary"
                            onClick={authViewModel.handleToggle}
                        >
                            비밀번호 찾으러 가기
                        </RectangleButton>
                    </>
                )}
                {authViewModel.toggle && (
                    <>
                        <FindPwdForm />
                        <RectangleButton
                            size="md"
                            backgroundColor="transparent"
                            color="primary"
                            onClick={authViewModel.handleToggle}
                        >
                            이메일 찾으러 가기
                        </RectangleButton>
                    </>
                )}

                <Flex.Default direction="column">
                    <Typography
                        as="p"
                        variant="BODY3"
                        color="grey"
                        fontSize="sm"
                        textAlign="center"
                        marginTop={4}
                    >
                        로그인 하러 가시겠습니까?
                    </Typography>
                    <Typography
                        as="p"
                        variant="BODY3"
                        to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}
                        color="grey"
                        fontWeight="bold"
                        fontSize="sm"
                        textAlign="center"
                        marginTop={16}
                    >
                        로그인 하기
                    </Typography>
                </Flex.Default>
            </AuthTemplate>
            <Styled.FindPlantImage src={Image} />
            <Styled.FindPlantImage src={Image} />
        </PageContainer>
    );
};

export default observer(FindView);
