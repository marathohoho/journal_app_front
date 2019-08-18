/** General imports */
import React, {Component} from 'react';
import './App.css';
import importedTheme from './utilities/customTheme';



/** Material UI stuff */
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


/** Components */
import Navbar from './components/navbar';


/** Pages and routes */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
/** Redux imports */





/** propagate the MUI theme to children components */
const theme = createMuiTheme({
  ...importedTheme
})

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/signup" component={signup}/>

              </Switch>
            </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App;
