import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../assets/images/other/icon1.jpg';

import WhatWeOffer from './WhatWeOffer';
import Services from './Services';
// import Satisfaction from './Satisfaction';
// import Testimonials from './Testimonials'
import Banner from './Banner';
import StateWiseData from './StatewiseData';
import HContact from '../HomeContact';
import './style.css';
import ApplyNowForm from '../../components/common/ApplyNowForm';

class Index extends Component {
  render() {
    return (
      <div id="home">
				<Banner />
				<Services />
				<div className="features-area in-section bg-shape" style={{ position: "relative", minHeight:'300px', paddingTop:'50px'}}>

				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12 jt-heading">
							<h3 className="jt-main-head">Apply Now</h3>
							<div className="jt-sep"></div>
							<h4 className="sub-heading" >We provide 24/7 customer care service to solve your queries and give complete satisfaction</h4>
							</div>
</div>
					</div>
					<ApplyNowForm />

          </div>
				<WhatWeOffer />

				{/* <HContact/> */}
      </div>
    );
  }
}

export default Index;
