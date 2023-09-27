// to share the login status or credentials with whole website.

// as useState() , useContext() is also a hook

import { createContext } from "react";

export const LoginContext = createContext({

    isLoggedIn:false,
    
    login: () => {
        //defined in App.js , so they will be automatically valid everywhere.
    },

    logout: () => {
        //defined in App.js , so they will be automatically valid everywhere.
    },
    
});