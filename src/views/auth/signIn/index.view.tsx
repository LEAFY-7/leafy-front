import React from 'react';
import { observer } from 'mobx-react';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import * as Styled from './background.styles';
import pageUrlConfig from 'configs/pageUrl.config';

import PageContainer from 'components/templates/page-container';
import AuthTemplate from 'components/templates/auth-template';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import RectangleButton from 'components/atoms/Button/rectangle-button';

import SignInDefaultForm from './signin-default-form';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const SignInView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    React.useEffect(() => {
        authViewModel.handleTimeoutId();
        return () => clearTimeout(authViewModel.handleTimeoutId());
    }, [authViewModel.isActive]);

    return (
        <PageContainer style={{ overflow: 'visible', height: '100vh' }}>
            <AuthTemplate>
                <Typography
                    as="span"
                    textAlign="center"
                    variant="H3"
                    color="grey"
                    marginTop={16}
                    marginBottom={16}
                >
                    식집사님 오늘은 어떤 식물을 보러 오셨나요?
                </Typography>
                <SignInDefaultForm />
                <RectangleButton
                    size="md"
                    to={`${pageUrlConfig.auth}${pageUrlConfig.signUp}`}
                    backgroundColor="transparent"
                >
                    회원가입 바로가기
                </RectangleButton>
                <Flex.Default direction="column">
                    <Typography
                        as="p"
                        variant="BODY3"
                        color="grey"
                        fontSize="sm"
                        textAlign="center"
                        marginTop={4}
                        width="max-content"
                    >
                        아이디를 찾으시겠습니까?
                    </Typography>
                    <Typography
                        as="p"
                        variant="BODY3"
                        to={`${pageUrlConfig.auth}${pageUrlConfig.find}`}
                        color="grey"
                        fontWeight="bold"
                        fontSize="sm"
                        textAlign="center"
                        marginTop={16}
                        width="auto"
                    >
                        아이디 찾기
                    </Typography>
                </Flex.Default>
            </AuthTemplate>
            <Styled.SignInPlantImage src={Image} />
            <Styled.SignInPlantImage src={Image} />
        </PageContainer>
    );
};

export default observer(SignInView);
