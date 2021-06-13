import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthProvider, AuthConsumer } from './AuthContext';
import HeaderBar from './HeaderBar';
import Landing from '../pages/landing';
import About from '../pages/about';
import Intro from '../protect/intro';
import Dashboard from '../protect/dashboard';

const RoutingDecision = () => {

  return (
    <Router>
      <AuthProvider>
        <HeaderBar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/landing" component={Landing} />
          <Route path="/contact"
            render={() => <h1>Contact Us</h1>} />
          <Route exact path="/" component={Landing} />
          <AuthConsumer>
            {({ isAuthenticated }) => (
              <div>
                <Route
                  exact path="/dashboard"
                  render={props =>
                    isAuthenticated ? <Dashboard /> : <Redirect to="/" />
                  }
                />
                <Route
                  exact path="/intro"
                  render={props =>
                    isAuthenticated ? <Intro /> : <Redirect to="/" />
                  }
                />
              </div>
            )}
          </AuthConsumer>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default RoutingDecision;
