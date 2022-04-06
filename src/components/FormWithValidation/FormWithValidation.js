import React, {useState} from 'react';
import {FormField} from './FormField';
import isEmail from 'validator/es/lib/isEmail';

export const FormWithValidation = () => {
    const [fields, setFields] = useState({name: '', email: ''})
    const [fieldErrors, setFieldErrors] = useState({})
    const [people, setPeople] = useState([])

    const onFormSubmit = evt => {
        const person = {...fields}
        evt.preventDefault()

        if (validate()) return

        setPeople([...people, person])
        setFields({name: '', email: ''})
    }

    const onInputChange = ({name, value, error}) => {
  /*      setFields({...fields, name: value})
        setFieldErrors({...fieldErrors, name: error})*/
        const updatedFields={...fields}
        const updatedFieldErrors={...fieldErrors}
        updatedFields[name] = value;
        updatedFieldErrors[name] = error;

        setFields(updatedFields)
        setFieldErrors(updatedFieldErrors)
    }

    const validate = () => {
        const person = {...fields}
        const errors = {...fieldErrors}
        const errMessages = Object.keys(errors).filter(k => errors[k]);

        if (!person.name) return true;
        if (!person.email) return true;
        if (errMessages.length) return true;

        return false;
    }
    console.log(fields)
    console.log(people)
    return (
        <div>
            <h1>Sign Up Sheet</h1>

            <form onSubmit={onFormSubmit}>
                <FormField
                    placeholder="Name"
                    name="name"
                    value={fields.name}
                    onChange={onInputChange}
                    validate={val => (val ? false : 'Name Required')}
                />

                <br/>

                <FormField
                    placeholder="Email"
                    name="email"
                    value={fields.email}
                    onChange={onInputChange}
                    validate={val => (isEmail(val) ? false : 'Invalid Email')}
                />

                <br/>

                <input type="submit" disabled={validate()}/>
            </form>

            <div>
                <h3>People</h3>
                <ul>
                    {people.map(({name, email}, i) => (
                        <li key={i}>
                            {name} ({email})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

