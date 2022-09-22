import { USER_LOGIN } from '../constants/types'


export const fetchUser = (payload) => {
    return (async (dispatch) => {
        const response = await fetch('http://127.0.0.1:8000/api/login/',  payload)
        const res = await response.json()
        console.log(res)
        if (response.ok) {
            dispatch({type: USER_LOGIN, currentUser: res})
            return res
        }
        else{
            console.log('User not found: ' + res)
            return res
        } 
    })
}  