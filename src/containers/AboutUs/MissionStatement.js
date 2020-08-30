import React, { Component } from 'react';
import './AboutUs.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="mission-statement">
        <div className="flyer-section" />

          <div className="container">
            <div className="row">
              <div className="col">
                <div className="px-5">
                  <h3 className="heading my-3">
                    Mission Statement
                  </h3>

                  <hr />

                  <p className="my-3 text-center">
                    "To play a part in the Sustainable Infrastructure Development by bringing together Hard Work, Efficiency and Quality of work at one point"
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}