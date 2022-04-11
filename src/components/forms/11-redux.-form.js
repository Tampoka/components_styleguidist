import React from 'react';
import isEmail from 'validator/lib/isEmail';
import {Field} from './08-field-component-field';
import {CourseSelectField} from '../FormWithSelect/CourseSelectField';
import PropTypes from 'prop-types';

const content = document.createElement('div');
document.body.appendChild(content);

export class Eleven extends React.Component {
    static displayName = '11-redux-form';
    static propTypes = {
        people: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        saveStatus: PropTypes.string.isRequired,
        fields: PropTypes.object,
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        fields: this.props.fields || {
            name: '',
            email: '',
            course: null,
            department: null
        },
        fieldErrors: {},
    };

    componentDidMount() {
        this.setState({loading: true})
        apiClient.loadPeople().then(people => {
            this.setState({loading: false, people: people})
        })
    }

    onFormSubmit = evt => {
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return;

        const people = [...this.state.people, person]

        this.setState({saveStatus: 'SAVING'})
        apiClient
            .savePeople(people)
            .then(() => {
                this.setState({
                    people: people,
                    fields: {
                        name: '',
                        email: '',
                        course: null,
                        department: null
                    },
                    saveStatus: 'SUCCESS'
                });
            })
            .catch(err => {
                console.log(err)
                this.setState({saveStatus: 'ERROR'})
            })
    };

    onInputChange = ({name, value, error}) => {
        const fields = Object.assign({}, this.state.fields);
        const fieldErrors = Object.assign({}, this.state.fieldErrors);

        fields[name] = value;
        fieldErrors[name] = error;

        if (name === 'department') fields.course = null


        this.setState({fields, fieldErrors, saveStatus: 'READY'});
    };

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        if (errMessages.length) return true;

        return false;
    };

    onRemoveButtonClick = (name) => {
        const updatedPeople = this.state.people.filter(p => p.name !== name)
        this.setState({people: updatedPeople})
        apiClient.updatePeople(updatedPeople)
    }

    render() {
        if (this.state.loading) {
            return <img alt="loading" src="/img/loading.gif"/>;
        }
        console.log(this.state.fields)
        return (
            <div>
                <h1>Sign Up Sheet</h1>

                <form onSubmit={this.onFormSubmit}>
                    <Field
                        placeholder="Name"
                        name="name"
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'Name Required')}
                    />

                    <br/>

                    <Field
                        placeholder="Email"
                        name="email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'Invalid Email')}
                    />

                    <br/>

                    <CourseSelectField
                        department={this.state.fields.department}
                        course={this.state.fields.course}
                        onChange={this.onInputChange}/>

                    <br/>

                    {
                        {
                            SAVING: <input value="Saving..." type="submit" disabled/>,
                            SUCCESS: <input value="Saved!" type="submit" disabled/>,
                            ERROR: (
                                <input
                                    value="Saving Failed - Retry?"
                                    type="submit"
                                    disabled={this.validate()}
                                />
                            ),
                            READY: (
                                <input
                                    value="Submit"
                                    type="submit"
                                    disabled={this.validate()}
                                />
                            )
                        }[this.state.saveStatus]
                    }
                </form>

                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({name, email, department, course}, i) => (
                            <li key={i}>
                                <button onClick={() => this.onRemoveButtonClick(name)}>X</button>
                                {[name, email, department, course].join(' - ')}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
