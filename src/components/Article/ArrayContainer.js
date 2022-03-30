import {Children, Component} from 'react';
import PropTypes from 'prop-types';

export class ArrayContainer extends Component {
    static propTypes = {
        component: PropTypes.element.isRequired,
        children: PropTypes.element.isRequired
    }

    render() {
        const arr = Children.toArray(this.props.children)
        return (
            <div className="container">
                {arr.sort((a, b) => a.id < b.id)}
            </div>
        )
    }
}