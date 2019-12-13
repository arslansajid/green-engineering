import React, { Component } from 'react';
import './Operations.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="geo-services">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Geotechnical Services
                </h3>

                <hr />

                <p className="my-3">
                  Engineering Design Bureau also provides Geotechnical data for sound planning of development project. The firm is capable of providing expert consultancy services in the field of geology and geophysics.
                </p>

                <p>The scopes of services offered are:</p>

                <ul>
                  <li>Geological Mapping by conventional or aerial photography</li>
                  <li>Geophysical surveys using the latest techniques</li>
                  <li>Engineering geological studies</li>
                </ul>

                <p>
                  Every Engineering project starts with a geotechnical survey to ascertain the quality of the ground on which the structure is to be built. Our firm in conjunction with others strives to be the best. We have considerable experience and a well-trained staff, which with the help of the latest technological advancements we are able to accurately deduce area water table, salinity and other parameters of this engineering service. With experience of huge number of sites, we have been able to achieve near perfection in this field. 
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}