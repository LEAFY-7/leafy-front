import { Provider } from 'mobx-react';
import { Provider as ReduxProvider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import initializeStore from './mobx/store';
import reportWebVitals from './reportWebVitals';
import store from '@redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const mobxStore = initializeStore({});

root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <Provider {...mobxStore}>
                <App />
            </Provider>
        </ReduxProvider>
    </React.StrictMode>,
);

reportWebVitals();
