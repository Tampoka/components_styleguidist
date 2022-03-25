import React, {useState} from 'react';

const counterStyle = {
    width: '50px',
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    padding: '10px'
};

export const Counter1 = ({initialValue}) => {
    const [value,setValue]=useState(initialValue)

    const decrement=()=>{
        const nextState=value-1
        setValue(nextState)
    }

    const increment=()=>{
        const nextState=value+1
        setValue(nextState)
    }

    return (
        <div style={counterStyle} key="Counter1">
            {value}
            <p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </p>
        </div>
    );
};

