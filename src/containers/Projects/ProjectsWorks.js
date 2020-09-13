import React, { Component } from 'react';
import './Projects.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="mis-projects-workss">
      
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Miscellenious Projects And Works
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
                    <td>30 Aspiration Projects</td>
                    <td>Saudia Arabia</td>
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