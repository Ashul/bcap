import React, { Component } from 'react';
import { userContact } from '../../storeManager/userAuthentication/services';
import { withRouter } from 'react-router-dom';
import Loader from '../../components/loader';
import './style.css'

class HContact extends Component {
  state = {
    render: true,
    errCode: false,
    name: '',
    email: '',
    subject: '',
    message: '',
    disable:true,
    errormessage: '',
    errorName: '',
    errorEmail: '',
    errorSubject: '',
    errorMessage: '',


};

  componentDidMount() {
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
    if (nam === "subject") {
      if (!val) {
        err = 'This field is required';
      }
      this.setState({errorSubject: err, errormessage: ''});

    }
    if (nam === "message") {
      if (!val) {
        err = 'This field is required';
      }
      this.setState({errorMessage: err, errormessage: ''});

    }

    this.setState({ [nam]: val });
  }

  handleSubmit = async(event) => {
    const { name, email, subject, message } = this.state;
    const { history } = this.props;
    event.preventDefault();
    // const { userContact } = this.props;
    const payload = {
    name,
    email,
    subject,
    message,
    }
    if (!name || !email || !subject || !message) {
      this.setState({ errormessage: 'Form is not valid' });
    } else {
      this.setState({render:false})
      try {
        const response = await userContact(payload)
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
    const { render, errorName, errorEmail, errorSubject, errorMessage, errormessage } = this.state;
    
    return (
      <div id="contact" className="cnt">
        <div className="features-area in-section section-padding-md bg-shape-contact darken-overlay">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12 jt-heading">
							<h3 className="jt-main-head">Contact us</h3>
							<div className="jt-sep"></div>
							<h4 className="sub-heading" >We Are Here to Craft Your Brands With Passion and Love</h4>
							</div>
	
            </div>
          </div>
          </div>
          <div className="features-area in-section bg-shape">
				<div className="container">
            <div className="row features-wrapper d-flex justify-content-center">
              <div className="col-lg-6 col-md-12 col-12 c-left">
                <div className="c-box">
                <h2>Address</h2>
                  <p>National Fertilizers Limited, <br/>
                  Corporate Office, A-11. Sector - 24, <br/>
                  Noida, Distt. Gautam Budh Nagar (U.P) <br/>
                  India, Noida 201301
                    </p>
                  <p>
                  <b>Phone</b> : +91 9851294173
                </p>
                  <p><b>Email</b> : info@fertilizerfrenchie.com</p>

                </div>

            </div>
          <div className="col-lg-6 col-md-12 col-12 c-right">
                <h2>Get in touch</h2>
                <form onSubmit={this.handleSubmit}>
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
    <small className="form-text errorM">{errorEmail}</small>

                  </div>
                  
                  <div className="form-group">
                <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="subject"
                      placeholder="Enter subject"
                      onChange={this.myChangeHandler}
                    />
                    <small className="form-text errorM">{errorSubject}</small>

                  </div>
                  
                  <div className="form-group">
                <label htmlFor="name">Message</label>
                    <input
                      type="text"
                      name="message"
                      className="form-control"
                      id="message"
                      placeholder="Enter message"
                      onChange={this.myChangeHandler}
                    />
                <small className="form-text errorM">{errorMessage}</small>

                    </div>
      <p className="errorM2">{errormessage}</p>
      {!render ? <Loader /> : ''}

        <input className="btn btn-primary submit-button" type="submit" value="Submit" />
      </form>

            </div></div>
          </div>
        </div>
        </div>
    );
  }
}


export default (withRouter(HContact));
