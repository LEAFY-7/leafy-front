import DropButton from 'components/atoms/Button/drop-button';
import Div from 'components/atoms/Div/default-div';
import PageContainer from 'components/templates/page-container';
import pageUrlConfig from 'configs/pageUrl.config';

/**
 * 마이페이지
 */
const MyView = () => {
    return (
        <PageContainer>
            <Div>
                <DropButton>ㅎㅇㅎㅇㅎㅇ</DropButton>
                <DropButton to={pageUrlConfig.myEdit}>마이페이지 수정</DropButton>
            </Div>
        </PageContainer>
    );
};

export default MyView;
