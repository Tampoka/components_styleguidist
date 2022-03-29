import PropTypes from 'prop-types';

export const Container = (props) => {
    return <div className="container">
        {props.children}
    </div>
}

Container.propsType={
    children: PropTypes.oneOf([PropTypes.element, PropTypes.array])
}