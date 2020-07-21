import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

// For styling
import './sass/main.scss'

// component+containers
import Layout from './hocs/Layout'
import Home from  './containers/Home'
import About from "./containers/About";
import Contact from "./containers/Contact";
import ListingDetail from "./containers/ListingDetail";
import Listings from "./containers/Listings";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/privateRoute"


const App = () => (    
      <Router>
        <Layout>
          {/* Switch makes it such that only one route get displayed */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* Need to be authenticated in order to access the route */}
            <PrivateRoute exact path="/listings/:id" component={ListingDetail} /> 
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
)


export default App;
