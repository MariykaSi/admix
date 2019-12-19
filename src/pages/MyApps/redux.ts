import { takeEvery, put, delay } from 'redux-saga/effects';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import { MODULE_NAME } from './constants';
import actionCreator from '../../utils/actionCreator';
import { IApplicationState, IMyAppsState } from '../../types';
import { getMockData } from './helper';

const initialState = {
    data: [],
    apps: [],
    loading: false,
    error: null
};

const action = actionCreator(MODULE_NAME);
export const getMyAppsDataAction = action('GET_MY_APPS_DATA');

export const myAppsReducer = handleActions<any>(
    {
        [getMyAppsDataAction.request.toString()]: (state: IMyAppsState) => ({
            ...state,
            loading: true
        }),
        [getMyAppsDataAction.success.toString()]: (
            state: IMyAppsState,
            action
        ) => {
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        },
        [getMyAppsDataAction.failure.toString()]: (
            state: IMyAppsState,
            action
        ) => ({
            ...state,
            loading: false,
            ...action.payload
        })
    },
    initialState
);

export const myAppsSelector = (state: IApplicationState) => state.myApps;
export const myAppsDataSelector = createSelector(
    myAppsSelector,
    ({ data, apps }) => {
        return {
            data,
            apps
        };
    }
);
export const loadingSelector = createSelector(
    myAppsSelector,
    ({ loading }) => loading
);

function* _getMyAppsDataSaga() {
    try {
        yield put(getMyAppsDataAction.start());
        // TODO: replace when will be beckend
        // const result = yield call('');
        yield delay(1000);
        const result = getMockData();
        yield put(getMyAppsDataAction.success(result));
    } catch (err) {
        yield put(getMyAppsDataAction.failure(err));
    }
}

const getMyAppsDataSagas = function*() {
    yield takeEvery(getMyAppsDataAction.request, _getMyAppsDataSaga);
};

export const myAppsSagas = [getMyAppsDataSagas];
