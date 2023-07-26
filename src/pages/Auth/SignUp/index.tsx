import React from 'react';
import { observer } from 'mobx-react';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import * as Styled from './background.styles';

import Div from 'components/atoms/Div/default-div';
import MonoTemplate from 'components/templates/mono-template';

import SignUpNecessaryForm from './signup-necessary-form';
import SignUpAdditionalForm from './signup-additional-form';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Typography from 'components/atoms/Typograph/default-typography';

const Image = process.env.PUBLIC_URL + '/images/plant_01.png';

const SignUpView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            const formEl = document.getElementById('signup_wrapper');
            if (!formEl) return;
            formEl.style.opacity = '1';
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [authViewModel.toggle]);

    return (
        <MonoTemplate margin="0 auto" position="relative">
            <Div variant="translucent" direction="column" width="700px" padding={24}>
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
                <RectangleButton size="md" to="/auth/signin">
                    로그인 바로가기
                </RectangleButton>
            </Div>
            <Styled.SignUpPlantImage src={Image} />
            <Styled.SignUpPlantImage src={Image} />
        </MonoTemplate>
    );
};

export default observer(SignUpView);