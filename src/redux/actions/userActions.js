import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, } from '../types';
import axios from 'axios';


export const loginUser = (userData, history) => dispatch => {
    console.log('I am in login user')
    dispatch({ type: LOADING_UI })
    axios.post('/login', userData)
        .then(res => {
            setAuthorizationToken(res.data.token);
            dispatch({ type : CLEAR_ERRORS});
            history.push('/')
        })
        .catch(err =>{
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })

}

// export const signupUser = ()


//handle logout event -> delete user token
export const logoutUser = () => dispatch => {
    localStorage.removeItem('FirebaseIDToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED})
}



//handle login event -> set up the user token
const setAuthorizationToken = token => {
    const FirebaseIDToken = `Bearer ${token}`;
    localStorage.setItem('AuthenticationToken', FirebaseIDToken);
    axios.defaults.headers.common['Authorization'] = FirebaseIDToken;
}   



// export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
// export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED'
// export const SET_USER = 'SET_USER'
// export const LOADING_USER = 'LOADING_USER'
// export const SET_ERRORS = 'SET_ERRORS'
// export const LOADING_UI = 'LOADING_UI'
// export const CLEAR_ERRROS = 'CLEAR_ERRROS'
