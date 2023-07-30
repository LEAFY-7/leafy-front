import { css } from '@emotion/react';
import PageContainer from 'components/templates/page-container';
import Typography from 'components/atoms/Typograph/default-typography';
import Search from 'components/molecules/Search/search';
import Button from 'components/atoms/Button/button';
import Flex from 'components/atoms/Group/flex';

/**
 * 공지사항 리스트
 */
const NoticeView = () => {
    return (
        <PageContainer>
            <Typography variant="H2" textAlign="center" color="primary" marginBottom={16}>
                공지사항
            </Typography>
            <Search placeholder="공지 검색" />
        </PageContainer>
    );
};

export default NoticeView;
