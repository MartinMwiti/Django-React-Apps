import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Alerts
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// components
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

// Redux
import { Provider } from 'react-redux'
import store from '../store'
import { loadUser } from '../actions/auth'


// Alerts Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}
class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser())
  }

    render(){
        return (
          <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Router>
                <Fragment>
                  <Header />
                  <Alerts />
                  <div className="container">
                    <Switch>
                      {/* Whatever page i want to protect e.g 'Dashboard' i'll use PrivateRoute instead of Route */}
                      <PrivateRoute exact path="/" component={Dashboard} /> 
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />
                    </Switch>
                  </div>
                </Fragment>
              </Router>
            </AlertProvider>
          </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'))





  /* 'Fragments' let you group a list of children without adding extra
            nodes to the DOM. */
  // 'Provider' helps connect react to redux
