import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import PropTypes from 'prop-types';

/** material ui stuff */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    ...theme.spreadForStyles
})

class navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar>
                   <Toolbar className={classes.buttonHeader}>
                       <h1>Journal App</h1>
                        <div >
                            <Button color='inherit' component={Link} to="/login">Login</Button>
                            <Button color='inherit' component={Link} to="/signup">Signup</Button>
                        </div>
                   </Toolbar>
                </AppBar>
            </div>
        )
    }
}

navbar.propTypes = {
    classes: PropTypes.object.isRequired
} 

// export default withStyles(styles)(navbar)
export default withStyles(styles)(navbar)