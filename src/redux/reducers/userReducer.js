import { SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types';

const initialState = {
    authenticated : false,
    loading: false,
    credentials: {}
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
