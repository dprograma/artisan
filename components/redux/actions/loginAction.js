import { USER_LOGIN } from '../constants/types'

export const fetchUser = (payload) => {
    return ((dispatch) => {
        fetch('http://localhost:8000/api/login', payload)
        .then((response) => {
            if (response.ok) {
                dispatch({type: USER_LOGIN, currentUser: response.json()})
            } 
        })
    })
}  