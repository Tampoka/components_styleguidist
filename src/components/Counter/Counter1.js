import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Counter} from './Counter';

const counterStyle = {
    width: '50px',
    textAlign: 'center',
    backgroundColor: '#8bd9ff',
    padding: '10px'
};

export const Counter1 = ({initialValue = 120}) => {
    const [value, setValue] = useState(initialValue)

    const decrement = () => {
       /* const nextState = value - 1
        setValue(nextState)*/
        setValue(prevState => prevState-1)
    }

    const increment = () => {
        setValue(prevState => prevState+1)
    }

    return (
        <div style={counterStyle} key="Counter1">
            {value}
            <p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </p>
        </div>
    )
}

Counter.propTypes = {
    initialValue: PropTypes.number
}

