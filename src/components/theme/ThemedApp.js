import React, {useState} from 'react';
import {ThemeContext, themes} from './theme';
import {Header} from './Header';

export const ThemedApp = () => {
    const [theme, setTheme] = useState(themes.dark)
    // const [theme, setTheme] = useState(useContext(ThemeContext))

    const toggleTheme = evt => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <div className="App">
            <ThemeContext.Provider value={theme}>
                <Header/>
                <p className="App-intro">
                    To get started, edit <code>src/ThemedApp.js</code> and save to reload.
                </p>
                <button onClick={toggleTheme}>Change theme</button>
                {/*<Body/>*/}
            </ThemeContext.Provider>
        </div>
    );
};

