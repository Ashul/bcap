import React, { Component } from 'react';
import { checkStatus } from '../../storeManager/userAuthentication/services';

import { connect } from "react-redux";
import Loader from '../../components/loader';

import './style.css'
import ErrorCode from '../../components/common/Error';

class CheckStatus extends Component {
  state = {
    render: true,
    errCode: false,
    phone: '',
    disable:true,
    errormessage: '',
    errorPhone: '',
    showPhoneBox: true,
    data: {},

};


  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "phone") {
    let name = val;
      name = name.trim();
      if (!name) {
      err = 'This field is required';
      }
      this.setState({errorName: err, errormessage: ''});
    }
    this.setState({ [nam]: val });
  }

  handleSubmit = async(event) => {
    const { phone } = this.state;
    event.preventDefault();
    const { checkStatus } = this.props;
    if (!phone) {
      this.setState({ errormessage: 'Form is not valid' });
    } else {
      this.setState({render:false})
      try {
        const response = await checkStatus(phone)
        const responseObj = response && response.data
        if (responseObj && responseObj) {
          this.setState({ render: true, showPhoneBox: false, data: responseObj });
        } else {
          this.setState({ render: true, errormessage: 'Phone no does not exists' })
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
    const { render, errorPhone, showPhoneBox, data, errCode, errormessage } = this.state;
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const M = "ABCDEFGHIJK0123456789LMNOPQRSTUVWXYZ";
    const D = "123456789ABCDEFGHIJK0123456789LMNOPQRSTUVWXYZ";

    const abc = Array.apply(null, {length: 5}).map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
    const abcd = Array.apply(null, {length: 5}).map(function() { return M.charAt(Math.floor(Math.random() * s.length)); }).join('');
    const abcc = Array.apply(null, {length: 5}).map(function() { return D.charAt(Math.floor(Math.random() * s.length)); }).join('');

    const documentId = `BCAP/${abc}`;
    const applicationId = `BCAP/${abcd}/${abcc}`
    const ndate = data && data.created
    const date = new Date(ndate).toDateString()
    if (errCode) {
      return <ErrorCode />
    }
    return (
      <div className="home">
        
<div className="features-area in-section section-padd ing-md bg-shape-status dar ken-overlay">
				<div className="container">
        <div className="features-area in-section app-in" >
          <div className="container">
          <div className="row features-wrapper justify-content-center ">
              <div className="col-lg-12 col-md-12 col-12 jt-heading in-head bg-white">
							<h3 className="jt-main-head" style={{marginTop:"40px"}}>Check Your Approval Status</h3>
							<div className="jt-sep"></div>
                <h4 className="sub-heading" style={{textAlign:"left"}}>
                      It is easy to check your application status online, just you have to enter your mobile number in the below box to track your application status online.
               </h4>        
                {/* <h4 className="sub-heading" style={{ textAlign: "left" }}>
                      You can track the application status anytime from your phone or any device, just you have to provide your mobile number and every single required information of the application status will be available for you. If you have any doubt about the application status, you can call on our helpline number and solve your doubts. The required and essential information such as your Name, Email, Company Name, Phone Number, and your address will also be displayed in the application status. 
                </h4>
                <h4 className="sub-heading" style={{ textAlign: "left" }}>
                If you want more information about the application status, you can also mail us and we will help you and solve your doubts. The information will be displayed only if you submit your mobile number and no information will be leaked from National Fertilizers. We will display only the necessary information on the application status that is required for your personal knowledge and will not provide any transaction history or transaction details on the application status. The information will be the same as the information that had been provided by you during the registration process. So you should provide us the original details as it will reflect on the application status and it will also be used in the future.                </h4>
                  */}
                  {/* </div>
            					 <div className="features-wrapper "> */}

              {showPhoneBox ? <form onSubmit={this.handleSubmit}>
                <div className="form-row check-top">
                  <div className="form-group">
                    {/* <h1>Check Your Approval Status </h1>
							      <div className="jt-sep"></div> */}
                    
                    <label htmlFor="phone">Enter your register mobile no. and check your status </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      maxLength="10"
                      placeholder="Enter phone"
                      onChange={this.myChangeHandler}
                    />
                    <input class="btn btn-primary submit-button2 f-left" type="submit" value="Submit" />

                    <small class="form-text errorM">{errorPhone}</small>
                    <small class="form-text errorM">{errormessage}</small>
                      {!render ? <Loader /> : ''}
                  </div>
                </div>
              </form> : ''}
              
              {data && data._id? (
                <React.Fragment>
                        <div className="app-d">
                        <a href="/check-status" class="btn btn-primary " style={{marginBottom:'10px', position:'absolute', color:'#fff', right:'20px'}}>Back To Search</a>

                        <div className="tab-h">
                            <h4 >Approval status	- Applied</h4>
                              <div className="jt-sep"></div> 
                              </div>
                          <table className="table table-striped">
                           
  <tbody>
    <tr>
      <td>Apply Date	</td>
      <td>{date}</td>
      <td >Approval status		</td>
      <td>Applied</td>
                          </tr>
                          
  <tr>
      <td>Application No.		</td>
      <td>{applicationId}</td>
      <td >Document No.			</td>
                                <td>{documentId}</td>
                          </tr>
                          
                          <tr>
      <td>Name		</td>
      <td>{data.name}</td>
      <td >Status				</td>
      <td>@mdo</td>
                          </tr>
                          
                          <tr>
      <td>Email		</td>
      <td>{data.email}</td>
      <td >Mobile			</td>
                                <td>{data.mobile}</td>
                          </tr>
                          
                          <tr>
      <td>Amount Required		</td>
      <td>{data.amountReq}</td>
      <td >Required For			</td>
                                <td>{data.reqFor}</td>
  </tr>
                            </tbody>
                            </table>


                    </div>
                  </React.Fragment>
              )
                : null}
            </div>
          </div>
        </div>
            </div>
            </div>
            </div>
          </div>

    );
  }
}
const mapDispatchToProps = {
  checkStatus, 
}

export default connect(null, mapDispatchToProps)(CheckStatus);
