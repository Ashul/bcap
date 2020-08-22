import React, { Component } from 'react';
import icon1 from '../../../assets/images/icons/paper-plane-white.png'
import logo from '../../../assets/images/logo/logo1.jpg'; // Tell webpack this JS file uses this image
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (

      <footer className="footer">
        <div className="footer-inner">
  
          <div className="footer-widgets-area ">
            <div className="container">
              <div className="row widgets footer-widgets">
  
                <div className="col-lg-3 col-md-6">
                  <div className="single-widget widget-info">
                    <div className="logo">
                    <img src={logo}/>                     
                    </div>
                    <p>Birla Capital is a finance provider Company that produces various investment options to people.</p>
                    {/* <ul className="footer-socialicons">
                      <li><Link to="#"><i className="zmdi zmdi-facebook"></i></Link></li>
                      <li><Link to="#"><i className="zmdi zmdi-twitter"></i></Link></li>
                      <li><Link to="#"><i className="zmdi zmdi-google-plus"></i></Link></li>
                      <li><Link to="#"><i className="zmdi zmdi-instagram"></i></Link></li>
                    </ul> */}
                  </div>
                </div>
  
                <div className="col-lg-2 col-md-6">
                  <div className="single-widget widget-links">
                    <h4 className="widget-title">
                      <span>Others</span>
                    </h4>
                    <ul>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/apply-now">Apply online</Link></li>
                      <li><Link to="/check-status">Check Status</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
  
                <div className="col-lg-2 col-md-6">
                  <div className="single-widget widget-links">
                    <h4 className="widget-title">
                      <span>Legal</span>
                    </h4>
                    <ul>
                      <li><Link to="/terms">Terms & Conditions</Link></li>
                      <li><Link to="/privacy">Privacy</Link></li>
                      <li><Link to="/disclaimer">Disclaimer</Link></li>
                    </ul>
                  </div>
                </div>
  
                <div className="col-lg-4 col-md-6">
                  <div className="single-widget widget-newsletter">
                    <h4 className="widget-title">
                      <span>Newsletter</span>
                    </h4>
                    <p>Sign up below to get our daily news updates and newsletter by giving your E-mail.</p>
                    <form action="#" className="widget-newsletter-form">
                      <input type="text" placeholder="Your email..."/>
                      <button type="submit"><img src={icon1} alt="send"/></button>
                    </form>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
         <div className="footer-copyright-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <p className="copyright-text">Copyright 2020 &copy; <Link to="#">Birla Capital</Link>, All Right
                    Reserved</p>
                </div>
              </div>
            </div>
          </div>
  
        </div>
  
      </footer>
      )
  }
}
export default Footer;