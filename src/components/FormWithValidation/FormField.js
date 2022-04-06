import React, {useState} from 'react';

export const FormField = ({placeholder, value, name, onChange, validate}) => {
    const [inputValue, setInputValue] = useState(value)
    const [error, setError] = useState(false)

    const onInputChange = evt => {
        const value = evt.target.value
        const newError = validate ? validate(value) : false

        setInputValue(value)
        setError(newError)

        onChange({name, value:inputValue, error: newError})
    }
    console.log(inputValue)
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

