import React, { Component } from 'react'
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

/** redux imports */
import { connect } from 'react-redux';

/** Component imports */
import DeleteNote from '../components/DeleteNote';

/** Material UI */
import { 
    Button, 
    Typography, 
    Paper     
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'

/** import styles */
const styles = theme => ({
    ...theme.spreadForStylesForNote
   
})

export class Note extends Component {
   
    render() {
        dayjs.extend(relativeTime);
        const {classes,
          authenticated,
          note : {
              title,
              body,
              noteId,
              createdAt
          }
         } = this.props;

        return (
          <div className={classes.root}>
              <Paper className={classes.paper}>
                <div className={classes.titleArea}>
                    <Typography variant="h5" >
                        {title}
                      </Typography>
                      {authenticated ? (
                        <DeleteNote noteId={noteId}/>
                      ) : null}
                      {/* <Button onClick={this.onDelete}>delete</Button>  */}
                </div>
                <div classes={classes.noteArea}>
                <Typography variant="body2" gutterBottom className={classes.noteArea}>
                          {body}
                        </Typography>
                </div>


                <div classes={classes.noteFooter}>
                    <small className={classes.editedTag}>Created {dayjs(createdAt).fromNow()}</small>
                    <Button className={classes.buttons}>Edit</Button>
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
  data: state.data,
  authenticated : state.user.authenticated
})
/** Userful stuff Text Area Autosize */
export default connect(mapStateToProps)(withStyles(styles)(Note))
