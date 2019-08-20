import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


/** material UI design */
import { withStyles, Typography, TextField, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



//redux imports
import { connect } from 'react-redux';
import { loginUser} from '../redux/actions/userActions'


//global styles from material design
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
        event.preventDefault();
        const userData = {
            email : this.state.email,
            password : this.state.password
        }

        this.props.loginUser(userData, this.props.history);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.UI.errors) {
            this.setState({
                errors: newProps.UI.errors
            })
        }
    }

    
    render() {
        const { classes, 
            UI: {
                loading
            } 
        } = this.props;
        const { errors } = this.state;
        return (
            <Grid container spaing={4} className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant="h4" className={classes.formTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        
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
                        <p><small>join us <Link color="primary" to="/signup">here</Link></small></p> 
                    </form>
                </Grid>
                <Grid item sm/>


            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    loginUser : PropTypes.func.isRequired

}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
})

const mapActionToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(login))
//test