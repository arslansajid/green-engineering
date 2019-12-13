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
        <div className="flyer-section" />
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

                  <table className="table">
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Project Description</th>
                    </tr>
                    <tr>
                      <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                      <td>University of Engineering and Technology, Lahore</td>
                      <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                    </tr>
                    <tr>
                      <td>Hostels for Oil Field Company</td>
                      <td>Ikan</td>
                      <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                    </tr>
                  </table>

                  <h5 className="heading-grey mt-5 mb-4">
                    Studies
                  </h5>

                  <table className="table">
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Project Description</th>
                    </tr>
                    <tr>
                      <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                      <td>University of Engineering and Technology, Lahore</td>
                      <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                    </tr>
                    <tr>
                      <td>Hostels for Oil Field Company</td>
                      <td>Ikan</td>
                      <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
                    </tr>
                  </table>

                  <h5 className="heading-grey mt-5 mb-4">
                    Underground Oil Storage Tanks
                  </h5>

                  <table className="table">
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Project Description</th>
                    </tr>
                    <tr>
                      <td>Engineering University Employees Cooperative Housing Society, Lahore</td>
                      <td>University of Engineering and Technology, Lahore</td>
                      <td>Detailed Design of Road works and Structures, Bill of Quantities and Specifications</td>
                    </tr>
                    <tr>
                      <td>Hostels for Oil Field Company</td>
                      <td>Ikan</td>
                      <td>Detailed Design of Structures, Bill of Quantities and Specifications.</td>
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