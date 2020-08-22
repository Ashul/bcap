import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const MobileNav = (props) => {
  
  const { toggle, isOpen } = props;
  const style = {
    display: 'block',
  };


  return (
    <React.Fragment>
      <section
        onClick={() => toggle()}
        data-toggle="collapse"
        className="ham2"
        data-target="#navbarSupportedContent"
      >
      <div className="ham">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
      </div>
        </section>
    <div
      className={isOpen ? 'navbar-collapse collapse mobile visible custom' : 'navbar-collapse collapse mobile'}
      id="navbarSupportedContent"
    >
      <div className="hm-inner">
        
        <div className="link-section-top">
                <ul>
                  <li onClick={() => toggle()} ><Link to="/">HOME</Link>	</li>
                  <li onClick={() => toggle()} ><Link to="/about">ABOUT</Link></li>
                 
                  <li onClick={() => toggle()}><Link to="/apply-now">APPLY ONLINE</Link></li>
                  <li onClick={() => toggle()}><Link to="/check-status">CHECK STATUS</Link></li>
  
                  <li onClick={() => toggle()}><Link to="/contact">CONTACT</Link></li>
                </ul>

        </div>
      </div>
      </div>
      </React.Fragment>
  );
};

export default MobileNav;
