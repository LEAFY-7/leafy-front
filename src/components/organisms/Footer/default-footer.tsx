import styled from '@emotion/styled';
import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { theme } from 'configs/ui.config';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Flex from 'components/atoms/Group/flex';
import Hr from 'components/atoms/Hr/default-hr';
import Typography from 'components/atoms/Typograph/default-typography';
import pageUrlConfig from 'configs/pageUrl.config';

const publicURL = process.env.PUBLIC_URL + '/image/logo/default-logo.svg';

const DefaultFooter = () => {
    return (
        <Wrapper>
            <Flex.RowToColumnOnMobileLg as="nav" justifyContent="space-between" alignItems="center">
                <Flex.RowToColumnOnMobileSm alignItems="center">
                    <LinkWrapper>
                        <img src={publicURL} style={{ width: '50px', height: '50px' }} />
                    </LinkWrapper>
                    <LinkButton to={'/'} fontSize="sm">
                        소개
                    </LinkButton>
                    <LinkButton to={pageUrlConfig.notice} fontSize="sm">
                        고객 센터
                    </LinkButton>
                    <LinkButton to={'/'} fontSize="sm">
                        이용 약관
                    </LinkButton>
                    <LinkButton to={'/'} fontSize="sm" fontWeight="bold">
                        개인정보 처리방침
                    </LinkButton>
                </Flex.RowToColumnOnMobileSm>
                <Flex.Default>
                    <IconButton to={'/'}>
                        <BsInstagram />
                    </IconButton>
                    <IconButton to={'/'}>
                        <AiFillFacebook />
                    </IconButton>
                    <IconButton to={'/'}>
                        <AiFillGithub />
                    </IconButton>
                </Flex.Default>
            </Flex.RowToColumnOnMobileLg>
            <Hr />
            <Flex.Default direction="column" style={{ padding: '16px' }}>
                <Flex.RowToColumnOnMobileSm>
                    <Typography
                        as="p"
                        variant="BODY3"
                        fontSize="sm"
                        color="black"
                        fontWeight="bold"
                        marginBottom={8}
                        marginRight={8}
                    >
                        LEAFYER
                    </Typography>
                    <Typography as="p" variant="BODY3" fontSize="sm" color="black" marginBottom={8}>
                        | 경기도 부천시 상동 546-10 월드프라자 6층 603호
                    </Typography>
                </Flex.RowToColumnOnMobileSm>
                <Typography as="p" variant="BODY3" fontSize="sm" color="black" marginBottom={8}>
                    제2023-xxxxxx-xx-x-xxxxx호 | 사업자등록번호 : 123-45-6789 | 010-1234-5678
                </Typography>
                <Typography as="p" variant="BODY2" fontSize="sm" color="black">
                    &copy; {new Date().getFullYear()} Leafyer . All rights reserved.
                </Typography>
            </Flex.Default>
        </Wrapper>
    );
};

export default DefaultFooter;

const Wrapper = styled.footer`
    width: 100%;
    height: 100px;
    background-color: ${theme.palette.bgColor};
    display: flex;
    padding: 8px calc((100% - 1080px) / 2);
    flex-direction: column;
    z-index: 1;
    &::before {
        content: '';
        width: 100vw;
        height: 1px;
        background-color: ${theme.colors.lgrey_50};
        left: 0;
        transform: translateY(20%);
        position: absolute;
    }
`;

const LinkButton = styled(RectangleButton)`
    width: max-content;
    padding: 0;
    margin: 0;
    margin-right: 16px;
`;

const IconButton = styled(RectangleButton)`
    padding: 0;
`;

/* ${theme.mediaQuery.smallMobile} {
        margin-right: 0px;
        font-size: ${theme.fontSize.xs};
    }

    ${theme.mediaQuery.mobile} {
        margin-right: 8px;
        font-size: ${theme.fontSize.sm};
    }
    ${theme.mediaQuery.tablet} {
        margin-right: 12px;
        font-size: ${theme.fontSize.sm};
    }
    ${theme.mediaQuery.desktop} {
        margin-right: 16px;
        font-size: ${theme.fontSize.md};
    }*/
