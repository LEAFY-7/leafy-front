import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'reflect-metadata';

import styleConfig from '@configs/style.config';
import Router from '@routes/router';

import themeConfigs from '@configs/theme.config';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { isDevelopment, isProduction } from '@utils/env';

function App() {
    console.log('개발 모드 :', isDevelopment, '배포 모드 : ', isProduction);
    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
            />
            <ThemeProvider theme={themeConfigs.custom({ mode: 'light' })}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
                <Global styles={styleConfig.globalStyle} />
            </ThemeProvider>
        </>
    );
}

export default App;
