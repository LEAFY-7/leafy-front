import styled from '@emotion/styled';

const Header = () => {
    const publicURL = process.env.PUBLIC_URL;

    return (
        <HeaderContainer>
            <HeaderWrap>
                <img src={`${publicURL}/image/logo/header-logo.svg`} />
                <div>alarm</div>
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
    align-itmes: center;
    & div {
        display: flex;
        align-items: center;
    }

    & img {
        width: 196px;
        height: 56px;
    }
`;
