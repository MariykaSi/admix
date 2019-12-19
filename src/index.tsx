import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import * as serviceWorker from './serviceWorker';

import './styles/global.scss';

import store from './store/index';
import MyApps from './pages/MyApps';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={MyApps} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
