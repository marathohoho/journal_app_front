import { SET_NOTES, 
    SET_NOTE, 
    DELETE_NOTE, 
    POST_NOTE, 
    LOADING_DATA, 
    LOADING_UI,
    CLEAR_ERRORS,
    SET_ERRORS
} from '../types';
import axios from 'axios';

/** retrieve all notes for the authenticated user */
export const getNotes = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios
        .get('/notes')
        .then(res => {
            console.log('getting notes')
            dispatch({
                type: SET_NOTES,
                payload : res.data
            });
        })
        .catch(err => {
            dispatch({
                type: SET_NOTES,
                payload: []
            });
        });
}


export const deleteNote = (noteId) => dispatch => {
    dispatch({ type: LOADING_UI });
    axios
        .delete(`/notes/${noteId}`)
        .then(() => {
            dispatch({ 
                type: DELETE_NOTE, 
                payload: noteId
            });
        })
        .catch(err => {
             dispatch({
                 type : SET_ERRORS,
                 payload : err.response.data
             })
            // console.log('Could not delete the note ', err);
        })
};

export const addNote = newNote => dispatch => {
    dispatch({ type: LOADING_UI });
    axios
        .post('/note', newNote)
        .then(res => {
            dispatch({
                type : POST_NOTE,
                payload : res.data
            });
            dispatch({ type: CLEAR_ERRORS })
        })
        .catch(err => {
            dispatch({
                type : SET_ERRORS,
                payload : err.response.data
            });
        });
};
