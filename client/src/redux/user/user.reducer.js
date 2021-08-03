import * as actionTypes from './user.type'

const INITIAL_STATE_REGISTER = {
    userInfo : {},
    loading : false
}

export const registerReducer = (state = INITIAL_STATE_REGISTER, action ) => {
    switch(action.type){
        case actionTypes.USER_REGISTER_REQUEST :
            return { ...state, loading : true }
        case actionTypes.USER_REGISTER_SUCCESS :
            return { ...state, loading : false, userInfo : action.payload }
        case actionTypes.USER_REGISTER_FAILED : 
            return { ...state, loading : false, error : action.payload }
        default : 
            return state
    }
}