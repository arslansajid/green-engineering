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
      <div className="exec-summary">
       
        
          <div className="container">
            <div className="row">
              <div className="col">

              <div className="px-5">
                <h3 className="heading my-3">
                  Executive Summary
                </h3>

                <hr />

                <p className="my-3">
                Engineering Design Bureau is actively involved in almost all the fields of Civil Engineering but specializes in Communication and Transport, Building and Architecture, Microwave Tower and Transmission Lines. Our firm has also suitable association arrangements with well-known firms for undertaking high-level sophisticated projects.
                </p>
                <p>
                  The blend of professional disciplines combining the technology of the engineer and the vision of the planner provides an integrated approach to find the optimum solutions to every engineering problem.
                </p>

                <p>
                  The firm aims at finding the most Economical solution by using the latest and most sophisticated design techniques and makes extensive use of computers and other state of the art technologies for the optimization of highway alignment designs, analysis of bridges shell roofs and the other Structures, Telecommunication Tower, Transmission Lines, Preparation of bill of quantity etc. Services of specialist consultants, specializing in different fields of engineering planning and economics are available for supplementing the firm’s expertise on complex or special project.
                </p>

                <p>
                  The firm also offers integrated services covering Architecture, Structural Engineering, Plumbing, and Water supply, Electrification and Air-Conditioning Multistory Buildings and Industrial Buildings are a specialty of the firm. Our firm has been responsible for the design of overhead Water tanks, Multistoried, Office blocks, Factory building, Warehouses, Blocks of residential flats and other Building Complex. Ourfirm has successfully completed highway projects independently as well as in association with other firms. It now possesses the expertise to handle independently major highways and bridges.
                </p>
                <p>
                  Engineering Design Bureau is one of the leading firms in the design of Microwave Towers. The firm has designed and supervised the construction significant numbers of Towers, self-supported and guyed masts, for various clients. The design is carried out with the most sophisticated structural analysis programs and accordance with the latest of engineering practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}