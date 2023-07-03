import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import store from './store/index';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>);
