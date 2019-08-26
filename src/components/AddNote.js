import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';


/** redux & functions */
import {addNote, getNotes} from '../redux/actions/dataActions';
import { connect } from 'react-redux';
import { CLEAR_ERRORS } from '../redux/types';
import store from '../redux/store';

/** MUI  */
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


const styles = theme => ({
    ...theme.spreadForStyles,
    authenticatedButtons : {
        alignContent: 'center',
        color : 'secondary'
    },
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    },
})

class AddNote extends Component {
    state = {
        dialogOpen : false,
        title : '',
        body: '',
        errors : {}
    }

    handleOpen = () => {
        this.setState({dialogOpen : true});
    };
    
    handleClose = () => {
        store.dispatch({ type : CLEAR_ERRORS });
        this.setState({
            dialogOpen: false,
            title : '',
            body: '',
            errors : {}
        });
    };
    
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        const newNote = {
            title: this.state.title,
            body : this.state.body
          }
          
        this.props.addNote(newNote);
    }
    
    UNSAFE_componentWillReceiveProps(errorsProps) {
        if(errorsProps.UI.errors) {
            this.setState({
                errors : errorsProps.UI.errors
            });
        }
        if(!errorsProps.UI.errors && !errorsProps.UI.loading) {
            this.setState({
                title: '', 
                body: '',
                errors : {},
                dialogOpen : false
            });
            // this.props.getNotes()
        }
    };
    
    render() {
        const { errors } = this.state;
        const {
            classes,
            UI : {
                loading
            }
        } = this.props;
        return (
            <Fragment>
                <Tooltip title="Add a Note">
                <Button color='inherit' onClick={this.handleOpen}>
                    <Fab color='primary' className={classes.fab}>
                        <AddIcon/>
                    </Fab>
                </Button>
                </Tooltip> 
                <Dialog 
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>Create a new journal note</DialogTitle>
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
                                defaultValue={this.state.title}
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
                                defaultValue={this.state.body}
                                fullWidth
                            />
                            <Button
                                type="submit"
                                color="primary"
                                className={classes.buttonForm}
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
                        </form>
                    </DialogContent>
                </Dialog>  
            </Fragment>
        )
    }
}

AddNote.propTypes = {
    addNote : PropTypes.func.isRequired,
    UI : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    UI : state.UI
})

const mapActionsToProps = {
    addNote,
    getNotes
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(AddNote));
