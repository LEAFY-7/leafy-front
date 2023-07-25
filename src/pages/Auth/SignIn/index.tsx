import React from 'react';
import { observer } from 'mobx-react';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import * as Styled from './background.styles';

import Div from 'components/atoms/Div/default-div';
import Typography from 'components/atoms/Typograph/default-typography';
import MonoTemplate from 'components/templates/mono-template';
import SignInDefaultForm from './signin-default-form';
import RectangleButton from 'components/atoms/Button/rectangle-button';

const Image = process.env.PUBLIC_URL + '/images/plant_01.png';

const SignInView = () => {
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
                    식집사님 오늘은 어떤 식물을 보러 오셨나요?
                </Typography>
                <SignInDefaultForm />
                <RectangleButton size="md" to="/auth/signup">
                    회원가입 바로가기
                </RectangleButton>
            </Div>
            <Styled.SignInPlantImage src={Image} />
            <Styled.SignInPlantImage src={Image} />
        </MonoTemplate>
    );
};

export default observer(SignInView);
