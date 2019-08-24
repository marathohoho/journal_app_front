import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';


/** redux & functions */
import {addNote} from '../redux/actions/dataActions';
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


const styles = theme => ({
    ...theme.spreadForStylesForNote,
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
        errros : {}
    }

    handleOpen = () => {
        this.setState({dialogOpen : true});
    }

    handleClose = () => {
        store.dispatch({ type : CLEAR_ERRORS });
        this.setState({ 
            dialogOpen: false,
            errors : {}
        })

    }


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
                    <p1>hehe</p1>    
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


export default connect(mapStateToProps, {addNote})(withStyles(styles)(AddNote));
