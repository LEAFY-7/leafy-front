import styled from '@emotion/styled';

const Header = () => {
    const publicURL = process.env.PUBLIC_URL;

    return (
        <HeaderContainer>
            <HeaderWrap>
                <img src={`${publicURL}/image/logo/main-logo.png`} />
            </HeaderWrap>
        </HeaderContainer>
    );
};
export default Header;

const HeaderContainer = styled.header`
    position: fixed;
    left: 0px;
    width: 100vw;
    height: 80px;
    background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);
`;

const HeaderWrap = styled.div``;
