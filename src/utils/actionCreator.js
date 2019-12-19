import { createAction } from 'redux-actions';

export const createAsyncAction = type => ({
    failure: createAction(type + '::FAILURE'),
    request: createAction(type + '::REQUEST'),
    success: createAction(type + '::SUCCESS'),
    start: createAction(type + '::START')
});

export default prefix => type => createAsyncAction(`${prefix}:${type}`);
