const AppReducer = (state, action) => {
    switch(action.type){
        case 'DELETE ACTION':
            return{
                ...state,
                actions: state.action.filter(actions => actions.id !== action.payload)
            };
        case 'ADD_ACTION':
            return{
                ...state,
                actions: [action.payload, ...state.actions]
            }
        default:
            return state;
    }
}

export default AppReducer