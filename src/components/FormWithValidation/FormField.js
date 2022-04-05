import React, {useState} from 'react';

export const FormField = ({placeholder, value, name, onChange = f => f, validate = f => f}) => {
    const [inputValue, setInputValue] = useState(value)
    const [error, setError] = useState(false)

    const onInputChange = evt => {
        const value = evt.target.value
        const newError = validate ? validate(value) : false

        setInputValue(value)
        setError(newError)

        onChange({name, inputValue, error: newError})
    }
    return (
        <div>
            <input
                placeholder={placeholder}
                value={inputValue}
                onChange={onInputChange}
            />
            <span style={{color: 'red'}}>{error}</span>
        </div>
    );
};

