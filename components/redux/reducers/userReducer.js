import { USER_LOGIN } from '../constants/types'

const initialState = {
    currentUser: null,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                currentUser: action.currentUser
            }
            break;
    
        default:
            return {...state}
    }
} 