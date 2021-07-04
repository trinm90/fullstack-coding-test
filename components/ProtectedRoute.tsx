import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

// const ProtectedRoute123 = ({ component: Component, ...rest }) => (
//   <AuthConsumer>
//     {({ isAuthenticated, login, logout }) => (
//       <Route
//         render={props => 
//            isAuthenticated ? <Component {...props} /> : <Redirect to="/about" />
//         }
//         {...rest}
//       />
//     )}
//   </AuthConsumer>
// );


const ProtectedRoute123 = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuthenticated }) => (
      <Route
        render={props =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
)

export default ProtectedRoute123;
