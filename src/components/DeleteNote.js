import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteNote} from '../redux/actions/dataActions';
import PropTypes from 'prop-types';


/** material UI imports */
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    ...theme.spreadForStyles,
    deleteButton : {
        color: 'red'
    },
})

export class DeleteNote extends Component {
    onDelete = () =>{
        this.props.deleteNote(this.props.noteId);
    }
    render() {
        const { 
            classes,
            UI : {
                loading
            }
         } = this.props;
        return (
            
            <div>
                <Button className={classes.buttonForm} onClick={this.onDelete}>
                    <Tooltip title='Delete Note'>
                        <DeleteForeverIcon className={classes.deleteButton}/> 
                    </Tooltip>    
                        {loading && (
                        <CircularProgress
                            size={30}
                            className={classes.loader}
                        />)}   
                </Button> 
            </div>
        )
    }
}

DeleteNote.propTypes = {
    classes : PropTypes.object.isRequired,
    deleteNote : PropTypes.func.isRequired,
    UI : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    UI: state.UI
})

export default connect(mapStateToProps, {deleteNote})(withStyles(styles)(DeleteNote))
