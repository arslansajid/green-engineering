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
      <div className="building-servey">
        
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                Building Feasibility And TI Survey
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
                      <td>I-Beam Retaining Wall Design</td>
                      <td>Sausalito, USA</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Architectural And Interior Design of Resturants Chain</td>
                    <td>Dubai,UAE</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td>Architectural And Interior Design of Resturants Chain</td>
                  <td>Dubai, UAE </td>
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