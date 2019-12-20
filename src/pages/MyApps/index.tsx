import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';

import SideBar from '../../components/base/SideBar';
import SelectControl from '../../components/base/SelectControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import Data from './Data';
import Apps from './Apps';

import {
    getMyAppsDataAction,
    myAppsDataSelector,
    loadingSelector
} from './redux';
import { ALL_DATA_OPTIONS } from '../../constants/global';

const MyApps: React.FC = () => {
    const dispatch = useDispatch();
    const { data, apps } = useSelector(myAppsDataSelector);
    const loading = useSelector(loadingSelector);
    useEffect(() => {
        dispatch(getMyAppsDataAction.request());
    }, [dispatch]);

    return (
        <div className="myApps">
            <SideBar />
            {loading ? (
                <div className="loadingWrapper">
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <div className="wrapper">
                        <div className="overView">
                            <h2>Overview</h2>
                            <SelectControl options={ALL_DATA_OPTIONS} />
                        </div>
                        <Data data={data} />
                        <Apps apps={apps} />
                    </div>
                </>
            )}
        </div>
    );
};

export default MyApps;
