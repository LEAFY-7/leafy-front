import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom/client';
import App from './App';
import initializeStore from './mobx/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const mobxStore = initializeStore({});

root.render(
    // <React.StrictMode>
    <Provider {...mobxStore}>
        <App />
    </Provider>,
    // </React.StrictMode>
);

reportWebVitals();
