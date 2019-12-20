import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSagas from './rootSagas';
import rootReducer from './rootReducer';

const composer = composeWithDevTools;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSagas);

export default store;
