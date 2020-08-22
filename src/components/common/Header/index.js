import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo1.jpg'; // Tell webpack this JS file uses this image
import MobileNav from '../hamburger';
class Header extends Component {

  state = {
    render: true,
    isOpen: false,
    isNav: false,
  };


  toggle = (type) => {
    const { isOpen, isNav } = this.state;
    const { history, location } = this.props;
    if (type === 'mobileNav') {
      this.setState({
        isOpen: !isOpen,
      });
    } else {
      if (!isNav) {
        history.push(location.pathname);
      } else {
        history.goBack();
      }
      this.setState({
        isNav: !isNav,
      });
    }
  }

  
  render() {
    const { isOpen } = this.state;
    return (
      // <!-- Header -->
      <header className="header">
  
        {/* <!-- Header Top Area --> */}
        <div className="header-toparea">
          <div className="contai ner">
            <div className="row justify-content-betwween">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ul className="header-topcontact">
                  <li><i className="zmdi zmdi-phone"></i> PHONE : <a href="tel:7003 194 713">7003 194 713</a></li>
                  <li><i className="zmdi zmdi-email"></i> E-MAIL : <a href="mailto:info@birlacap.in">info@birlacap.in</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ul className="header-toplinks">
                  <li><Link to="/check-status">CHECK APPLICATION STATUS</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--// Header Top Area -->
  
        <!-- Header Bottom Area --> */}
        <div className="header-bottomarea">
          <div className="contain er">
            <div className="header-bottom">
  
              {/* <!-- Header Logo --> */}
              <Link to="/" className="header-logo" >
                {/* National Fertilizer */}
                  <img src={logo}/>
              </Link>
              {/* <!--// Header Logo -->
  
              <!-- Main Navigation --> */}
              <nav className="in-navigation">
                <ul>
                  <li ><Link to="/">HOME</Link>	</li>
                  <li ><Link to="/about">ABOUT</Link></li>
                 
                  <li><Link to="/apply-now">APPLY ONLINE</Link></li>
                  <li><Link to="/check-status">CHECK STATUS</Link></li>
  
                  <li><Link to="/contact">CONTACT</Link></li>
                </ul>
              </nav>
              {/* <!--// Main Navigation --> */}
              
  
            </div>
          </div>
        </div>
        {/* <!--// Header Bottom Area --> */}
  
        {/* <!-- Mobile Menu --> */}
        <div className="mobile-menu-wrapper clearfix">
          <div className="container">
            <div className="mobile-menu">
              <MobileNav toggle={() => this.toggle('mobileNav')} isOpen={isOpen} />
            </div>
          </div>
        </div>
  
      </header>
      )
  }
}
export default Header;