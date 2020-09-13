import React, { Component } from 'react';
import './Operations.css';
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: require('../../assets/Images/one.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/1.jpg',
  },
  {
    original: require('../../assets/Images/two.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/2.jpg',
  },
  {
    original: require('../../assets/Images/three.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/3.jpg',
  },
  // {
  //   original: require('../../assets/Images/for.jpg'),
  //   thumbnail: 'http://www.edb.com.pk/slider/4.jpg',
  // },

]

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="Telecommunication Towers">
      
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
      <div className="telecommunication-towers">
        
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  {'Telecommunication / Microwave Towers'}
                </h3>

                <hr />

                <p className="my-3">
                We have a team of professional Engineers for the design and supervision of Telecommunication jobs.
                We offer services in the following categories.
                </p>
                <h4>Complete Telecommunication Towers Design </h4>

                <ul>
                  <li>Site specific design (Civil FDED) for expansion sites (to include but not limited to: comparison of tower antenna force, far end detailed site layout) Hard & soft copy including design creation on NE Tool. </li>
                  <li>Tower analysis: a comparative study, to verify that the additional load is within the designed spare capacity of the structure. </li>
                  <li>Tower analysis: structural calculation based on the available documentation and drawings. </li>
                  <li>Tower analysis: structural calculation incl. survey to measure and verify the condition of the members of the structural as basis for the structural calculation.</li>
                  <li>Completer design for the New sites </li>
                  
                </ul>
                <h4>Inside Building System (IBS) System Design </h4>
                <p><b>Wifi Network Designing  </b></p>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}