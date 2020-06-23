import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom'

// Alerts
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// components
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'

// Redux
import { Provider } from 'react-redux'
import store from '../store'


// Alerts Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}
class App extends Component {
    render(){
        return (
          <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Fragment>
                <Header />
                <Alerts />
                <div className="container">
                  <Dashboard />
                </div>
              </Fragment>
            </AlertProvider>
          </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'))





  /* 'Fragments' let you group a list of children without adding extra
            nodes to the DOM. */
  // 'Provider' helps connect react to redux
