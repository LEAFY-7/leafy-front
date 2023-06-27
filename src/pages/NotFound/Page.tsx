import React from 'react';
import MonoTemplate from '@components/templates/mono-template';
import Div from '@components/atoms/Div/default-div';

import Typography from '@components/atoms/Typograph/default-typography';

const NotFound = () => {
    return (
        <MonoTemplate
            templateWidth={'1000px'}
            mainSection={
                <Div id="notfound" height={100}>
                    <Typography variant="H1">페이지를 찾을 수 없습니다.</Typography>
                </Div>
            }
        />
    );
};

export default NotFound;
