import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "Something went wrong"
  };

  componentDidCatch = (error, info) => {
    console.log('err', error, info)
    this.setState({hasError: true});
  };
  render() {
    const { hasError, errorMessage} = this.state;
    if(hasError){
      return <h1>{errorMessage}</h1>;
    }else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;