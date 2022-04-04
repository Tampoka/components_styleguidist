import {One} from './01-basic-button.js';
import {Two} from './02-basic-button.js';
import {render} from 'react-dom';
import {createElement} from 'react';
import {Three} from './03-basic-input';

const routes = [One, Two,Three]

const location = window.location;
window.addEventListener('hashchange', location.reload.bind(location));
const loc = location.hash.replace('#/', '');
const element = loc ? createRoute(loc) : createTOC();

export const container = document.createElement('div');
document.body.appendChild(container);
render(element, container);

function createTOC() {
    return (
        <div className='ui container'>
            <h1>React Forms</h1>
            <ul className='ui list'>
                {routes.map((route, i) =>
                    <li key={i}><a href={`#/${(i + 1)}`}>{route.displayName}</a></li>
                )}
            </ul>
        </div>
    )
}

function createRoute(nStr) {
    let i = nStr - 1;
    if (i < 0) i = 0;
    if (i > routes.length - 1) i = routes.length - 1;

    const navStyle = {
        position: 'fixed', bottom: 50, textAlign: 'center', left: '10%'
    };
    const isFirst = i <= 0;
    const isLast = i >= routes.length - 1;

    return (
        <div className="ui container">
            {createElement(routes[i])}
            <div style={navStyle}
                 className='ui fluid three item pagination menu'>
                {isFirst ? '' : <a href={`#/${i}`} className='item'>{'<'}</a>}
                <a href={location.href.replace(location.hash, '')}
                   className='item'>TOC</a>
                {isLast ? '' : <a href={`#/${(i + 2)}`} className='item'>{' > '}</a>}
            </div>
        </div>
    );
}
