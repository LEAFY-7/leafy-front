import styled from '@emotion/styled';
import useToggle from 'hooks/useToggleProvider';
import Flex from 'components/atoms/Group/flex';
import FlyoutMenu from 'components/molecules/Flyout/flyout-menu';
import Flyout from 'components/molecules/Flyout/headless-flyout';
import Div from 'components/atoms/Div/default-div';

const Header = () => {
    const publicURL = process.env.PUBLIC_URL;
    const { values } = useToggle({});

    return (
        <HeaderContainer>
            <HeaderWrap>
                <div>
                    <img src={`${publicURL}/image/logo/main-logo.png`} />
                    <h1>Leafyer</h1>
                </div>
                <Flex direction="column" justifyContent="center" alignItems="center">
                    <Flyout isOpen={values.isOpen} toggle={values.toggle}>
                        <Toggle>
                            <div>alarm</div>
                        </Toggle>
                        <Flyout.OverLay />
                        <Flyout.Wrapper>
                            <Flyout.List>
                                <Flyout.Header>헤더</Flyout.Header>
                                <Flyout.Item>1</Flyout.Item>
                                <Flyout.Item>2</Flyout.Item>
                                <Flyout.Item>3</Flyout.Item>
                                <Flyout.Item>4</Flyout.Item>
                            </Flyout.List>
                        </Flyout.Wrapper>
                    </Flyout>
                </Flex>
            </HeaderWrap>
        </HeaderContainer>
    );
};
export default Header;

const HeaderContainer = styled.header`
    position: fixed;
    left: 0px;
    width: 100vw;
    height: 56px;
    background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);
    display: flex;
    justify-content: center;
`;

const HeaderWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div {
        display: flex;
        align-items: center;
    }

    & img {
        width: 48px;
        height: 56px;
    }

    & h1 {
        color: #00927a;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 56px;
    }
`;

const Toggle = styled(Flyout.Toggle)`
    position: relative;
`;
