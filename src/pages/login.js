import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


/** material UI design */
import { withStyles, Typography, TextField, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    ...theme.spreadForStyles
})
export class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors : {}
        }
    }


    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    

    handleSubmit = event => {
        /**prevent redirections */
        const userData = {
            email : this.state.email,
            password : this.state.password
        }
    }

    
    render() {
        const { classes } = this.props;
        let loading = false;
        return (
            <Grid container spaing={4} className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant="h4" className={classes.formTitle}>Register</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        
                        <TextField
                            /** TextField parameters are taken and 
                             * adjusted from source API
                             */
                            id="email"
                            name="email"
                            label="E-mail"
                            className={classes.TextField}
                            helperTest='error will be here'
                            /**add error = {} */
                            value={this.state.email}
                            onChange={this.handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            className={classes.TextField}
                            helperTest='error will be here'
                            /**add error = {} */
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin="normal"
                            fullWidth
                        />

                        <Button 
                            type='submit'
                            variant='contained'
                            color='primary'
                            className={classes.buttonForm}
                            /** add the button disabling functionality */
                            disabled={loading}
                        >
                            Enter
                            {loading && (
                                <CircularProgress size={30} 
                                className={classes.loader} />
                            )}
                        </Button>   
                        <br/>
                        <p><small>join us <Link color="primary" to="/signup">here</Link></small></p> 
                    </form>
                </Grid>
                <Grid item sm/>


            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login)
