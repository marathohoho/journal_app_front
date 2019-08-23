import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteNote} from '../redux/actions/dataActions';
import PropTypes from 'prop-types';


/** material UI imports */
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    ...theme.spreadForStylesForNote
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
                <Button classes={classes.buttons} onClick={this.onDelete}>DeleteButton</Button> 
            </div>
        )
    }
}

DeleteNote.propTypes = {
    classes : PropTypes.object.isRequired,
    deleteNote : PropTypes.func.isRequired
}



export default connect(null, {deleteNote})(withStyles(styles)(DeleteNote))
