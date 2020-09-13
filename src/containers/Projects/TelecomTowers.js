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
      <div className="telecom-towers">
 
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Projects
                </h3>

                <hr />

                <div className="px-4">

                  <h5 className="heading-grey mt-5 mb-4">
                    Housing Societies
                  </h5>

                  <h5 className="heading-grey mt-5 mb-4">
                    Studies
                  </h5>

                  <table className="table">
                  <tr>
                  <th>Sr.Number</th>
                  <th>Project Name</th>
                  <th>Client</th>
                  
                </tr>
                <tr>
                <td>1</td>
                <td>IBS (Inside Building Systems) Design </td>
                <td>Saudia Arabia</td>
              </tr>

                <tr>
                
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