import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../assets/images/other/icon1.jpg';
import icon2 from '../../assets/images/about.png';
import Testimonials from '../Home/Testimonials';
import nm from '../../assets/images/other/nm.jpg';
import vft from '../../assets/images/other/vft.jpg';
import sder from '../../assets/images/other/sder.jpg';
import WhatWeOffer from '../Home/WhatWeOffer';

import './style.css'

class About extends Component {
  render() {
    return (
      <div className="home">

{/* <!-- Features Area --> */}
<div className="features-area in-section section-paddin g-md bg-shape-about darken-overlay">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12 jt-heading in-head">
							<h3 className="jt-main-head">About us</h3>
							<div className="jt-sep"></div>
							<h4 className="sub-heading" >Loan financing company that provides funds in a minimum interest rates</h4>
							</div>
	
            </div>
          </div>
				</div>
				<div className="features-area in-section section-padding-md ">
				<div className="container">

					<div className="row features-wrapper">
						<div className="col-lg-8 col-md-6 col-12">
							<div className="in-feature in-feature-small">
								<span className="in-feature-icon">
									<i className="flaticon-lock"></i>
									</span>
									<h4 style={{ fontSize: '20px', marginBottom:'20px' }}>Something about us</h4>
									<div className="box-in">
									<p>We are a loan financing company that provides funds in a minimum interest rates.
										</p>
										<p>Our Mission and Vision is to provide funds to our clients and serve the schemes and facilities to the nation as everyone has the need of the funds.

										</p>
										<p>To serve the facilities and schemes to many people as possible and help people to get funds from the bank at minimum interest rates.

</p>
									<p className="mT20">
										Borrow up to Rs.25 lakh without the need to pledge any collateral. Simply submit your basic documents to avail the money that you need.									</p>
									</div>
									<ul className="ul-style-1">
<li>We provide you a simpler way to get loans. </li>
<li>We are a top leading finance company that provides a lot of services. </li>
<li>We Provide all types of loans with minimum interest rates. </li>
<li>We provide 24/7 services for our clients to give complete satisfaction. </li>
<li>We have a Good Experience of 10 years and our team is well qualified. </li>
<li>Our Customers Care Service helps to solve your queries and give information about the facilities we provide.  </li>


								</ul>
							</div>

							</div>
							<div className="col-lg-4 col-md-6 col-12">
							<img src={icon1}/>

							</div>
							<WhatWeOffer />

						</div>
					</div>
				</div>
				</div>

			
    );
  }
}

export default About;
