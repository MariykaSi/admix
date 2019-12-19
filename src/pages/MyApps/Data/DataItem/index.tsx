import React from 'react';
import './index.scss';

import MarginItem from '../../../../components/base/MarginItem';

import { IDataItem } from '../../../../types';

interface IDataProps {
    data: IDataItem;
    key: String;
}

const DataItem = ({
    data: {
        name,
        value,
        currency,
        extraCharacter,
        margin,
        valueIncreased,
        icon
    }
}: IDataProps) => {
    return (
        <div className="dataItemWrapper">
            <div className="dataItem">
                <div className="dataLabel">
                    <div className="dataImg">
                        <img
                            src={`${icon}`}
                            alt={`${name}`}
                            className="navIcon"
                        />
                    </div>
                    <div>{name}</div>
                </div>
                <div className="dataInfo">
                    {currency && (
                        <span className="dataCurrency">{currency}</span>
                    )}
                    <div className="number">{value}</div>
                    {extraCharacter && (
                        <div className="extraCharacter">{extraCharacter}</div>
                    )}
                    <MarginItem
                        margin={margin}
                        valueIncreased={valueIncreased}
                    />
                </div>
            </div>
        </div>
    );
};

export default DataItem;
