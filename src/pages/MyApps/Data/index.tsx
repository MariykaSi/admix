import React, { useState } from 'react';
import './index.scss';

import DataItem from './DataItem';
import ViewAllData from './ViewAllData';

import { IDataItem } from '../../../types';

interface IDataProps {
    data: IDataItem[];
}

const Data = ({ data }: IDataProps) => {
    const [allDataIsVisiable, toggleAllData] = useState(false);

    return (
        <div className="dataWrapper">
            <div className="dataItems">
                {data.map((item, i) => {
                    return (
                        (i <= 3 || allDataIsVisiable) && (
                            <DataItem data={item} key={`${item.id}`} />
                        )
                    );
                })}
            </div>
            <ViewAllData
                toggleAllData={toggleAllData}
                allDataIsVisiable={allDataIsVisiable}
            />
        </div>
    );
};

export default Data;
