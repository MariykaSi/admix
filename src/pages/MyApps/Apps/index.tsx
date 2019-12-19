import React from 'react';
import './index.scss';

import AppItem from './AppItem';

import { IAppItem } from '../../../types';

import appsbutton from '../../../assets/img/appsbutton.png';

interface IAppProps {
    apps: IAppItem[];
}

const Apps = ({ apps }: IAppProps) => {
    return (
        <div className="appsWrapper">
            <div className="appsHeader">
                <h3>My apps</h3>
                <button>
                    <img
                        src={`${appsbutton}`}
                        alt="My apps"
                        className="navIcon"
                    />
                </button>
            </div>
            {apps.map(item => (
                <AppItem appDetails={item} key={`${item.id}`} />
            ))}
        </div>
    );
};

export default Apps;
