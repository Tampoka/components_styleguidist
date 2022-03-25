import React from 'react';
import PropTypes from 'prop-types';

const counterStyle = {
    width: '50px',
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    padding: '10px'
};


export class Counter extends React.Component {
    static propTypes = {
        initialValue: PropTypes.number
    }
    static defaultProps = {
        initialValue: 5
    };

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    decrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1
            };
        });
    };

    increment = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
            };
        });
    };

    render() {
        return (
            <div style={counterStyle} key="counter">
                {this.state.value}
                <p>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </p>
            </div>
        );
    }
}


