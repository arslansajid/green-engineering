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
                  <ol>
                  <li>Mascon Engineering</li>
                  <li>Z.A. Associates</li>
                  <li>Krew Inc.</li>
                  <li>SOUFFRONT (Construction +  Engineering)</li>
                  <li>Nokia </li>
                  <li>Tawal</li>
                  <li>Pyramid </li>
                  <li>STC</li>
                  <li>Maxorb</li>
                  <li>Geotech Design</li>
                  <li>All Services USA</li>
                  </ol>
                  <p>We have a great number of satisfied clients and their number is increasing with every passing day. </p>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }