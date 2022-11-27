import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from "axios";

//Initial state
const initialState = {
    actions: [],
    error: null,
    loading: true

}
//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions for the user's history
    async function getActions() {
        try {
            const result = await axios.get("/api/v1/transactions");

            dispatch({
                type: "GET_TRANSACTIONS",
                payload: result.data.data
            });
        } catch (err){
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: err.response.data.error
            });
        }
    }


    async function deleteActions(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_ACTION',
                payload: id
            });

        } catch (err) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: err.response.data.error
            });   
        }
    }

    async function addActions(actions) {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', actions, config);

            dispatch({
                type: 'ADD_ACTION',
                payload: res.data.data
            });

        } catch (err) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        actions: state.actions,
        loading: state.loading,
        error:state.error,
        getActions,
        deleteActions,
        addActions
    }}>
        {children}
    </GlobalContext.Provider>);
}