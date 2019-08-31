import { SET_NOTES, 
    SET_NOTE, 
    DELETE_NOTE, 
    POST_NOTE, 
    LOADING_DATA, 
    LOADING_UI,
    CLEAR_ERRORS,
    SET_ERRORS,
    STOP_LOADING_UI,
} from '../types';
import axios from 'axios';

/** retrieve all notes for the authenticated user */
export const getNotes = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios
        .get('/notes')
        .then(res => {
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
            dispatch({ type : CLEAR_ERRORS});
        })
        .catch(err => {
             dispatch({
                 type : SET_ERRORS,
                 payload : err.response.data
             })
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

//change here as well
export const editNote = (noteId, updatedNote) => dispatch => {
    dispatch({ type: LOADING_UI });
    axios
        .put(`/notes/${noteId}`, updatedNote)
        .then(res => {
            dispatch({ 
                type  : DELETE_NOTE, 
                payload: noteId
            });
            dispatch({ 
                type  : POST_NOTE, 
                payload: res.data
            });
            dispatch({ type : CLEAR_ERRORS});
        })
        .catch(err => {
             dispatch({
                 type : SET_ERRORS,
                 payload : err.response.data
             })
        })
};

export const getNote = noteId => dispatch => {
    dispatch({ type: LOADING_UI });
    axios
        .get(`/note/${noteId}`)
        .then(res => {
            dispatch({
                type: SET_NOTE,
                payload : res.data
            });
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch(err => console.log(err));
}
