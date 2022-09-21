import { combineReducers } from 'redux'
import { user } from './userReducer'

const rootReducer = combineReducers({
    userState: user,
})

export default rootReducer