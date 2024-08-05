'use client';

import { useEffect, useState } from 'react';

import ThemeContext from "@/context/themeContext";

//Deefinition of the theme provider function.
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    //Definition of the inital value for the setDarkTheme function.

    //If the local storage is defined, we will get the 'hotel-team' item from it and parse the value to set the theme.
    const themeFromStorage : boolean = 
        typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme') 
            ? JSON.parse(localStorage.getItem('hotel-theme')!) //The exclamation point is to tell TS "yes, we are sure we are going to have this item in the Local Storage".
            : false;

    // Creation and setting of the theme state with its initial value.
    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);

    const [renderComponent, setRenderComponent] = useState(false);

    //Once our component is rendered (mounted), we set the renderComponent variable to true
    useEffect(() => {
        setRenderComponent(true);
    }, []);

    //If our component is not yet rendered, we are going to return an empty fragment.
    if (!renderComponent) return <></>

    //Definition of the Theme context provider.
    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
                <div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;