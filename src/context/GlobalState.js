import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//Initial state
const initialState = {
    actions: []
}
//Create context
export const GlobalContext = createContext(initialState);
//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Actions for the user's history
    function deleteActions(id) {
        dispatch({
            type: 'DELETE_ACTION',
            payload: id
        });
    }

    function addActions(actions) {
        dispatch({
            type: 'ADD_ACTION',
            payload: actions
        });
    }

    return (<GlobalContext.Provider value={{
        actions: state.actions,
        deleteActions,
        addActions
    }}>
        {children}
    </GlobalContext.Provider>);
}