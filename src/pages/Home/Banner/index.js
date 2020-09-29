import React, { Component } from 'react';
import CitiesSlider from '../../../components/slider';
import banner1 from '../../../assets/images/bg/bg.jpg'
import banner2 from '../../../assets/images/bg/banner_04.jpg'
import banner3 from '../../../assets/images/bg/bg2.jpg'

const slides = [
  {
    city: 'Personal',
    city2: 'Loan',
    country: 'For your Personal Investments ',
    text: 'Personal loans starting at 10.75%',
    read: 'APPLY NOW',
    readLink:'/apply-now',
    img: banner1,
  },
  {
    city: 'Home',
    city2:'Loan',
    country: 'For Your Dream Home',
    text: 'Home loans starting at 8.75%',
    read: 'APPLY NOW',
    readLink:'/apply-now',

    img: banner3,

  },{
    city: ' Business',
    city2: 'Loan',
    country: 'To set your own Business ',
    text: 'Business loans starting at 8.75%',
    read: 'APPLY NOW',
    readLink:'/apply-now',
    img: banner2,
  },
  
];
class Banner extends Component {
  render() {
    return (
      <React.Fragment>
      {/* <div id="app"></div> */}
        <CitiesSlider slides={slides} />
      </React.Fragment>
    );
  }
}

export default Banner;
