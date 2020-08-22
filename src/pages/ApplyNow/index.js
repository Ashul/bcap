import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css'
import ApplyNowForm from '../../components/common/ApplyNowForm';


class ApplyNow extends Component {
  state = {
    render: true,
    errCode: false,
};

  render() {
  
    return (
      <div className="applyNow" id="applyNow">
        <div className="features-area in-section sec tion-padding-md bg-shape-apply darken-overlay">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12 jt-heading in-head">
							<h3 className="jt-main-head">Apply Now</h3>
							<div className="jt-sep"></div>
							<h4 className="sub-heading" >To get your loans at affordable rates. Apply Now </h4>
							</div>
	
            </div>
          </div>
        </div>
        <ApplyNowForm/>
        </div>

    );
  }
}


export default (withRouter(ApplyNow));
