import { SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types';

const initialState = {
    authenticated : false,
    loading: false
}

export default function (state = initialState, action) {
    // choose action type
    switch(action.type) {
        case SET_AUTHENTICATED :
            return {
                ...state, 
                authenticated : true
            };
        case SET_UNAUTHENTICATED : 
            return initialState;
        default : 
            return state;
    }
}



// export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
// export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED'
// export const SET_USER = 'SET_USER'
// export const LOADING_USER = 'LOADING_USER'
// export const SET_ERRORS = 'SET_ERRORS'
// export const LOADING_UI = 'LOADING_UI'
// export const CLEAR_ERRROS = 'CLEAR_ERRROS'
