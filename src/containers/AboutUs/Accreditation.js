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
      <div className="accreditation">
        <div className="flyer-section" />
          <div className="container">
            <div className="row">
              <div className="col">
              <div className="px-5">
                <h3 className="heading my-3">
                  Accreditation
                </h3>

                <hr />

                <p className="my-3">
                At EDB we ensure to implement most advance systems accepted at local and global level. In acquisition of these systems, we are training our staff according to the requirement of new challenges,  policies & vision  and  made  necessary  changes  in  our  documentation and working procedures. Our accreditation with  local and international bodies are showing our interest to approach the right path.
                </p>

                <p>
                Certification from different local institutions i.e. Pakistan Engineering Council defines that we meet defined local and worldwide parameters and going step further each time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}