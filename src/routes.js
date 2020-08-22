import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CommonLayout  from './components/commonLayout';
import CheckStatus from './pages/CheckStatus'
// import PageNotFound from '@Components/common/PageNotFound';
// import connect from 'react-redux/lib/connect/connect';
import Index from '../src/pages/Home';
import About from '../src/pages/About';
import ApplyNow from '../src/pages/ApplyNow';
import Contact from '../src/pages/Contact';
import ThankYou from './pages/ThankYou';
import PageNotFound from './pages/PageNotFound';
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Login from "./pages/Admin/Login/Login";
import Dashboard from './pages/Admin/Dashboard/Dashboard';
// import RegisterUser from './pages/Admin/Register/Register';
// import EnquiryForm from './pages/Admin/EnquiryForm/EnquiryForm'


class AppRoutes extends React.Component {

  render() {
    return (
      <BrowserRouter>
        {/* <WrapperBoundary> */}
        <Switch>
          <CommonLayout exact path="/" component={Index} />
          <CommonLayout exact path="/about" component={About} />
          <CommonLayout exact path="/check-status" component={CheckStatus} />
          <CommonLayout exact path="/apply-now" component={ApplyNow} />
          <CommonLayout exact path="/contact" component={Contact} />
          <CommonLayout exact path="/terms" component={Terms} />
          <CommonLayout exact path="/privacy" component={Privacy} />
          <CommonLayout exact path="/disclaimer" component={Disclaimer} />
          <CommonLayout exact path="/thankyou" component={ThankYou} />
          <Route exact path="/admin" component={Login}/>
          <Route exact path ="/dashboard" component ={Dashboard}/>
          {/* <Route exact path="/register-user" component={RegisterUser}/> */}
          {/* <Route exact path="/enqueryfrom" component={EnquiryForm}/> */}
          <Route component={PageNotFound} />

          </Switch>
        {/* </WrapperBoundary> */}
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
