import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContactFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: ""
    }
  }
  render() {
      return (
        <div className="contact-footer mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="px-5">
                  <p>Monday To Saturday 9:00 AM to 05:00 PM</p>
                  <p>Lunch Break 1:30 PM To 2:30PM | Friday Break 1:00PM To 3:00PM</p>
                </div>
            </div>
          </div>
        </div>
          
            {/* <div className="container pt-5">
                <div className="row">
                  <div className="col-lg-6 p-0">
                    <div className="px-5">
                    <p>Monday To Saturday 9:00 AM to 05:00 PM</p>
                    <p>Lunch Break 1:30 PM To 2:30PM | Friday Break 1:00PM To 3:00PM</p>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
            </div>
          </div> */}
        </div>
      )
    }
  }