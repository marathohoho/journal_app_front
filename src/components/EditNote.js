import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

/** redux related imports */
import {connect} from 'react-redux';
import {getNote, editNote} from '../redux/actions/dataActions';
import store from '../redux/store';
import { CLEAR_ERRORS, CLEAR_NOTE } from '../redux/types';


/** material UI imports */
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';         



const styles = theme => ({
    ...theme.spreadForStyles,
    editButton : {
        color: 'primary',
        textAlign : 'center',
        // color : '#000'
    },
})

export class EditNote extends Component {
    state = {
        dialogOpen : false,
        title: '',
        body : '',
        errors : {}
    }

    handleOpen = () => {
        this.props.getNote(this.props.noteId);
        this.setState({ dialogOpen : true });
        console.log('opening the dialog window')
    
    }

    handleWhenEntering = () => {
        
        console.log('title is: ', this.props.note.title)
        this.setState({
            title: this.props.note.title,
            body : this.props.note.body,
        })
    }

    handleClose = () => {
        store.dispatch({ type : CLEAR_ERRORS });
        /** need to dispatch clearing of node object as well */
        store.dispatch({ type : CLEAR_NOTE });
        this.setState({
            dialogOpen: false,
            title : '',
            body: '',
            errors : {}
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const editedNote = {
            title : this.state.title,
            body : this.state.body
        }
        this.props.editNote(this.props.noteId, editedNote);    
    }

    UNSAFE_componentWillReceiveProps(errorsProps) {
        if(errorsProps.UI.errors) {
            this.setState({
                errors : errorsProps.UI.errors
            });
        }
    };
    
    printBS = () => {
        alert('some bullshit')
    }

    render() {
        const { 
            classes,
            UI : {
                loading
            },
            note : {
                title,
                body,
            }
         } = this.props;
         const { errors } = this.state
        return (
            
            <Fragment>
                <Tooltip title="Edit the Note">
                    <Button 
                        className={classes.buttons} 
                        onClick={!loading? this.handleOpen : null}
                    >
                        <EditIcon className={classes.editButton}/>
                        {loading && (
                                <CircularProgress
                                    size={30}
                                    className={classes.loader}
                                />
                        )}
                    </Button>
                </Tooltip> 
            <Dialog 
                open={title ? this.state.dialogOpen : false}
                onEntering={this.handleWhenEntering}
                onClose={this.handleClose}
                fullWidth
                maxWidth="sm"
            >
                <div className={classes.buttonHeader}>
                    <DialogTitle>Edit your journal note</DialogTitle>
                    <Button>
                        <CloseIcon 
                            className={classes.closeIcon} 
                            onClick={this.handleClose}  
                        />
                    </Button>
                </div>
                <DialogContent>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            name="title"
                            type="text"
                            label="Title"
                            placeholder="Title for Your note"
                            error={errors.title ? true : false} 
                            helperText={errors.title}
                            className={classes.TextField}
                            onChange={this.handleChange}
                            defaultValue={title}
                            disabled={loading}
                            fullWidth
                        />
                        <TextField
                            name="body"                            
                            type="text"
                            label="Note"
                            multiline
                            rows="3"
                            placeholder="Write Your new note"
                            error={errors.body ? true : false}
                            helperText={errors.body}
                            className={classes.TextField}
                            onChange={this.handleChange}
                            defaultValue={body}
                            disabled={loading}
                            fullWidth
                        />
                        <div className={classes.editButton} >
                            <Button
                                type="submit"
                                color="primary"
                                disabled={loading}
                            >
                                Submit
                                {loading && (
                                    <CircularProgress
                                        size={30}
                                        className={classes.loader}
                                    />
                                )}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>  
        </Fragment>
       
        )
    }
}

EditNote.propTypes = {
    classes : PropTypes.object.isRequired,
    getNote : PropTypes.func.isRequired,
    UI      : PropTypes.object.isRequired,
    note    : PropTypes.object.isRequired,
    noteId  : PropTypes.string.isRequired, 
    editNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    UI: state.UI,
    note : state.data.note
})

export default connect(mapStateToProps, {getNote, editNote})(withStyles(styles)(EditNote))
