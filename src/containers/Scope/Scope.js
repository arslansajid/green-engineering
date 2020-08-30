import React, { Component } from 'react';
import './Scope.css';
// import ContactFooter from "../../components/ContactFooter";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="scope">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Scope of Service
                </h3>

                <hr />

                <p className="my-3">
                  Engineering Design Bureau is actively involved in almost all the fields of Civil Engineering but specializes in Communication and Transport, Building and Architecture, Microwave Tower and Transmission Lines. The firm has also suitable association arrangements with well-known firms for undertaking high-level sophisticated projects.
                </p>

                <p>
                  We provide wide range of Civil Consultancy Services, which includes but not limited:
                </p>

                <p className="mb-5">
                  The  blend of professional  disciplines  combining  the  technology of the engineer and the vision of the planner provides  an integrated approach to find optimum solutions to  engineering problems .  Emphasis  on   efficient  management  of  each  project  from  planning  through  design,  construction  and  start-up assures the client of satisfactory completion of work  and  commissioning  of  the  project  on  schedule  and  within  budget.  We  aims  at  finding  the most  economical solution through the use of latest and sophisticated design techniques and makes extensive use of computers and latest technology to provide the most advanced services to our clients.
                </p>

                {/* <ContactFooter /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}