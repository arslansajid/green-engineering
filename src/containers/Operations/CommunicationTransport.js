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
      <div className="communication-transport">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  {'Communication and Transportation'}
                </h3>

                <hr />

                <p className="my-3">
                  Engineering Design Bureau has developed a Competent Team of Transportation and Highway Engineers and Bridge Designers.
                </p>

                <p>
                  The firm has successfully completed highway projects independently as well as in association with other firms. It now possesses the expertise to handle independently major highways and bridges. Extensive use is made of computer programs for the optimization of highway alignment, Geometric Design, Preparation of Bill of quantities, Analysis of Bridges, etc. The firm also provides advice on site selection, Route location and Surveying by latest Techniques.
                </p>

                <p className="mb-5">
                  The firm is competent in the whole spectrum of Transportation Engineering including Traffic counts, Origin and Destination Surveys, Traffic Engineering, field and Topographic Surveys using Aerial Photography and sophisticated Electronic Distance Measuring (EDM) equipment,  soil  and  material  sampling  and  testing,  feasibility  studies, systems analysis, detailed design of facilities and evaluation studies of operating systems.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}