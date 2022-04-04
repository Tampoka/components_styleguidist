import {Component, createRef} from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

export class Three extends Component {
    static displayName = "03-basic-input";

    name=createRef()

    onFormSubmit = (evt) => {
        evt.preventDefault()
        console.log(this.name.current.value)
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>

                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        ref={this.name}
                    />

                    <input type='submit'/>
                </form>
            </div>
        );
    }
}

