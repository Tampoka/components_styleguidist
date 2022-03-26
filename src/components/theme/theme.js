import React from 'react';

export const themes = {
    light: {
        foreground: '#222222',
        background: '#e9e9e9'
    },
    dark: {
        foreground: '#fff',
        background: '#222222'
    }
}


export const ThemeContext = React.createContext(themes.dark)
/* The default value is used within the consumer in the case that the child component
 is not wrapped in a ThemeContext.Provider component.*/
