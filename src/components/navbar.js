import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import PropTypes from 'prop-types';
import AddNote from '../components/AddNote'
/** material ui stuff */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles'

//redux
import {connect} from 'react-redux';
import {logoutUser} from  '../redux/actions/userActions';

/** On logout button is pressed the user muist log out. The logic is implrmenenyed alreadyu, just call the function from the prop. MapAction To Prop */

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

class navbar extends Component {

    HandleLogOut = () => {
        this.props.logoutUser();
    }

    render() {
        const { classes, authenticated } = this.props;
        return (
            <div>
                <AppBar>
                   <Toolbar className={classes.buttonHeader}>
                       <h1>Journal App </h1> 
                       <div className={classes.authenticatedButtons}>
                           {authenticated ? 
                        ( <AddNote/> ) : (null)}
                       </div>
                        <div>
                                {authenticated ? 
                                    ( 
                                        <div>
                                            <Button color='inherit' component={Link} onClick={this.HandleLogOut} to="/">Logout</Button>
                                        </div>
                                    ) : (
                                        <div>
                                            <Button color='inherit' component={Link} to="/login">Login</Button>
                                            <Button color='inherit' component={Link} to="/signup">Signup</Button>
                                        </div>
                                )}
                        </div>
                   </Toolbar>
                </AppBar>
            </div>
        )
    }
}

navbar.propTypes = {
    authenticated : PropTypes.bool.isRequired
} 

const mapStateToProps = state => ({
    authenticated : state.user.authenticated
})

const mapActionToProps = {
    logoutUser
}

// export default withStyles(styles)(navbar)
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(navbar))