import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {getNotes} from '../redux/actions/dataActions'

/** components */
import { Note } from '../components/displayNote';
/** Material UI */
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'


const styles = theme => ({
    ...theme.spreadForStylesForNote
})

export class home extends Component {

    componentDidMount() {
        this.props.getNotes();
    }


    render() {
        const {classes} = this.props;
        const {notes, loading} = this.props.data;
        let yourNotes = !loading ? (
            notes.map(note => <Note key={note.noteId} note={note} classes={classes} />)
        ) : (
            <div className="lds-hourglass"></div>
        )

        const {authenticated} = this.props;
        return (
            <div>
                {authenticated ? (
                    <Grid container spacing={4} alignContent='center'>
                    <Grid item xs={12}>
                        {yourNotes}
                    </Grid>
                    </Grid>
                    ) : (
                        <div className={classes.pleaseLoginText}>
                            <p>Please Authenticate</p>
                        </div>
                    )
                }
            </div>
    
                
        )
    }
}

home.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    getNotes : PropTypes.func.isRequired,
    data : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data : state.data,
    authenticated: state.user.authenticated
});

export default connect(mapStateToProps, { getNotes })(withStyles(styles)(home));