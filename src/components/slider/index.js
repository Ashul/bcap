import React, { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import '../slider/slider.css'
import classNames from 'classnames';

class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);
    
    // this.IMAGE_PARTS = 10;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 8000;
    
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false, };
  }
  
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  
  render() {
    const { activeSlide, prevSlide, sliderReady, } = this.state;
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <div className="slider__slides">
          {this.props.slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              key={slide.city}
            >
            
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{slide.country || slide.city || slide.city2}</h3>
                <h2 className="slider__slide-heading">
                  {slide.city.split('').map(l => <span key={l}>{l}</span>)}
                 <span className="space1"> {slide.city2.split('').map(l => <span key={l}>{l}</span>)} </span>

                </h2>
                <p className="slider__slide-subheading text">{slide.text}</p>

                <Link to={slide.readLink}><p className="slider__slide-readmore">{slide.read}</p></Link>
              </div>
              <div className="slider__slide-parts">
                {/* {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => ( */}
                  {/* <div className="slider__slide-part"> */}
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                  {/* </div> */}
                {/* ))} */}
              </div>
              </div>
          ))}

        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}



export default CitiesSlider;
// ReactDOM.render(, document.querySelector('#app'));
