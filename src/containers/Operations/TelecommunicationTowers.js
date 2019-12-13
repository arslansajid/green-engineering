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
      <div className="telecommunication-towers">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  {'Telecommunication / Microwave Towers'}
                </h3>

                <hr />

                <p className="my-3">
                  Engineering Design Bureau is one of the leading firms in the design of Microwave Towers. The firm has designed and supervised over 8000 towers, both self-supported and guyed masts, for various clients. This field of engineering is the mainstay of company. All our designers are carried out with the most sophisticated structural analysis programs and are in accordance with the latest engineering practices. The services offered in this field are:
                </p>

                <ol>
                  <li>Detailed Design of Structure and Foundations</li>
                  <li>Detailed Drawings</li>
                  <li>Bill of Quantities</li>
                  <li>Tender Documents</li>
                  <li>Fabrication Details</li>
                  <li>Fabrication Supervision</li>
                  <li>Construction/Erection supervision</li>
                  <li>Inspection Report</li>
                </ol>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}