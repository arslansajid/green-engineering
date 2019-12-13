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
                    "Together we strive to achieve our Vision to Transform Pakistan through Persistent Hard Work, Superior Work Ethic,
                    Due Diligence and Professional Excellence."
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}