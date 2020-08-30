import React, { Component } from 'react';
import './Operations.css';
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: require('../../assets/Images/ek.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/1.jpg',
  },
  {
    original: require('../../assets/Images/ekek.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/2.jpg',
  },
  {
    original: require('../../assets/Images/do.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/3.jpg',
  },
  {
    original: require('../../assets/Images/teen.jfif'),
    thumbnail: 'http://www.edb.com.pk/slider/4.jpg',
  },
  {
    original: require('../../assets/Images/char.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/5.jpg',
  },
  {
    original: require('../../assets/Images/panch.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/5.jpg',
  },
]

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="Communication and Transport">
      
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
      <div className="communication-transport">
        
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  {'Communication and Transportation'}
                </h3>

                <hr />

                <p className="my-3">
                We have a team of professional engineers in the field of transportation and Highway engineering.
                </p>

                <p>
                We offer services in the following categories:
                </p>

                <ul>
                <li>Traffic Engineering</li>
                <li>Geometric design</li>
                <li>Highway alignment design </li>
                <li>Estimation</li>
                <li>Road quality testing </li>

                </ul>

               

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}