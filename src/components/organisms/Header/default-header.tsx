import styled from '@emotion/styled';

const Header = () => {
    const publicURL = process.env.PUBLIC_URL;

    return (
        <HeaderContainer>
            <HeaderWrap>
                <div>
                    <img src={`${publicURL}/image/logo/main-logo.png`} />
                    <h1>Leafyer</h1>
                </div>
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
