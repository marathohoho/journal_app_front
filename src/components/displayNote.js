import React, { Component } from 'react'
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

/** redux imports */
import { connect } from 'react-redux';

/** Component imports */
import DeleteNote from '../components/DeleteNote';
import EditNote from '../components/EditNote';


/** Material UI */
import { 
    Button, 
    Typography, 
    Paper     
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';


/** import styles */
const styles = theme => ({
    ...theme.spreadForStylesForNote
   
})

export class Note extends Component {

    render() {
        dayjs.extend(relativeTime);
        const {classes,
          note : {
              title,
              body,
              noteId,
              createdAt,
              editedAt
          }
         } = this.props;

        return (
          <div className={classes.root}>
              <Paper className={classes.paper}>
                <div className={classes.titleArea}>
                  <Typography variant="h5" >
                      {title}
                    </Typography>
                    { (
                      <DeleteNote noteId={noteId}/>
                    ) }
                </div>
                <div classes={classes.noteArea}>
                  <Typography 
                    variant="body2" 
                    gutterBottom 
                    className={classes.noteArea}
                    >
                      {body} 
                  </Typography>
                </div>
                <div classes={classes.noteFooter}>
                  {editedAt ? (<small className={classes.editedTag}>
                    Edited {dayjs(editedAt).fromNow()}
                  </small>):
                  (<small className={classes.editedTag}>
                    Created {dayjs(createdAt).fromNow()}
                  </small>)
                  }
                  <EditNote noteId={noteId}/>
                </div>
              </Paper>
          </div>
        )
    }
}

Note.propTypes = {
    classes : PropTypes.object.isRequired,
    note: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  data: state.data
})
/** Userful stuff Text Area Autosize */
export default connect(mapStateToProps)(withStyles(styles)(Note))
