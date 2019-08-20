import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import PropTypes from 'prop-types';

/** material ui stuff */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles'

//redux
import {connect} from 'react-redux'

/** On logout button is pressed the user muist log out. The logic is implrmenenyed alreadyu, just call the function from the prop. MapAction To Prop */

const styles = theme => ({
    ...theme.spreadForStyles
})

class navbar extends Component {
    render() {
        const { classes, authenticated } = this.props;
        return (
            <div>
                <AppBar>
                   <Toolbar className={classes.buttonHeader}>
                       <h1>Journal App</h1>
                        <div >
                            <div>
                                {authenticated ? (<Button color='inherit' component={Link} to="/">Logout</Button>) : (
                                    <div>
                                        <Button color='inherit' component={Link} to="/login">Login</Button>
                                        <Button color='inherit' component={Link} to="/signup">Signup</Button>
                                    </div>
                                )}
                            </div>
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

// export default withStyles(styles)(navbar)
export default connect(mapStateToProps)(withStyles(styles)(navbar))