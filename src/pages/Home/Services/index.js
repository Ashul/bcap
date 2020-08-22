import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
class Services extends Component {
  render() {
    return (
      <div classNameName="home">
{/* <!-- Services Area --> */}
			<div className="services-area in-section  ser-bg">
				<div className="containe r">
					{/* <div className="row justify-content-center">
						<div className="col-lg-12 col-md-12 col-12 jt-heading">
							<h3 className="jt-main-head">TENDER PACKAGES</h3>
							<div className="jt-sep"></div>
							<h4 className="sub-heading" >Following are the tender packages based on the various caste.</h4>
							</div>
					</div> */}
						<div className="row">
							
              <div class="pricingTable">
                <div>
                  <div class="pricingTable-header">
                    <h3 class="title">Personal Loan</h3>
                  </div>
                <hr/>
									<div className="pricing-content">
                    <p>The personal loan is taken by the clients for their personal utilisation. The personal loan can be instantly approved if the client's cibil score is above 750 points.</p>
								</div>
                       
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                </div>
                

                <div>
                  <div class="pricingTable-header">
                    <h3 class="title">Home Loan</h3>
                  </div>
                <hr/>
									<div className="pricing-content">
                    <p>Usually the home loans has the minimum interest rates compared to the other loans. It also has a long tenure in which you get more time to repay the loan amount.
</p>
								</div>
                       
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                    </div>
                

              <div>
                        <div class="pricingTable-header">
                            <h3 class="title">Two Wheeler Loan</h3>
                </div>
                <hr/>

												<div className="pricing-content">
                    <p>Clients take the Two-wheller loan to buy their dream and here we help our clients to easily get the Two-wheller Loan.

</p>
								</div>
                        
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                </div>
                

                <div>
                        <div class="pricingTable-header">
                            <h3 class="title">Business Loan</h3>
                </div>
                <hr/>
								<div className="pricing-content">
                    <p>Here we offer and help our clients to get all types of loans as they require to us. We prefer to give the business loans to our clients.

</p>
								</div>
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                </div>
                

                
                <div>
                        <div class="pricingTable-header">
                            <h3 class="title">Travel Loan</h3>
                </div>
                <hr/>
								<div className="pricing-content">
                    <p>Now many of the people take the Travel Loan to travel in India and foreign countries. As everyone does not have the enough funds, now the banks also provide these type of loans.

</p>
                    
								</div>
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                </div>



                <div>
                        <div class="pricingTable-header">
                            <h3 class="title">Medical Loan</h3>
                </div>
                <hr/>
								<div className="pricing-content">
                    <p>In the Medical Emergencies, the loan will help you to pay the medical bills.

</p>
								</div>
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                </div>

                
                <div>
                        <div class="pricingTable-header">
                            <h3 class="title">Investment Planning</h3>
                </div>
                <hr/>
								<div className="pricing-content">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

</p>
								</div>
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                </div>


                <div>
                        <div class="pricingTable-header">
                            <h3 class="title">Education Loan</h3>
                </div>
                <hr/>
								<div className="pricing-content">
                    <p>This is the only loan that helps the students that have their age less then 18 years. This loan is generally taken by the students for their higher level studies.

</p>
								</div>
                        <div class="pricingTable-signup">
												<p>
								<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
								</p>	
                        </div>
                </div>

</div>

					</div>
				</div>
			</div>
			{/* <!--// Services Area --> */}
      </div>
    );
  }
}

export default Services;
