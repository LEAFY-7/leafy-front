import Typography from 'components/atoms/Typograph/default-typography';
import PageContainer from 'components/templates/page-container';
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <Typography variant="H1">페이지를 찾을 수 없습니다.</Typography>
        </PageContainer>
    );
};

export default NotFound;
