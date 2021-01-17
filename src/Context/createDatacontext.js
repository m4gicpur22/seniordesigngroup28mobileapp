import React, {useReducer} from 'react';

export default (reducer, actions, defaultValue) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        //creates a actions object for us to use throughout our context props
        for(let key in actions)
            boundActions[key] = actions[key](dispatch);

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};