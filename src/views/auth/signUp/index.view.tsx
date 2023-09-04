import * as Styled from './background.styles';
import pageUrlConfig from 'configs/pageUrl.config';

import PageContainer from 'components/templates/page-container';
import AuthTemplate from 'components/templates/auth.template';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Typography from 'components/atoms/Typograph/default-typography';

import SignUpForm from './signup-form';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const SignUpView = () => {
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
                <SignUpForm />
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

export default SignUpView;
