import React, { useState } from 'react';
import './index.scss';

import MarginItem from '../../../../components/base/MarginItem';

import { IAppItem } from '../../../../types';
import { APP_STATUSES } from '../../../../constants/global';
import { getStatusTextColor } from '../../helper';

import settings from '../../../../assets/img/settings.png';
import info from '../../../../assets/img/info.png';
import chart from '../../../../assets/img/chart.png';
import more from '../../../../assets/img/more.png';

interface IAppProps {
    appDetails: IAppItem;
    key: String;
}

const AppItem = ({
    appDetails: { title, price, currency, margin, valueIncreased, icon, status }
}: IAppProps) => {
    const [editPopupIsVisiable, toggleEditPopup] = useState(false);
    return (
        <div
            className={`appItem ${status}`}
            onMouseLeave={() => toggleEditPopup(false)}
        >
            <div className="appMainInfo">
                <img src={`${icon}`} alt={`${title}`} className="appIcon" />
                <div>{title}</div>
            </div>
            <div className="appNumbersInfo">
                {currency && <span className="appCurrency">{currency}</span>}
                <div className="appPrice">{price}</div>
                <MarginItem margin={margin} valueIncreased={valueIncreased} />
            </div>
            <div className="appAdditionalInfo">
                <div className="appButtons">
                    {editPopupIsVisiable && (
                        <div className="appItemEdit">
                            <span>Edit</span>
                        </div>
                    )}
                    <button
                        onClick={() => toggleEditPopup(!editPopupIsVisiable)}
                    >
                        <img src={`${settings}`} alt="Edit" />
                    </button>
                    <button>
                        <img src={`${info}`} alt="Info" />
                    </button>
                    <button>
                        <img src={`${chart}`} alt="Chart" />
                    </button>
                </div>
                <div className="appStatuses">
                    {APP_STATUSES.map((item, i) => (
                        <button
                            className={`appStatus ${item === status &&
                                'selected'} ${getStatusTextColor(status)}`}
                            key={i}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button className="more">
                    <img src={`${more}`} alt="Show more" />
                </button>
            </div>
        </div>
    );
};

export default AppItem;
