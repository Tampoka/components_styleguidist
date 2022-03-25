import React, {useState} from 'react';
import {ThemeContext, themes} from './theme';

export const App = () => {
    const [theme, setTheme]=useState(themes.dark)

    const toggleTheme = evt => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <div className="App">
            <ThemeContext.Provider value={theme}>
                <Header />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <button onClick={toggleTheme}>Change theme</button>
            </ThemeContext.Provider>
        </div>
    );
};

