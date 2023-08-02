import React from 'react';
import { observer } from 'mobx-react';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import styled from '@emotion/styled';
import * as Styled from './background.styles';

import Div from 'components/atoms/Div/div';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Typography from 'components/atoms/Typograph/default-typography';
import SignUpNecessaryForm from './signup-necessary-form';
import SignUpAdditionalForm from './signup-additional-form';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const SignUpView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    React.useEffect(() => {
        authViewModel.handleTimeoutId();
        return () => clearTimeout(authViewModel.handleTimeoutId());
    }, [authViewModel.toggle]);

    return (
        <PageContainer style={{ overflow: 'visible', height: '100vh' }}>
            <Wrapper>
                <Div.Default variant="translucent" direction="column" width="700px" padding={24}>
                    <Typography
                        as="span"
                        textAlign="center"
                        variant="H3"
                        color="grey"
                        marginTop={16}
                        marginBottom={16}
                    >
                        식집사님을 초대합니다.
                    </Typography>
                    {!authViewModel.toggle && <SignUpNecessaryForm />}
                    {authViewModel.toggle && <SignUpAdditionalForm />}
                    <RectangleButton
                        size="md"
                        to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}
                        backgroundColor="transparent"
                    >
                        로그인 바로가기
                    </RectangleButton>
                </Div.Default>
                <Styled.SignUpPlantImage src={Image} />
                <Styled.SignUpPlantImage src={Image} />
            </Wrapper>
        </PageContainer>
    );
};

export default observer(SignUpView);

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
