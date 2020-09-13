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
      <div className="highway-bridges">
      
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Highway,Bridges And Transmission Lines
                </h3>

                <hr />

                <div className="px-4">

                  <h5 className="heading-grey mt-5 mb-4">
                    Projects
                  </h5>
                  <table className="table">
                    <tr>
                      <th>Sr.Number</th>
                      <th>Project</th>
                      <th>Client</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>20 Kilometers Complete Road Design</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td> Design of Gabion Retaining Walls for Road Construction</td>
                    <td>UK</td>
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