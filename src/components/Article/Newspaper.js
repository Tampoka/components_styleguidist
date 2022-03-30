import {Container} from './Container';
import * as PropTypes from 'prop-types';

function Article(props) {
    return props.children;
}

Article.propTypes = {
    headline: PropTypes.string,
    children: PropTypes.node
}

export const Newspaper = props => {
    return (
        <Container>
            <Article headline="An interesting Article">
                Content Here
            </Article>
        </Container>
    )
}