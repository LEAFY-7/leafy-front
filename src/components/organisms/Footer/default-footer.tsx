import styled from '@emotion/styled';
import { BsInstagram as InstarIcon } from 'react-icons/bs';
import { AiFillFacebook as FaceBookIcon, AiFillGithub as GithubIcon } from 'react-icons/ai';
import { theme } from 'configs/ui.config';
import pageUrlConfig from 'configs/pageUrl.config';

import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import Hr from 'components/atoms/Hr/default-hr';

const logoPath = process.env.PUBLIC_URL + '/image/logo/default-logo.svg';
const textPath = process.env.PUBLIC_URL + '/image/logo/text-logo.svg';
const DefaultFooter = () => {
    return (
        <Wrapper>
            <Flex.RowToColumnOnMobileLg as="nav" justifyContent="space-between" alignItems="center">
                <Flex.RowToColumnOnMobileSm alignItems="center">
                    <LinkWrapper>
                        <img src={logoPath} style={{ width: '50px', height: '50px' }} />
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
                <ShowIconLinkAtBasic>
                    <IconButton href="https://www.google.com">
                        <InstarIcon />
                    </IconButton>
                    <IconButton href="https://github.com/LEAFY-7/leafy-front" target="_blank">
                        <FaceBookIcon />
                    </IconButton>
                    <IconButton href="https://github.com/LEAFY-7/leafy-front" target="_blank">
                        <GithubIcon />
                    </IconButton>
                </ShowIconLinkAtBasic>
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
            <ShowIconLinkAtMobile>
                <IconButton href="https://www.google.com">
                    <InstarIcon />
                </IconButton>
                <IconButton href="https://github.com/LEAFY-7/leafy-front" target="_blank">
                    <FaceBookIcon />
                </IconButton>
                <IconButton href="https://github.com/LEAFY-7/leafy-front" target="_blank">
                    <GithubIcon />
                </IconButton>
            </ShowIconLinkAtMobile>
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

const IconButton = styled.a`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ShowIconLinkAtBasic = styled(Flex.Default)`
    ${theme.mediaQuery.xsMobile} {
        display: none;
    }
    ${theme.mediaQuery.smMobile} {
        display: none;
    }

    ${theme.mediaQuery.mdMobile} {
        display: none;
    }

    ${theme.mediaQuery.lgMobile} {
        display: none;
    }

    ${theme.mediaQuery.smTablet} {
        display: flex;
    }
`;

const ShowIconLinkAtMobile = styled(Flex.Default)`
    ${theme.mediaQuery.mdMobile} {
        display: flex;
    }

    ${theme.mediaQuery.lgMobile} {
        display: flex;
    }
    ${theme.mediaQuery.smTablet} {
        display: none;
    }
`;
