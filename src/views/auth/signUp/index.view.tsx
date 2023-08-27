import React from 'react';
import { observer } from 'mobx-react';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import * as Styled from './background.styles';
import pageUrlConfig from 'configs/pageUrl.config';

import PageContainer from 'components/templates/page-container';
import AuthTemplate from 'components/templates/auth.template';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Typography from 'components/atoms/Typograph/default-typography';

import SignUpNecessaryForm from './signup-first-form';
import SignUpAdditionalForm from './signup-second-form';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const SignUpView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    React.useEffect(() => {
        authViewModel.handleTimeoutId();
        return () => clearTimeout(authViewModel.handleTimeoutId());
    }, [authViewModel.isActive]);

    return (
        <PageContainer style={{ overflow: 'visible' }}>
            <AuthTemplate>
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
                {!authViewModel.isActive && <SignUpNecessaryForm />}
                {authViewModel.isActive && <SignUpAdditionalForm />}
                <RectangleButton
                    size="md"
                    to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}
                    backgroundColor="transparent"
                    style={{ color: 'black' }}
                >
                    로그인 바로가기
                </RectangleButton>
            </AuthTemplate>
            <Styled.SignUpPlantImage src={Image} />
            <Styled.SignUpPlantImage src={Image} />
        </PageContainer>
    );
};

export default observer(SignUpView);
