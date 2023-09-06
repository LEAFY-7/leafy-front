import { observer } from 'mobx-react';
import styled from '@emotion/styled';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import pageUrlConfig from 'configs/pageUrl.config';
import * as Styled from './background.styles';

import PageContainer from 'components/templates/page-container';
import AuthTemplate from 'components/templates/auth.template';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import FindEmailForm from 'components/organisms/Form/find-email-form';
import FindPwdForm from 'components/organisms/Form/find-pwd-form';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const FindView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    return (
        <PageContainer style={{ overflow: 'visible', height: '100vh', minHeight: 0 }}>
            <AuthTemplate isActive={authViewModel.isActive}>
                {/* 이메일 찾기 */}
                {!authViewModel.isActive && (
                    <>
                        <Typography
                            as="span"
                            textAlign="center"
                            variant="H3"
                            color="grey"
                            marginTop={16}
                            marginBottom={16}
                        >
                            이메일을 찾으시겠습니까?
                        </Typography>

                        <FindEmailForm
                            handleFindEmail={authViewModel.handleFindEmail}
                            name={authViewModel.authState.name}
                            phone={authViewModel.authState.phone}
                        />

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
                {/* 이메일 찾기 */}
                {/* 비밀번호 찾기 */}
                {authViewModel.isActive && (
                    <>
                        <Typography
                            as="span"
                            textAlign="center"
                            variant="H3"
                            color="grey"
                            marginTop={16}
                            marginBottom={16}
                        >
                            비밀번호를 찾으시겠습니까?
                        </Typography>

                        <FindPwdForm
                            handleFindPwd={authViewModel.handleFindEmail}
                            name={authViewModel.authState.name}
                            phone={authViewModel.authState.phone}
                            email={authViewModel.authState.email}
                        />
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
                {/* 비밀번호 찾기 */}

                <Flex.Default direction="column">
                    <Typography
                        as="p"
                        variant="BODY3"
                        color="grey"
                        fontSize="sm"
                        textAlign="center"
                        marginTop={4}
                        to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}
                    >
                        로그인 하러 가시겠습니까?
                    </Typography>
                </Flex.Default>
            </AuthTemplate>
            <Styled.FindPlantImage src={Image} />
            <Styled.FindPlantImage src={Image} />
        </PageContainer>
    );
};

export default observer(FindView);

const Wrapper = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    padding: 8px;
`;
const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
