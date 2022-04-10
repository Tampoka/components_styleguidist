import {Children, Component, createElement} from 'react';
import PropTypes from 'prop-types';

/*
export class MultiChildContainer extends Component {
    static propTypes = {
        component: PropTypes.element.isRequired,
        children: PropTypes.element.isRequired
    }
    renderChild = (childData, index) => {
        return createElement(this.props.component,
            {},    //child props
            childData   //child's children
        )
    }

    render() {
        return (
            <div className="forms">
                {Children.map(this.props.children, this.renderChild)}
            </div>
        )
    }
}*/

export const MultiChildContainer = (props) => {

    const renderChild = (childData, index) => {
        return createElement(props.component,
            {},    //child props
            childData   //child's children
        )
    }

    return (
        <div className="container">
            {Children.map(props.children, renderChild)}
        </div>
    )
}

MultiChildContainer.propTypes = {
    component: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired
}