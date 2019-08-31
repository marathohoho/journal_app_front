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
    Typography, 
    Paper     
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';




/** import styles */
const styles = theme => ({
    ...theme.spreadForStylesForNote,
    ...theme.spreadForStyles,
 
    localTypography : {
      width: '100%',
      wordWrap: 'break-word',
    },
    gridList : {
      width: '100%',
      padding: '0px 0px 0px 0px'
    },   
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
                <Card>
                  <div className={classes.titleArea}>
                    <Typography variant="h5" >
                        {title}
                      </Typography>
                      { (
                        <DeleteNote noteId={noteId}/>
                      ) }
                  </div>
                  <CardContent>
                    <div >
                      <Paper >
                      <GridList className={classes.gridList} cols={1}  >
                          
                            <Typography 
                              variant="body2" 
                              className={classes.noteArea}
                              >
                                {body} 
                            </Typography> 
                          
                      </GridList>
                        </Paper>      
                    </div>
                  </CardContent>
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

                </Card>
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
