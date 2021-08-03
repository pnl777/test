import * as actionTypes from './user.type'
import userEndPoint from '../../endpoint/userEndPoint'

export const registerAction = (username,email,password) => {
    return async (dispatch) => {
        try {
            dispatch({ type : actionTypes.USER_REGISTER_REQUEST })
            const { data } = await userEndPoint.post('/user/register', { username, email, password })
            dispatch({ type : actionTypes.USER_REGISTER_SUCCESS, payload : data})
        } catch (error) {
            dispatch({ type : actionTypes.USER_REGISTER_FAILED, payload : error.response.data.message ? error.response.data.message : error.message })
        }
    }
}