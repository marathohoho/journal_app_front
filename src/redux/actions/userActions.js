import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, SET_AUTHENTICATED } from '../types';
import axios from 'axios';
import store from '../store'


export const loginUser = (userData, history) => dispatch => {
    console.log('I am in login user')
    dispatch({ type: LOADING_UI })
    console.log(userData)
    axios.post('/login', userData)
        .then(res => {
            console.log('setting authorization', res.data.JWT_token)
            setAuthorizationToken(res.data.JWT_token);
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
    localStorage.removeItem('AuthenticationToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED})
}



//handle login event -> set up the user token
const setAuthorizationToken = token => {
    const FirebaseIDToken = `Bearer ${token}`;
    localStorage.setItem('AuthenticationToken', FirebaseIDToken);
    axios.defaults.headers.common['Authorization'] = FirebaseIDToken;
    store.dispatch({ type: SET_AUTHENTICATED})

}   
