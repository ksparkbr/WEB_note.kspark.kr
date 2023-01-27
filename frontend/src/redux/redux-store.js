import { createStore } from "redux";

const initState = {
    session : {admin: false, session: null},
    alert : {
        show : false,
        msg : '',
        type : '',
    }
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case 'SESSION':
            return {
                ...state,
                session : action.data
            }
        case 'ALERT' : 
            return {
                ...state,
                alert : action.data
            }
        default:
            return state;
    }
}

export const reduxStore = createStore(reducer);