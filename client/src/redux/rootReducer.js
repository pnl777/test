import { combineReducers } from "redux"
import { registerReducer } from "./user/user.reducer"

const rootReducer = combineReducers({
    registerUser : registerReducer
})

export default rootReducer