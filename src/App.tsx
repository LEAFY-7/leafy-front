import React from 'react';
import { observer } from 'mobx-react';
import { RouterProvider } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'reflect-metadata';
import DefaultViewModel from 'viewModel/default.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';

import routers from 'configs/route.config';
import globalStyle from 'configs/style.config';
import themeConfigs from 'configs/theme.config';

import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';

function App() {
    const defaultViewModel: DefaultViewModel = useViewModel(ViewModelName.DEFAULT);

    React.useEffect(() => {
        defaultViewModel.handleThemeMode();
    }, []);
    return (
        <>
            <div id="app-toast-container">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss
                    pauseOnHover
                />
            </div>
            <ThemeProvider theme={themeConfigs.custom({ mode: defaultViewModel.themeModel })}>
                <RouterProvider router={routers} />
                <Global styles={globalStyle} />
            </ThemeProvider>
        </>
    );
}

export default observer(App);
