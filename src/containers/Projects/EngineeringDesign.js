import React, { Component } from 'react';
// import './AboutUs.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="engineering-design">
        
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Engineering Design
                </h3>

                <hr />

                <div className="px-4">

                  <h5 className="heading-grey mt-5 mb-4">
                  Projects
                  </h5>

                  <table className="table">
                  <tr>
                  <th>Sr.Number</th>
                  <th>Project Name</th>
                  <th>Client</th>
                  
                </tr>
                <tr>
                
                </tr>
                <tr>
                <td>1</td>
                  <td>Complete MEP Design of 5 Star Hotel </td>
                  <td>Islamabad,Pakistan</td>
                </tr>
                <tr>
                <td>2</td>
                  <td>Complete MEP Design of 50 Bed Hospital </td>
                  <td>Islamabad,Pakistan</td>
                </tr>
                <tr>
                <td>3</td>
                  <td>MEP Design of 40 Bed Hospital</td>
                  <td>Riyadh , KSA</td>
                </tr>
                
                <tr>
                <td>4</td>
                  <td>Structural Design of Basement And Super Structure </td>
                  <td>Glasgow , UK</td>
                </tr>
                <tr>
                <td>5</td>
                  <td>Structural Design of Basement And Super Structure</td>
                  <td>Detroit , USA</td>
                </tr>
                
                  </table>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}