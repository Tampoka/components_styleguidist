import logo from './logo.svg';

import {ThemeContext} from './theme';

export const Header = props => (
    //child is a method that passes the value of the Provider as an argument to the method.//
    <ThemeContext.Consumer>
        {theme => (
            <header
                className="App-header"
                style={{backgroundColor: theme.background}}
            >
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title" style={{color: theme.foreground}}>
                    Welcome to React
                </h1>
            </header>
        )}
    </ThemeContext.Consumer>
);
