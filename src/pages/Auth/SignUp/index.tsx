import React from 'react';
import { observer } from 'mobx-react';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';

import Div from 'components/atoms/Div/default-div';
import MonoTemplate from 'components/templates/mono-template';

import SignUpNecessaryForm from './signup-necessary-form';
import SignUpAdditionalForm from './signup-additional-form';

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
                {!authViewModel.toggle && <SignUpNecessaryForm />}
                {authViewModel.toggle && <SignUpAdditionalForm />}
            </Div>
        </MonoTemplate>
    );
};

export default observer(SignUpView);
