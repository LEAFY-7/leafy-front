import { Global, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { observer } from 'mobx-react';
import { ToastContainer } from 'react-toastify';
import 'reflect-metadata';
import DefaultViewModel from 'viewModel/default.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';

import styleConfig from 'configs/style.config';
import themeConfigs from 'configs/theme.config';
import routers from 'configs/route.config';

import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const isLocal = process.env.REACT_APP_MODE === 'local';
const isDevelopment = process.env.REACT_APP_MODE === 'development';
const isProduction = process.env.REACT_APP_MODE === 'production';

function App() {
    const defaultViewModel: DefaultViewModel = useViewModel(ViewModelName.DEFAULT);
    console.log('로컬 환경 : ', isLocal);
    console.log('개발 모드 : ', isDevelopment);
    console.log('배포 모드 : ', isProduction);

    console.log(themeConfigs.custom({ mode: defaultViewModel.themeModel }));

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
            <ThemeProvider theme={themeConfigs.custom({ mode: defaultViewModel.themeModel })}>
                <RouterProvider router={routers} />
                <Global styles={styleConfig.globalStyle} />
            </ThemeProvider>
        </>
    );
}

export default observer(App);
