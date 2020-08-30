import React, { Component } from 'react';
import './Operations.css';
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: require('../../assets/Images/soil.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/1.jpg',
  },
  {
    original: require('../../assets/Images/foundation.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/2.jpg',
  },
  {
    original: require('../../assets/Images/Ft.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/3.jpg',
  },
  {
    original: require('../../assets/Images/soiltwo.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/4.jpg',
  },
  {
    original: require('../../assets/Images/Geo.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/5.jpg',
  },
  {
    original: require('../../assets/Images/pile.jpg'),
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
      <div className="geo-services">
        
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
                <h3 className="heading my-3">
                  Geotechnical Services
                </h3>

                <hr />

                <p className="my-3">
                We have a team of Professional Geotechnical Engineers with vast design and execution experience.We provide our services in the following categories: 
                </p>

     
                <ul>
                  <li>Soil exploration</li>
                  <li>Soil Investigation </li>
                  <li>Shallow/Deep Foundation design </li>
                  <li>Earth Improvement/ Soil Stabilization </li>
                  <li>Earth Retaining Structures</li>
                
                  </ul>
          

         
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}