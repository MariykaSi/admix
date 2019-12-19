import React from 'react';
import './index.scss';

interface IViewAllDataProps {
    toggleAllData: Function;
    allDataIsVisiable: Boolean;
}

const ViewAllData = ({
    toggleAllData,
    allDataIsVisiable
}: IViewAllDataProps) => {
    const arrowClass = allDataIsVisiable ? 'arrowUp' : '';
    return (
        <div className="viewAllDataWrapper">
            <button onClick={() => toggleAllData(!allDataIsVisiable)}>
                View all data
                <span className={`arrow ${arrowClass}`}></span>
            </button>
        </div>
    );
};

export default ViewAllData;
