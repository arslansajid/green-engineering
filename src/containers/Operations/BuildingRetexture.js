import React, { Component } from 'react';
import './Operations.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="building-retexture">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  {'Building & Retexture'}
                </h3>

                <hr />

                <p className="my-3">
                  Engineering Design Bureauhas forged  a  strong  team  of   experts  comprising  of  architects  and  structural  engineers.  The  firm  has  handled  several  projects  in  this  field, which  include,  Commercial,  Industrial  and  Residential  Building  and  other  Civil  Engineering  Projects.
                </p>

                <p>
                  The firm also offers integrated services covering Architecture, Structural Engineering, Sanitation Works, Water works, Electrification and Air-Conditioning Multistory Buildings and Industrial Buildings are a  specialty  of  the  firm.  The  firm  has  affected  great  saving  for   its clients through proper planning, adoption of correct structural systems and careful handling  of  detailed  design  using  sophisticated  design  procedures.  The   firm  has  been  responsible  for  the  design  of  overhead  Water tanks, Multistoried Office Blocks, Factory Building, Warehouses, Blocks of Residential Flats and other Building Complex.
                </p>

                <p className="mb-5">
                  The firm has substantial individual experience in the design of heavy foundation subjected to vibratory loads.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

