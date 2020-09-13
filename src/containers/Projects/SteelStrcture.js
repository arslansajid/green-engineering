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
                  Steel Structures And Building Retexture
                </h3>

                <hr />

                <div className="px-4">


                  <h5 className="heading-grey mt-5 mb-4">
                  Projects
                </h5>

                <table className="table">
                  <tr>
                    <th>Sr.Number</th>
                    <th>Project Name</th>
                    <th>Client</th>
                    
                  </tr>
                  <tr>
                  
                  </tr>
                  <tr>
                  <td>1</td>
                    <td>Complete Design of 1 Kanal House </td>
                    <td>DHA Lahore,Pakistan</td>
                  </tr>
                  <tr>
                  <td>2</td>
                    <td>Complete Design of 4 Storey Factor Building </td>
                    <td>Sundas Industrial Estate</td>
                  </tr>
                  <tr>
                  <td>3</td>
                    <td>Complete Design of 2 Kanal House </td>
                    <td>DHA Lahore, Pakistan</td>
                  </tr>
                  <tr>
                  <td>4</td>
                    <td>Cliff Home Design </td>
                    <td>Aston Town Pennsylvania</td>
                  </tr>
                  <tr>
                  <td>5</td>
                    <td>Cliff Home Design </td>
                    <td>Aston Town Pennsylvania</td>
                  </tr>
                  <tr>
                   <td>6</td>
                    <td>Structural Design of Houses Complete in All Respects</td>
                    <td>Detroit.USA </td>
                  </tr>

                  <tr>
                  <td>7</td>
                    <td>Steel Structure Design of Warehouse</td>
                    <td>Houstan, USA</td>
                  </tr>
                  <tr>
                  <td>8</td>
                    <td>Steel Structure of Mezzanine Floor </td>
                    <td>Abu-Dhabi, UAE</td>
                  </tr>
                  <tr>
                  <td>9</td>
                  <td>Container Warehouse Design</td>
                  <td>USA</td>
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