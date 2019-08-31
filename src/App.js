/** General imports */
import React, {Component} from 'react';
import './App.css';
import importedTheme from './utilities/customTheme';
import decodeToken from 'jwt-decode'
import axios from 'axios'

/** Material UI stuff */
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

/** Components */
import Navbar from './components/navbar';
import AuthenticationRoute from './components/AuthenticationRoute'

/** Pages and routes */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

/** Redux imports */
import store from './redux/store'
import { Provider } from 'react-redux';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions'


/** particles JS */
import Particles from 'react-particles-js';
import particlesjsconfig from './utilities/particlesjs-config.json';


//authentication using Bearer Token
const expired = decodedToken => {
  return decodedToken.exp * 1000 < Date.now();
}

axios.defaults.baseURL = 
  'https://europe-west2-chingujournal.cloudfunctions.net/api';
  // 'http://localhost:5000/chingujournal/europe-west2/api';


const receivedToken = localStorage.AuthenticationToken;
if(receivedToken){
  const decodedToken = decodeToken(receivedToken)
  if(expired(decodedToken)) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
  else{
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = receivedToken;
  }
}



/** propagate the MUI theme to children components */
const theme = createMuiTheme({
  ...importedTheme
})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Particles className='particles' params = {particlesjsconfig}/>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
              <div className="container">
                <Switch>
                  <Route  exact path="/" component={home}/>
                  <AuthenticationRoute exact path="/login" component={login}/>
                  <AuthenticationRoute exact path="/signup" component={signup}/>
                </Switch>
              </div>
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App;

/**
 * password promt be more specfic DONE
 * edit button make a s SUBMIT
 * make a static background for the home page
 */
