import React, { Component } from "react";
// import Button from "antd/lib/button";
// import "antd/dist/antd.css";
// import "antd/lib/button/style/css";
// import Login from './pages/login';
//antui+hasura backend auth and user list"

class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.auth.logout();
  }
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    console.log('isAuthenticated----->');
    console.log(isAuthenticated());
    return (
      <div>
        {isAuthenticated() && (
          <Button type="primary" onClick={() => this.logout()}>
            logout
          </Button>
        )}
        {!isAuthenticated() && (
          <Button type="primary" onClick={() => this.login()}>
            Log in
          </Button>
        )}
      </div>
    );
  }
}

export default App;
