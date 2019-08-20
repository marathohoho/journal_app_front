import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthenticationRoute = ({ component: Component, authenticated}) => (
    <Route
        render = {(props) =>
            authenticated === true ? <Redirect to='/'/> : <Component {...props}/>
        }
    />
)

const mapStateToProps = state => ({
    authenticated : state.user.authenticated
})

AuthenticationRoute.propTypes = {
    authenticated : PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(AuthenticationRoute)
