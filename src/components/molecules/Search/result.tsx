import styled from '@emotion/styled';
import Linker from 'components/atoms/Linker/linker';
import pageUrlConfig from 'configs/pageUrl.config';
import { NoticeDto } from 'dto/notice/notice.dto';
import { theme } from 'configs/ui.config';
import Typography from 'components/atoms/Typograph/default-typography';

interface ResultProps {
    item: NoticeDto;
}

const SearchResults = ({ item }: ResultProps) => {
    return (
        <>
            <Linker href={`${pageUrlConfig.noticeDetail}/${item.id}`}>
                <ListStyle variant="BODY2" textAlign="center">
                    <span>{item.id}</span>
                    <TitleStyle variant="BODY2" color="black" textAlign="center">
                        {item.title}
                    </TitleStyle>
                    <Count>{item.viewCount}</Count>
                    <Date>{item.date}</Date>
                </ListStyle>
            </Linker>
        </>
    );
};

export default SearchResults;

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
