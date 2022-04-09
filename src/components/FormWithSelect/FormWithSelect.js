import React, {useState} from 'react';
import isEmail from 'validator/es/lib/isEmail';
import {FormField} from '../FormWithValidation/FormField';
import {CourseSelectField} from './CourseSelectField';

export const FormWithSelect = () => {
    const [fields, setFields] = useState({
        name: '', email: '', course: null,
        department: null
    })
    const [fieldErrors, setFieldErrors] = useState({})
    const [people, setPeople] = useState([])

    const onFormSubmit = evt => {
        const person = {...fields}
        evt.preventDefault()

        if (validate()) return

        setPeople([...people, person])
        setFields({name: '', email: '', course: null, department: null})
    }

    const onInputChange = ({name, value, error}) => {
        const updatedFields = {
            ...fields,
            [name]: value
        }
        const updatedFieldErrors = {
            ...fieldErrors,
            [name]: error
        }

        if (name === 'department') updatedFields.course = null


        setFields(updatedFields)
        setFieldErrors(updatedFieldErrors)
    }

    const validate = () => {
        const person = {...fields}
        const errors = {...fieldErrors}
        const errMessages = Object.keys(errors).filter(k => errors[k]);

        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        if (errMessages.length) return true;

        return false;
    }

    console.log(fields)
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
                <CourseSelectField
                    department={fields.department}
                    course={fields.course}
                    onChange={onInputChange}
                />
                <br/>
                <input type="submit" disabled={validate()}/>
            </form>

            <div>
                <h3>People</h3>
                <ul>
                    {people.map(({name, email, department, course}, i) => (
                        <li key={i}>{[name, email, department, course].join(' - ')}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

