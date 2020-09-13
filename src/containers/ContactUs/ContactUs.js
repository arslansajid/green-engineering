import React, { Component } from 'react';
import './ContactUs.css';
import { Button } from 'reactstrap';
import GoogleMapReact from 'google-map-react';

const Marker = () => {
  return (
    <i className="fas fa-2x fa-map-marker-alt map-marker" />
  )
}

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contact: {
          name: "",
          email: "",
          number: "",
          subject: "",
          message: ""
        },
        center: { lat: 33.726030, lng: 73.074607 },
    }
  }

  contactFormSubmit = () => {
    window.alert("form submitted")
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;

    const { contact } = this.state;
    contact[name] = value;
    this.setState({ contact });
  }

  render() {
    const {contact} = this.state;
    return (
      <div className="contact">
    
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="px-5">
                <h3 className="heading my-3">
                  Contact Us
                </h3>

                <hr />

                <div className="row">
                  <div className="col-lg-4">
                  <address>
                  <a href="mailto:info@greenengineeringint.com">info@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="salaam@greenengineeringint.com">salaam@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:n.salaam@greenengineeringint.com">n.salaam@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:mh.salaam@greenengineeringint.com">mh.salaam@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:naeem@greenengineeringint.com">naeem@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:usman@greenengineeringint.com">usman@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:qaiser@greenengineeringint.com">qaiser@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:Adhban@greenengineeringint.com">Adhban@greenengineeringint.com</a>
                  
                  </address>

                  </div>
                  <div className="col-lg-4">
                  <address>
                  <a href="mailto:farooq@greenengineeringint.com">farooq@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:hussaam@greenengineeringint.com">hussaam@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:G.adhban@greenengineeringint.com">G.adhban@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:m.naeem@greenengineeringint.com">m.naeem@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:structure@greenengineeringint.com">structure@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:Geo@greenengineeringint.com">Geo@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:Trans@greenengineeringint.com">Trans@greenengineeringint.com</a>
                  
                  </address>
                  <address>
                  <a href="mailto:draft@greenengineeringint.com">draft@greenengineeringint.com</a>
                  
                  </address>

                  
                  </div>
                  <div className="col-lg-4">
                  
                    <div style={{ height: '400px', width: '100%' }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDai50O1JJN5mgRPVI4qb7kr7SUxDZvpnA' }}
                        // AIzaSyDai50O1JJN5mgRPVI4qb7kr7SUxDZvpnA&v=3.33
                        defaultCenter={this.state.center}
                        defaultZoom={11}
                      >
                        <Marker lat={33.726030} lng={73.074607} />
                      </GoogleMapReact>
                    </div>
                   
                  </div>
                  
                </div>

                <h5 className="heading-grey">
                  Contact Form
                </h5>

                <hr />

                <form onSubmit={this.contactFormSubmit}>
                  <div className="form-group row">
                    <label className="control-label col-md-2 col-sm-2">Your name:</label>
                    <div className="col-md-6 col-sm-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={contact.name}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="control-label col-md-2 col-sm-2">E-mail:</label>
                    <div className="col-md-6 col-sm-6">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={contact.email}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="control-label col-md-2 col-sm-2">Phone Number:</label>
                    <div className="col-md-6 col-sm-6">
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                        value={contact.number}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="control-label col-md-2 col-sm-2">Subject:</label>
                    <div className="col-md-6 col-sm-6">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        value={contact.subject}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="control-label col-md-2 col-sm-2">Message:</label>
                    <div className="col-md-6 col-sm-6">
                      <textarea
                        type="text"
                        name="message"
                        className="form-control"
                        rows={5}
                        value={contact.message}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="control-label col-md-2 col-sm-2"></label>
                    <div className="col-md-6 col-sm-6">
                      <Button className="btn btn-dark float-right" type="submit">Submit</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}