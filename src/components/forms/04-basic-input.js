import {Component, createRef} from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

export class Four extends Component {
    static displayName = "04-basic-input";

    name = createRef()
    state = {names: []}

    onFormSubmit = (evt) => {
        const name = this.name.current.value
        const names = [...this.state.names, name]
        this.setState({names: names})
        this.name.current.value = ''
        evt.preventDefault()
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
                <div>
                    <h3>Names</h3>
                    <ul>
                        {this.state.names.map((name, i) => <li key={i}>{name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

