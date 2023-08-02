import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import pageUrlConfig from 'configs/pageUrl.config';
import * as Styled from './background.styles';

import PageContainer from 'components/templates/page-container';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import Div from 'components/atoms/Div/div';
import FindEmailForm from './find-email-form';
import FindPwdForm from './find-pwd-form';
import RectangleButton from 'components/atoms/Button/rectangle-button';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const FindView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    React.useEffect(() => {
        authViewModel.handleTimeoutId();
        return () => clearTimeout(authViewModel.handleTimeoutId());
    }, [authViewModel.toggle]);
    return (
        <PageContainer style={{ overflow: 'visible', height: '100vh' }}>
            <Wrapper>
                <Div.Default variant="translucent" direction="column" width="700px" padding={24}>
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

                    <Flex.Default style={{ width: '300px' }}>
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
                            marginTop={4}
                        >
                            로그인 하기
                        </Typography>
                    </Flex.Default>
                </Div.Default>
            </Wrapper>
            <Styled.FindPlantImage src={Image} />
            <Styled.FindPlantImage src={Image} />
        </PageContainer>
    );
};

export default observer(FindView);
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
