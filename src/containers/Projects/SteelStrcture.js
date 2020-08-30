import React, { Component } from 'react';
// import './AboutUs.css';
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: require('../../assets/Images/boom.JPG'),
    thumbnail: 'http://www.edb.com.pk/slider/1.jpg',
  },
  {
    original: require('../../assets/Images/w.jfif'),
    thumbnail: 'http://www.edb.com.pk/slider/2.jpg',
  },
  {
    original: require('../../assets/Images/e.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/3.jpg',
  },
  {
    original: require('../../assets/Images/r.jpg'),
    thumbnail: 'http://www.edb.com.pk/slider/4.jpg',
  },
  // {
  //   original: require('../../assets/Images/char.jpg'),
  //   thumbnail: 'http://www.edb.com.pk/slider/5.jpg',
  // },
  // {
  //   original: require('../../assets/Images/panch.jpg'),
  //   thumbnail: 'http://www.edb.com.pk/slider/5.jpg',
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
      <div className="Steel Structurs">
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
      <div className="steel-structure">
        
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Projects
                </h3>

                <hr />

                <div className="px-4">

                  <h5 className="heading-grey mt-5 mb-4">
                    Housing Societies
                  </h5>

                  <table className="table">
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Project Description</th>
                    </tr>
                    <tr>
                      <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                      <td>University of Engineering and Technology, Lahore</td>
                      <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                    </tr>
                    <tr>
                      <td>Hostels for Oil Field Company</td>
                      <td>Ikan</td>
                      <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                    </tr>
                  </table>

                  <h5 className="heading-grey mt-5 mb-4">
                    Studies
                  </h5>

                  <table className="table">
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Project Description</th>
                    </tr>
                    <tr>
                      <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                      <td>University of Engineering and Technology, Lahore</td>
                      <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                    </tr>
                    <tr>
                      <td>Hostels for Oil Field Company</td>
                      <td>Ikan</td>
                      <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                    </tr>
                  </table>

                  <h5 className="heading-grey mt-5 mb-4">
                    Underground Oil Storage Tanks
                  </h5>

                  <table className="table">
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Project Description</th>
                    </tr>
                    <tr>
                      <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                      <td>University of Engineering and Technology, Lahore</td>
                      <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                    </tr>
                    <tr>
                      <td>Hostels for Oil Field Company</td>
                      <td>Ikan</td>
                      <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                    </tr>
                  </table>

                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}