import React, { Component } from 'react';
import './dashboard.css';
//import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import Contact from '../../Contact/index';
import logo from '../../../assets/images/logo/logo1.jpg';
import RegisterUser from '../Register/Register';
import EnquiryFrom from '../EnquiryForm/EnquiryForm';
// import DashboardPage from './DashboardPages';


class Dashboard extends Component{
        constructor(props){
            super(props)
            this.sidebarHandle = this.sidebarHandle.bind(this);
            this.state = {
              // dashboard: true,
              registeruser: true,
              enqueryfrom: false,
              activeItem: 'registeruser'
            }
        }
  
  componentDidMount() {
    const auth = sessionStorage.getItem('dashb')
    if (!auth) {
      this.props.history.push("\admin")
    }

  }
  logout = () => {
  sessionStorage.removeItem('dashb');
  this.props.history.push("\admin")

  }
        sidebarHandle(e){
          this.setState({
            activeItem: e.currentTarget.dataset.id,
          })
            //alert(e.currentTarget.dataset.id)
            // push this.props.history.push('\Contact')
              switch (e.currentTarget.dataset.id) {
                case "registeruser":
                  this.setState({
                    registeruser:true,
                     enqueryfrom:false
                    });
                  break;
                case "enqueryfrom":
                  this.setState({
                    registeruser:false,
                    enqueryfrom:true
                  });
                  break;
                default:
              }
        }
    render()
    {
      const {  dashboard, registeruser,enqueryfrom} = this.state;

        return(
    <div className="wrapper_dashbo ard">
        <ul className="navbar-nav bg-gradient-primary side bar navbar-dark accordion">
            {/* <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
            </div> */}
            <div className="sidebar-brand-text mx-3 mt-3">
            <img src={logo} alt="logo"/>
            </div>
        <hr className="sidebar-divider"/>
       <div className="left_nav align-right">
           {/*<Link className="nav-link active" to="{`${match.url}/dashboard-page">Dashboard</Link>
           <Link className="nav-link" to="{`${match.url}/register-user">Register User</Link>
           <Link className="nav-link" to="{`${match.url}/enquery-from">Enquery Form</Link>*/}
       {/* <li className={this.state.activeItem === 'dashboard' ? 'active' : ''} onClick= {this.sidebarHandle} data-id="dashboard">
            <a className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
        </li> */}
                <ul>
        <li className={this.state.activeItem === 'registeruser' ? 'active' : ''} onClick= {this.sidebarHandle} data-id="registeruser">
            <a className="nav-link">
            <span>Applied Online</span></a>
        </li>
        <li className={this.state.activeItem === 'enqueryfrom' ? 'active' : ''} onClick= {this.sidebarHandle} data-id="enqueryfrom">
            <a className="nav-link">
            <span>Enquiry Form</span></a>
                  </li>
                  <li onClick= {this.logout} data-id="enqueryfrom">
            <a className="nav-link">
            <span>Logout</span></a>
        </li>
        </ul>
       </div>
        </ul>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            {/* <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small"
               placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
          <div className="topbar-divider d-none d-sm-block"></div>
            </nav> */}
            <div className="container-fluid over-s">
          {/*  <Switch>
                <Route path="{`${match.path}/dashboard-page" component={DashboardPage}/>
                <Route path="{`${match.path}/register-user" component={RegisterUser}/>
                <Route path="{`${match.path}/enquery-from" component={EnquiryFrom}/>
              </Switch>*/}
               {/* {dashboard && <DashboardPage/>} */}
               {registeruser && <RegisterUser/>}
               {enqueryfrom && <EnquiryFrom />}

            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Dashboard;
