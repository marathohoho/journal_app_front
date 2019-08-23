import { SET_NOTES, 
    SET_NOTE, 
    DELETE_NOTE, 
    POST_NOTE, 
    LOADING_DATA 
} from '../types';
import axios from 'axios';
import { awaitExpression } from '@babel/types';

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
    axios
        .delete(`/note/${noteId}`)
        .then(() => {
            dispatch({ type: DELETE_NOTE, payload: noteId});
        })
        .catch(err => {
            console.log(err);
        })
};

