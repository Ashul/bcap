import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThankYou extends Component {
  render() {
    return (
      <div className="home">
        <div className="features-area in-section secti on-padding-md bg-shape-contact2 darken-overlay">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12 jt-heading in-head">
							<h3 className="jt-main-head">Thank You</h3>
							<div className="jt-sep"></div>
							<h4 className="sub-heading" >Our support team will contact you soon</h4>
              <p ><Link to="/" className="btn btn-primary">Home</Link></p>

              </div>
	
            </div>
          </div>
          </div>

      </div>
    );
  }
}

export default ThankYou;
