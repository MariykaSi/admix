import { all, fork } from 'redux-saga/effects';

import { myAppsSagas } from '../pages/MyApps/redux';

const allSagas = [...myAppsSagas];
export default function* appSagas() {
    yield all(allSagas.map(fork));
}
