import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteNote} from '../redux/actions/dataActions';
import PropTypes from 'prop-types';


/** material UI imports */
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = theme => ({
    ...theme.spreadForStylesForNote,
    deleteButton : {
        color: 'red'
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

export class DeleteNote extends Component {
    onDelete = () =>{
        console.log('we are deleting the note')

        this.props.deleteNote(this.props.noteId);
    }
    render() {
        const { classes } = this.props;
        return (
            
            <div>
                <Button classes={classes.buttons} onClick={this.onDelete}>
                    <Tooltip title='Delete Note'>
                        <DeleteForeverIcon className={classes.deleteButton}/>    
                    </Tooltip>    
                </Button> 
            </div>
        )
    }
}

DeleteNote.propTypes = {
    classes : PropTypes.object.isRequired,
    deleteNote : PropTypes.func.isRequired
}



export default connect(null, {deleteNote})(withStyles(styles)(DeleteNote))
