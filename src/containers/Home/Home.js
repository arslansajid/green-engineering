import React, { Component } from 'react';
import './Home.css';
import style from './Home.css';
// import { Button } from "reactstrap";
import ImageGallery from 'react-image-gallery';

// import Select from 'react-select';
// import 'react-select/dist/react-select.css'

const images = [
  {
    original: require('../../assets/Images/1.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/1.jpg',
  },
  {
    original: require('../../assets/Images/2.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/2.jpg',
  },
  {
    original: require('../../assets/Images/3.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/3.jpg',
  },
  {
    original: require('../../assets/Images/4.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/4.jpg',
  },
  {
    original: require('../../assets/Images/5.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/5.jpg',
  },
  {
    original: require('../../assets/Images/6.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/5.jpg',
  },
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            selectedOption: null
        }
    }

    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
    }

    render() {
      return (
        <div className="home-page">
          <div className="banner-section mb-5">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              showThumbnails={false}
              showNav={false}
              autoPlay={true}
              slideDuration={800}
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col">
                <div className="px-5">

                  <h3 className="heading">
                    About Green-Engineering
                  </h3>
                
                  <p className="my-3">Green Engineering was established in 2014 as a Design and Supervision and Execution firm. Our moto consists of 3 E’s. i.e. Efficiency, Economy and Elegance.  The green engineering has evolved from a very small scale firm to an international firm toady with its head office in <i>Lahore, Pakistan and regional offices in Riyadh, KSA and Canada.</i> </p>
                  
                  <p className="my-3">The Basic motive behind the establishment of Green Engineering is to go for sustainable growth in Infrastructure and modern development without compromising on the quality and Natural Environment.</p>
                  
                  <p className="my-3">We are involved in the design, supervision and execution of Infrastructure Projects around the world. We have a dedicated and well qualified team of <b> Civil, Electrical, Mechanical, Telecom Engineers and Environmental Engineers.</b> </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}