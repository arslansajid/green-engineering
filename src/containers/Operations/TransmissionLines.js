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
      <div className="transmission-lines">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Transmission Lines
                </h3>

                <hr />

                <p className="my-3">
                  Engineering Design Bureau has also designed, supervised, fabricated and offered consultation of transmission lines for various clients, since our founding in 1989.Our firm is primarily an Engineering  based  company,  which  has  always  stressed upon the highest standards of technical quality. We have an independent Design Group composed of highly qualified Engineers who are up to date and well conversant in the latest design techniques. A number of Engineers trained by EDB form the nucleus of many companies working on transmission line construction, thereby earning precious foreign exchange for Pakistan. EDB has design capabilities in the following fields:
                </p>

                <ol>
                  <li> Soil Investigation</li>
                  <li>Civil Works</li>
                  <li>Tower Design</li>
                  <li>{'Profile & Tower spotting'}</li>
                  <li>Conductor Size Configuration</li>
                  <li>{'Sag & Tension Calculation'}</li>
                </ol>

                <p>In continued search for technical excellence, EDB was amongst the first few companies in Pakistan to introduce Computer Technology for Construction Design and Project Management.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}