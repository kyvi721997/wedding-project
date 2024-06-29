import React from 'react';

type IDateTimeDisplay = {
    value: number,
    type: string
}

const DateTimeDisplay: React.FC<IDateTimeDisplay> = ({value, type}: IDateTimeDisplay) => {
    return (
        <div>
            <p className={`datetime`}>{value}</p>
            <span className={`type`}>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;
