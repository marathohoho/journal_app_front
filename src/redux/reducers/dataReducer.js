import { SET_NOTES, SET_NOTE, DELETE_NOTE, POST_NOTE, LOADING_DATA} from '../types'

const initialState = {
    notes: [],
    note: {},
    loading: false
  };

  export default function (state = initialState, action) {
      switch (action.type) {
        case SET_NOTES : 
            return {
                ...state, 
                notes : action.payload,
                loading: false
            };
        case SET_NOTE : 
            return {
                ...state, 
                note : action.payload
            };
        case LOADING_DATA : 
            return {
                ...state, 
                loading: true
            };
        case DELETE_NOTE : 
            let id = state.notes.findIndex(note => note.noteId === action.payload);
            state.notes.splice(id, 1);
    
            return {
                ...state
            };
        default :
            return state;
        
      }
  }