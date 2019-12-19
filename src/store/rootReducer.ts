import { combineReducers } from 'redux';

import { myAppsReducer } from '../pages/MyApps/redux';

const rootReducer = combineReducers({
    myApps: myAppsReducer
});

export default rootReducer;
