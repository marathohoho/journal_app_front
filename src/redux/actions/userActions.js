import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, SET_AUTHENTICATED } from '../types';
import axios from 'axios';
import store from '../store'


export const loginUser = (userData, history) => dispatch => {
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


export const signupUser = (userData, history) => dispatch =>{
    dispatch({ type: LOADING_UI });
    axios.post('/signup', userData)
        .then(res => {
            /** post request for registration also responds with a token
             * Set the token into the Authorization header
             */
            setAuthorizationToken(res.data.token);
            dispatch({ type: CLEAR_ERRORS });
            history.push('/')
        })
        .catch(err => {
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
