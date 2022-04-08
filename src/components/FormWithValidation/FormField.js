import React, {useState} from 'react';

export const FormField = ({placeholder, value, name, onChange, validate}) => {
    const [error, setError] = useState(false)

    const onInputChange = evt => {
        const value = evt.target.value
        const newError = validate ? validate(value) : false
        setError(newError)
        onChange({name, value: value, error: newError})
    }
    return (
        <div>
            <input
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
            />
            <span style={{color: 'red'}}>{error}</span>
        </div>
    );
};

