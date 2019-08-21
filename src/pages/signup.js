import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


/** material UI design */
import { withStyles, Typography, TextField, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



//redux imports
import { connect } from 'react-redux';
import { signupUser} from '../redux/actions/userActions'


//global styles from material design
const styles = theme => ({
    ...theme.spreadForStyles
})

export class signup extends Component {
    constructor() {
        super();
        this.state = {
            handle: '', 
            email : '',
            password : '',
            confirmPassword : '',
            errors: {}
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit =(event) =>{
        // prevent redirections : prevent passing the user data 
        // in the URL header
        event.preventDefault();
        const userData = {
            handle : this.state.handle,
            email: this.state.email,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword
        }

        this.props.signupUser(userData, this.props.history);
    }

    componentDidUpdate(newProps) {
        if(newProps.UI.errors) {
            this.setState({
                errors : newProps.UI.errors
            })
        }
    }

    render() {
        const {
            classes,
            UI: {
                loading
            }
        } = this.props;
        const { errors } = this.state;
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
                            id="handle"
                            name="handle"
                            label="Name"
                            className={classes.TextField}
                            helperText={errors.handle}
                            /**add error = {} */
                            error={errors.handle ? true : false}
                            value={this.state.handle}
                            onChange={this.handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            /** TextField parameters are taken and 
                             * adjusted from source API
                             */
                            id="email"
                            name="email"
                            label="E-mail"
                            className={classes.TextField}
                            helperText={errors.email}
                            /**add error = {} */
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            className={classes.TextField}
                            helperText={errors.password}                            
                            /**add error = {} */
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Your Password"
                            type="password"
                            className={classes.TextField}
                            helperText={errors.confirmPassword}                            
                            /**add error = {} */
                            error={errors.confirmPassword ? true : false}
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            margin="normal"
                            fullWidth
                        />
                        {errors.general && (
                            <Typography variant="body2" className={classes.generalError}>
                                {errors.general}
                            </Typography>
                        )}
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
                        <p><small> Already have an account ? <Link color="secondary" to="/login">login</Link></small></p> 
                    </form>
                </Grid>
                <Grid item sm/>


            </Grid>
        )
    }
}

signupUser.propTypes = {
    classes : PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    signupUser : PropTypes.func.isRequired 
}

const mapStateToProps = state => ({
    user: state.user,
    UI : state.UI
})

export default connect(mapStateToProps, {signupUser})(withStyles(styles)(signup))
