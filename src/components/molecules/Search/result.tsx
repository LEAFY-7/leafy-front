import styled from '@emotion/styled';
import SearchForm from './search';
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
                <ListStyle variant="BODY2">
                    {item.id}
                    <TitleStyle variant="BODY2" color="black">
                        {item.title}
                    </TitleStyle>
                    {item.viewCount}
                    {item.date}
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
    padding: 28px 14px;
    width: 1100px;
    color: ${theme.colors.grey};
`;

const TitleStyle = styled(Typography)`
    flex-grow: 1;
    flex-basis: 400px;
`;
