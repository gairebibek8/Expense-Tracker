const AppReducer = (state, action) => {
    switch(action.type){
        case 'GET_ACTION':
            return {
                ...state,
                loading: false,
                actions: action.payload
                 
            }
        case 'DELETE_ACTION':
            return{
                ...state,
                actions: state.actions.filter(actions => actions._id !== action.payload)
            };
            
        case 'ADD_ACTION':
            return{
                ...state,
                // while fetching from API we need from the old data to new data so action.payload is switched to back but gets add on top
                actions: [...state.actions, action.payload]
            }

        case "ACTION_ERROR":
            return {
                ...state,
                error: action.payload
            }    

        default:
            return state;
    }
}

export default AppReducer;