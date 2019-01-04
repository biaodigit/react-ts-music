import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'
import App from './App';
import './common/scss/index.scss'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), (window as any).devToolsExtension ? (window as any).devToolsExtension() : '')
);

ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
