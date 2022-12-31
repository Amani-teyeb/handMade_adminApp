
import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import useReducer from './user.reducers'

const rootReducer = combineReducers({
    auth: authReducer,
    user: useReducer
})

export default rootReducer;