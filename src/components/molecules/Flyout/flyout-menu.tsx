import styled from '@emotion/styled';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import { UserDto } from 'dto/user/user.dto';
import useToggle from 'hooks/useToggleProvider';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import TextAvatar from 'components/atoms/Avatar/text-avatar';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import FlyOut from './default-flyout';

interface FlyoutMenuProps {
    toggleEl: ReactNode;
    data?: UserDto;
    userShowState: boolean;
}

type Props = React.PropsWithChildren<FlyoutMenuProps> & HTMLAttributes<HTMLElement>;

const FlyoutMenu = ({ toggleEl, data, userShowState = true }: Props) => {
    const { values } = useToggle({});
    return (
        <FlyOut isOpen={values.isOpen} toggle={values.toggle}>
            <Toggle>{toggleEl}</Toggle>
            <FlyOut.Wrapper>
                <FlyOut.OverLay />
                <List size="xl" variant="default">
                    <Header>
                        <TextAvatar text={data?.user.name || '기본 이름'} />
                        <Flex.Default direction="column">
                            <Typography variant="BODY2" marginLeft={8}>
                                {data?.user.name || '기본 이름'}
                            </Typography>
                            <Typography variant="BODY2" marginLeft={8}>
                                {userShowState ? '공개' : '비공개'}
                            </Typography>
                        </Flex.Default>
                    </Header>
                    <Item to={pageUrlConfig.feed}>게시글 보러가기</Item>
                    <Item to={pageUrlConfig.chat}>채팅하기 </Item>
                    <Item>댓글달기</Item>
                    <Item>신고하기</Item>
                </List>
            </FlyOut.Wrapper>
        </FlyOut>
    );
};
export default FlyoutMenu;

const Toggle = styled(FlyOut.Toggle)`
    position: relative;
    cursor: pointer;
`;
const Header = styled(FlyOut.Header)`
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const List = styled(FlyOut.List)`
    overflow-y: scroll;
    border-radius: 4px;
    box-shadow: 5px 5px 10px rgba(14, 17, 27, 0.15);
`;
const Item = styled(FlyOut.Item)`
    cursor: pointer;
    list-style: none;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${theme.palette.default.borderColor};
    background-color: transparent;
    font-size: ${theme.fontSize.lg};
    transition:
        background-color 0.35s ease-in-out,
        color 0.25s ease-in-out;
    &:hover {
        border-color: ${theme.palette.secondary.borderColor};
        background-color: ${theme.palette.secondary.backgroundColor};
        color: ${theme.palette.text.white};
    }
`;
