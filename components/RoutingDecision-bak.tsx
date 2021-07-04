import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import React, { useContext } from 'react';
import ProtectedRoute123 from './ProtectedRoute';
import { AuthProvider } from './AuthContext';
import HeaderBar from './HeaderBar';
import Landing from '../pages/landing';
import About from '../pages/about';
import Intro123 from '../protect/intro';

const RoutingDecision = () => {
  // const auth = useContext(AuthContext);

  return (
    <Router>
      {/* <ProtectedRoute123 excat path="/landing" component={Landing} /> */}
      <AuthProvider>
        <HeaderBar />
        {/* <Link to="/intro">Intro</Link>{' '}
        <Link to={{pathname: '/about'}}>About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '} */}

        {/* <Switch> */}
        {/* <AuthConsumer>
            {({ isAuth }) => (
              <Route
                exact path="/"
                render={() => {
                    return (
                      isAuth ?
                      <Redirect to="/intro" /> :
                      <Redirect to="/about" /> 
                    )
                }}
              />
            )}

          </AuthConsumer> */}

        {/* <Route
            exact path="/"
            render={() => {
                return (
                  auth.isAuthenticated ?
                  <Redirect to="/intro" /> :
                  <Redirect to="/about" /> 
                )
            }}
          /> */}

        {/* <ProtectedRoute path="/intro" component={Intro123} />
          <Route path="/about" component={About} /> */}
        {/* <Route
            path="/contact"
            render={() => <h1>Contact Us</h1>} /> */}
        {/* <Route path="/blog" children={({match}) => (
            <li className={match ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </li>)} /> */}
        {/* <Route render={() => <h1>Page not found</h1>} /> */}
        {/* </Switch> */}
        <Switch>
          <ProtectedRoute123 path="/landing" component={Landing} />
          <Route path="/about" component={About} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default RoutingDecision;
