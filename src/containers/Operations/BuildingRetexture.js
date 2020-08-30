import React, { Component } from 'react';
import './Operations.css';

import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: require('../../assets/Images/first.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/1.jpg',
  },
  {
    original: require('../../assets/Images/scnd.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/2.jpg',
  },
  {
    original: require('../../assets/Images/thrd.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/3.jpg',
  },
  {
    original: require('../../assets/Images/four.jpeg'),
    thumbnail: 'http://www.edb.com.pk/slider/4.jpg',
  },
  {
    original: require('../../assets/Images/ffth.jpg'),
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
      <div className="building-retexture">
       
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  {'Building & Retexture'}
                </h3>

                <hr />

                <p className="my-3">
                We have an expert team of Architects, Engineers and 2D/3D Draftsmen. Our team is well versed with the modern software’s such as Autocad, 3D Max, Revit, Sketchup etc. 
                We offer following services:
                
                </p>

               <ul>
               <li>•	2D Architectural Design of all types of Structures</li>
               <li>•	3D design of Structures</li>
               <li>•	Interior/Exterior Design </li>
               <li>•	Green Building Design </li>
               <li>•	Most realistic renders of all the 3D Design</li>
               </ul>
               <h3 className="heading my-3">Civil Structure Design and Supervision and Execution:</h3>
               <p className="my-3">
               We offer services in both design and supervision of Civil Infrastructure Projects. We have a team of professional Engineers with vast experience in the design. We provide special expertise in modern software’s such ETAB, SAFE, SAP Staad Pro, Staad Foundation.
               </p>
              <p className="my-3">We offer services in the following categories:</p>
               <ul>
               <li>Residential building Design and Execution</li>
               <li>Commercial Buildings design and Execution</li>
               <li>Multi storey Frame structure design and Execution</li>
               <li>Steel Structure design and Execution</li>
               <li>Water front Properties design and Execution</li>
               <li>Footing analysis and design (Strip, square, raft, pile)</li>
               <li>Basement design and Execution</li>
               <li>Retaining wall design and Execution</li>
               <li>Solar panel supporting structure design  and Execution</li>
               <li>Marina Construction</li>
               <li>Marine Projects consulting</li>
               <li>Bridge design</li>
               <li>concrete deck bridge design</li>
               <li>Hydraulic Structures design</li>
               <li>Project Estimation and cost analysis </li>
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

