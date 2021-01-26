import React, { useReducer } from 'react';

const initialState = {
        user: {
            name: "Mateus",
            email: "teuguedes@outlook.com",
            password: 'Iamdude18'
        },
        theme: 'black',
}

function reducer(state, action) {
    return {...state, ...action}
}

const AuthContext = React.createContext({});

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth}