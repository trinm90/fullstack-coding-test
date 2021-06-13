import React from 'react';
import Firebase from "../components/Firebase";

const defaultLoginData = {
  isAuthenticated: false,
  login: null,
  logout: null
};

const AuthContext = React.createContext(defaultLoginData);

class AuthProvider extends React.Component {
  state = {
    isAuth: false,
    email: "tri.nguyen@naivecat.com",
    password: "asf", // acb909qpm
    user: null
  }

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login = async () => {
    // setTimeout(() => this.setState({ isAuth: true }), 1000)
    await Firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;

        this.setState({
          isAuth: true,
          user: userCredential.user
        });
        // ...
      })
      .catch((error) => {
        this.setState({
          isAuth: false
        });

        // display incorrect email and/or password
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode.toString().concat(errorMessage));
      });
  }

  logout = async () => {
    // this.setState({ isAuth: false })
    Firebase.auth.signOut().then(() => {
      // Sign-out successful.
      this.setState({ isAuth: false })
    }).catch((error) => {
      // An error happened.
    });
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
