import React from 'react';
import { useNavigate } from 'react-router-dom';
import Div from 'components/atoms/Div/default-div';
import Typography from 'components/atoms/Typograph/default-typography';
import PageContainer from 'components/templates/page-container';

const NotFound = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [history]);

    return (
        <PageContainer>
            <Div id="notfound" height={100}>
                <Typography variant="H1">페이지를 찾을 수 없습니다.</Typography>
            </Div>
        </PageContainer>
    );
};

export default NotFound;
