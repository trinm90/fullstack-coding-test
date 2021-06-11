import React from 'react';

const defaultLoginData = {
    isAuthenticated: false,
    login: null,
    logout: null
};

const AuthContext = React.createContext(defaultLoginData);

class AuthProvider extends React.Component {
  state = { isAuth: false }

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    setTimeout(() => this.setState({ isAuth: true }), 1000)
  }

  logout() {
    this.setState({ isAuth: false })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
export default AuthContext;
