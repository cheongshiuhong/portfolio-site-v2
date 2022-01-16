// Types
import { UseThemeReturn } from '@interfaces/hooks/useTheme';

// Libraries
import React, { useState, useEffect } from 'react';

/**
 * Custom Hook for Themes
 *
 * @returns {UseThemeReturn} - The theme state and setter.
 */
const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light'
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark'
        }
    };

    /* Effect on mount to get user's preferences */
    useEffect(() => {
        if (localStorage.theme === 'dark'
            || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false);
        }
    }, []);

    return {
        isDarkMode,
        toggleTheme
    };
};

export default useTheme;
