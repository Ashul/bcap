import React, { Component } from 'react';
import { withRouter } from "react-router";
import './login.css';

 class Login extends Component {
   constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };
  //  this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }
   componentDidMount() {
     const auth = sessionStorage.getItem('dashb') || '';
     if (auth) {
       this.props.history.push("\dashboard")
     }
   }
   onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    //this.setState({ error: false });

    if (!(username === 'admin' && password === 'admin@123#')) {
      return this.setState({ error: "That username and password is incorrect. Try again!" });
    }
    sessionStorage.setItem('dashb', true)
    this.setState({loggedIn: true});
    this.props.history.push('\dashboard')
  }
    
  
    render(){
      const { error } = this.state;
        return(
        <div className="contaner">
        <div className="login">
          <h3>Login With</h3>
          <p className="message">{error}</p>
            <form error={error} onSubmit={this.onSubmit}>
              <input type="text" className="form-control"
               placeholder="User name" name="username" value={this.state.username} 
               onChange={e => this.setState({username: e.target.value })}/>
              <input type="password" className="form-control"
               placeholder="Password" name="password" value={this.state.password} 
               onChange={e => this.setState({password: e.target.value })}/>
              <button className="btn btn-primary" type="submit">Login</button>
            </form>
            </div>
        </div>
        )
    }
}

export default withRouter(Login)   