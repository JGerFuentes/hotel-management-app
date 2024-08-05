import { Dispatch, SetStateAction, createContext } from 'react';

// Definition of the type
type ThemeContextType = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

//Creation of the context
const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false,
    setDarkTheme: () => null,
})

export default ThemeContext;