import { DELETE_BY_ID_SUCCESS, FETCH_USER_SUCCESS } from "./action";

const initialState = {
    users: []
}

const rootReducer  = (state= initialState, action) =>{
    switch (action.type){
        case FETCH_USER_SUCCESS:
            return {users : action.payload}
        case DELETE_BY_ID_SUCCESS:
            return {users: 
                [...state.users].filter(user=>+user.id!==+action.payload)}
        default:
            return state
    }
}
export default rootReducer;