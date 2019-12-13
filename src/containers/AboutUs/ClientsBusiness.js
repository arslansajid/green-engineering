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
      <div className="clients-business">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="px-5">
                  <h3 className="heading my-3">
                    Client Gallery
                  </h3>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }