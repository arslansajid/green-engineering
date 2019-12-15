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
                  <p className="my-3">Engineering Design Bureau, established since 1989, is a Consultancy firm of Engineers and Planners with its Head Office in Lahore (Pakistan) and it's Regional Offices in Karachi (Pakistan), Islamabad (Pakistan), Jubail city (Saudi Arabia) and Al-Khobar (Saudi Arabia). The firm provides comprehensive consulting services to both the public and private sectors, through its professional excellence.</p>

                  <p>It has grown from a relatively small Organization to highly specialized firm offering integrated professional services to its clients covering the fields of Buildings, Communications, Transport and T.I, Planning, Telecommunication / Microwave Towers and Transmission lines.</p>

                  <p>The firm has Planned, Designed and supervised a number of important Engineering projects since Establishment in 1989. Our key personnel and specialist consultants are outstanding designers who are backed by a strong team of professionals. These include highly Qualified and Experienced Telecoms Engineers, Bridge Engineers, Highways and Transportation Engineers, Structural Engineers, Steel Structure Designers, Geo-technical Experts, Water Supply & Sanitary Engineers, Electrical Engineer, Architects and Planners, many of whom hold Postgraduate Degrees and Specialized Experience in their respective fields</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}