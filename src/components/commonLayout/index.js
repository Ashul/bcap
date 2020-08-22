import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/custom.css';
// import '../../assets/css/plugins.css'


class CommonLayout extends React.PureComponent {
    state = {
      isloading: true,
    }

    // componentDidMount = () => {
    //   const { location } = this.props;
    //   const pathData = location.pathname.split('/');
    //   // this.manageRedirection(pathData);
    // }
    // componentDidUpdate(prevProps) {
    //   const { location } = this.props;
    //   if (location.pathname !== prevProps.location.pathname) {
    //     window.scrollTo(0, 0);
    //   }
    // }
  
    // manageRedirection = (pathData) => {
    // };


  render() {
    const {component: Component, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={matchProps => (
                  <React.Fragment>
                    	<div id="wrapper" className="wrapper">
                    <Header/>
                       <Component
                           {...rest}
                           {...matchProps}
                    />
                      <Footer />
                      </div>
                   </React.Fragment>
                )}
            />
        )
    }
}
export default CommonLayout;
