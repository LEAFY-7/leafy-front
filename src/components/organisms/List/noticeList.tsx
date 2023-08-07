import styled from '@emotion/styled';
import Linker from 'components/atoms/Linker/linker';
import pageUrlConfig from 'configs/pageUrl.config';
import { NoticeDto } from 'dto/notice/notice.dto';
import { theme } from 'configs/ui.config';
import Typography from 'components/atoms/Typograph/default-typography';
import { CSSProperties } from 'react';

interface ResultProps {
    item: NoticeDto;
    titleColor?: keyof typeof theme.colors;
}

const NoticeList = ({ item, titleColor }: ResultProps) => {
    return (
        <>
            <Linker href={`${pageUrlConfig.notice}/${item.id}`}>
                <ListStyle variant="BODY2" textAlign="center">
                    <span>{item.id}</span>
                    <TitleStyle variant="BODY2" color={titleColor} textAlign="center">
                        {item.title}
                    </TitleStyle>
                    <Count>{item.viewCount}</Count>
                    <Date>{item.date}</Date>
                </ListStyle>
            </Linker>
        </>
    );
};

export default NoticeList;

const ListStyle = styled(Typography)`
    border-radius: 12px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 1em;
    color: ${theme.colors.grey};
    flex-shrink: 0;
`;

const TitleStyle = styled(Typography)`
    flex-grow: 1;
    flex-basis: 400px;
`;
const Count = styled.span`
    min-width: 50px;
`;
const Date = styled.span`
    min-width: 130px;
`;
