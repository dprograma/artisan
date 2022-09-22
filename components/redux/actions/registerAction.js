import { USER_REGISTER } from '../constants/types'


export const createUser = (payload) => {
    return (async (dispatch) => {
        const response = await fetch('http://127.0.0.1:8000/api/register/', payload)
        const res = await response.json()
        console.log(res)
        if (response.ok) {
            dispatch({type: USER_REGISTER, currentUser: res})
            return res
        }
        else{
            console.log('Something went wrong: ' + res)
            return res
        } 
    })
}  