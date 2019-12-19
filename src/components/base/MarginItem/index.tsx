import React from 'react';
import './index.scss';

interface IMarginProps {
    margin: String;
    valueIncreased: Boolean;
}

const MarginItem = ({ margin, valueIncreased }: IMarginProps) => {
    return (
        <span className={`margin ${!valueIncreased && 'marginDecrease'}`}>
            {margin}
        </span>
    );
};

export default MarginItem;
