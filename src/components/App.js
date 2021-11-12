import React, { Component } from 'react'
//import Grid  from './Grid';
import Home from './Home';
//import './App.css'
// import Signup from './Signup'
// import {AuthProvider} from "../contexts/AuthContext"
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import Dashboard from './Dashboard'
// import Login from './Login'
// import PrivateRoute from "./PrivateRoute"
// import ForgotPassword from "./ForgotPassword"
// import BlockChain from './BlockChain'
// import {Link} from 'react-router-dom'
// import Home from './Home'
// import Footer from './Footer'
// import RainfallPred from './RainfallPred';

class App extends Component {

  

  render() {
    
    return (
      <> 
                        
            <Home></Home>
            
            {/* <Router>
                  <div class="jumbotron" class="text-center">
                      <h1 class="display-4">De-Fi Funding Application</h1>
                      <p class="lead">Invest Your Coins And Earn Rewards By Unstaking !!!</p>
                      <hr class="my-4" />
                      <p>An initiative to help severe drought prones areas by using your invested funds to build water supply projects.</p>
                      <p class="lead">                        
                          <a class="btn btn-primary btn-lg mr-3" role="button"><Link to="/login" class="text-dark">Admin</Link></a>
                          <a class="btn btn-primary btn-lg ml-3" role="button"><Link to="/blockchain" class="text-dark">Investor</Link></a>
                      </p>
                      
                  </div>
                  <AuthProvider>
                        <Switch>
                          <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
                          <Route path="/signup" component={Signup}></Route>
                          <Route path="/blockchain" component={BlockChain}></Route>
                          <Route path="/login" component={Login}></Route>
                          <Route path="/forgotpassword" component={ForgotPassword}></Route>
                         
                        </Switch>           
                  </AuthProvider> 
            </Router>
             */}
      </>
    );
  }
}

export default App;
