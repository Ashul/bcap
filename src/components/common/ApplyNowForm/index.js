import React, { Component } from 'react';
import { applyOnline } from '../../../storeManager/userAuthentication/services';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Loader from '../../loader';
// import ErrorCode from '../../common/Error';
import './style.css'


class ApplyNowForm extends Component {
  state = {
    render: true,
    errCode: false,
    name: '',
    email: '',
    mobile: '',
    message: '',
    amountReq: '',
    reqFor: '',
    disable:true,
    errormessage: '',
    errorName: '',
    errorEmail: '',
    errorMobile: '',
    errorAmountReq: '',
    errorReqFor: '',
    errorMessage: '',


};

  componentDidMount() {
    // this.getLookUpFormServer();
  }



  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "name") {
    let name = val;
      name = name.trim();
      if (!name) {
      err = 'This field is required';
      }
      this.setState({errorName: err, errormessage: ''});

    }
    if (nam === "email") {
      if (!val) {
        err = 'This field is required';
      }
      this.setState({errorEmail: err, errormessage: ''});
    }
    if (nam === "mobile") {
      if (!val) {
        err = 'This field is required';
      } else if (!/^\d{10}$/.test(val) || val.charAt(0) < 6) {
        err = 'Not a valid Phone number';
      }
      this.setState({errorPhone: err, errormessage: ''});
    }
    if (nam === "amountReq") {
      if (!val) {
        err = 'This field is required';
      }
      this.setState({errorAmountReq: err, errormessage: ''});
    }
    if (nam === "reqFor") {
      if (!val) {
        err = 'This field is required';
      }
      this.setState({errorReqFor: err, errormessage: ''});
    }
    this.setState({ [nam]: val });
  }

  handleSubmit = async (event) => {
    const { name, email, 
      mobile, amountReq, reqFor } = this.state;
    const { history } = this.props;
    event.preventDefault();
    const { applyOnline } = this.props;
    const payload = {
      name, email,
      mobile, amountReq, reqFor
    }
    if (!name || !email || !mobile || !amountReq || !reqFor) {
      this.setState({ errormessage: 'Form is not valid' });
    } else {
      this.setState({render:false})
      try {
        const response = await applyOnline(payload)
        const responseObj = response && response.data
        if (responseObj && responseObj) {
          this.setState({ render: true });
          history.push('/thankyou')
        } else {
          this.setState({
            render: true, errormessage: 'Oops! Something went wrong'
          })
  
        }
      }
      catch (e) {
        this.setState({
          render: true, errormessage: 'Oops! Something went wrong'
        })
      }
    }


  }

  render() {
    const { render, errorName, errorEmail,
      errorMobile,  errorAmountReq, errorReqFor, 
     errormessage } = this.state;
   
    return (
      <div className="applyNow" id="applyNow">
			    	<div className="container">
            {!render ? <Loader /> : 

            <div className="row features-wrapper d-flex justify-content-center">

              <form  onSubmit={this.handleSubmit}>
                <div className="dis-f">
                <div className="col-lg-6 col-md-12 col-12 box1">

                  <h2>Personal Information</h2>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      onChange={this.myChangeHandler}
                    />
                    <small className="form-text errorM">{errorName}</small>
                  </div>
                  

                 

                    <div className="form-group">
                <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.myChangeHandler}
                      />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    <small className="form-text errorM">{errorEmail}</small>

                  </div>
                  
                  <div className="form-group">
                <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                        id="mobile"
                        maxLength='10'
                      placeholder="Enter Phone No"
                      onChange={this.myChangeHandler}
                    />
                    <small className="form-text errorM">{errorMobile}</small>

                  </div>
                   

                  </div>
                  <div className="col-lg-6 col-md-12 col-12 box2">
                    <h2>Additional Details</h2>
                    
                    <div className="form-group">
                <label htmlFor="name">Amount required</label>
                    <input
                      type="text"
                      name="amountReq"
                      className="form-control"
                      id="amountReq"
                      placeholder="Amount required"
                      onChange={this.myChangeHandler}
                    />
                <small className="form-text errorM">{errorAmountReq}</small>

                      </div>
                      

                      <div className="form-group">
                <label htmlFor="name">Loan required for</label>
                    <input
                      type="text"
                      name="reqFor"
                      className="form-control"
                      id="reqFor"
                      placeholder="Loan required for"
                      onChange={this.myChangeHandler}
                    />
                <small className="form-text errorM">{errorReqFor}</small>

                    </div>

                      
                </div>
                </div>
      <p className="errorM2">{errormessage}</p>

                <p>
                <input className="btn submit-button" type="submit" value="Submit" />
                </p>
      </form>
         
              </div>
            }
          </div>
          </div>

    );
  }
}

const mapDispatchToProps = {
  applyOnline, 
}

export default connect(null, mapDispatchToProps)(withRouter(ApplyNowForm));
