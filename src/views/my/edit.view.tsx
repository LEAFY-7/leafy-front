import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { FcAddImage as ImageIcon } from 'react-icons/fc';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import UserViewModel from 'viewModel/user/user.viewModel';
import { theme } from 'configs/ui.config';

import PageContainer from 'components/templates/page-container';
import Container from 'components/organisms/Container/default-container';

import Flex from 'components/atoms/Group/flex';
import RoundButton from 'components/atoms/Button/round-button';
import Div from 'components/atoms/Div/div';
import MyEditForm from 'components/organisms/Form/my-edit-form';

const publicURL = process.env.PUBLIC_URL;

const MyEditView = () => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.MY_EDIT);

    console.log(userViewModel?.userInformation);
    return (
        <PageContainer
            style={{ overflow: 'visible', justifyContent: 'flex-start', alignItems: 'center', minHeight: 0 }}
        >
            <Container id="myInfo_edit" as="section" wrapperHeight={100}>
                <Container.Header
                    headerHeight={'50px'}
                    fontSize="xl"
                    marginBottom={8}
                    style={{ paddingLeft: '4px', height: '50px' }}
                >
                    회원 정보 수정
                </Container.Header>
                <Container.HeaderLine marginTop={16} marginBottom={32} />
                <Container.Body innerHeight={100}>
                    <Flex.RowToColumnOnTabletSm style={{ width: '100%' }}>
                        <LeftSection className="left_section">
                            {/* 이미지 저장 */}
                            <Flex.Default
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                style={{ width: '100%' }}
                            >
                                <Image src={`${publicURL}/image/default/default-user-img.svg`} />
                                <ImageBubbleButton size="xxs">
                                    <ImageIcon />
                                </ImageBubbleButton>
                                <RoundButton variant="default" isBorder>
                                    사진 저장
                                </RoundButton>
                            </Flex.Default>
                            {/* 이미지 저장 */}
                        </LeftSection>
                        <RightSection width={65} direction="column">
                            <MyEditForm />
                        </RightSection>
                    </Flex.RowToColumnOnTabletSm>
                </Container.Body>
            </Container>
        </PageContainer>
    );
};

export default observer(MyEditView);

const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.mediaQuery.smTablet} {
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    ${theme.mediaQuery.mdTablet} {
        width: 35%;
        flex-direction: column;
        justify-content: center;
    }
`;

const Image = styled.img`
    ${theme.mediaQuery.xsMobile} {
        width: 100%;
        height: 100%;
    }

    ${theme.mediaQuery.smMobile} {
        width: auto;
        height: auto;
    }
`;

const ImageBubbleButton = styled(Div.Drop)`
    position: absolute;
    transform: translate(160%, 160%);
    cursor: pointer;

    ${theme.mediaQuery.xsMobile} {
        display: none;
    }

    ${theme.mediaQuery.smMobile} {
        display: block;
    }
`;
const RightSection = styled(Div.Default)`
    justify-content: center;
    align-items: center;
    ${theme.mediaQuery.xsMobile} {
        width: 100%;
    }
    ${theme.mediaQuery.smMobile} {
        width: 100%;
    }

    ${theme.mediaQuery.mdMobile} {
        width: 100%;
    }

    ${theme.mediaQuery.lgMobile} {
        width: 100%;
    }

    ${theme.mediaQuery.smTablet} {
        width: 100%;
    }

    ${theme.mediaQuery.mdTablet} {
        width: 65%;
    }
`;
