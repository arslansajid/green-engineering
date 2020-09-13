import React, { Component } from 'react';
import './AboutUs.css';
// import ContactFooter from "../../components/ContactFooter";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="ceo-page">

        
          <div className="container">
            <div className="row">
              <div className="col">

              <div className="px-5">
          <h3 className="heading my-3">
            CEO Message
          </h3>

          <hr />
          
          <p className="my-3">
          It has been my honor and privilege to serve the Pakistani community for the past 40 years, and it will continue to be so. We aim to continue providing construction services to help facilitate growth in our community. Pakistan's large population of over 180 million offers great opportunity and potential in the field of construction and engineering, in which, we continue to witness excellent growth and accordingly we will continue to increase our execution capacity in response to demand for our services.
          </p>

          <p>
          We have provided since our inception in 1989 to provide our Clients with the highest quality of services. We do not allow short cut or sub-par work, as that is not what our client expects nor deserves. With these rule our company has grown from a small one- room company with local clients, to a Multi-National cooperation with offices in Pakistan and Saudi Arabia and a host of Multi-National clientele.
          </p>

          <p>
          Over the years, Engineering Design Bureau employees have worked on numerous groundbreaking projects bothin Pakistan and abroad, many of them conducted in some of the world's toughest conditions and difficult terrain. Quality, ingenuity and reliability form the core of Engineering Design Bureau operations, coupled with a high level of professionalism and first-class service.
          </p>

          <p>
          Our leadership is a result of our employees.They have made Engineering Design Bureau one of the outstanding companies in Pakistan's construction industry. Each of them brings diverse backgrounds and specialized disciplines to deliver the one thing that our customers want most – Excellent results.
          </p>

          <p>
          Finally, I would like to thank the wonderful people who make up the Engineering Design Bureau family. The entrepreneurial initiative, creativity and action of each of our employees has shape our achievement-oriented culture and led to one success after another, ensuring client satisfaction.
          </p>

          <p>
          Moreover, a special thank you to each of our Business Associate, Customers and Sub-Contractors for your trust and support as we take this wondrous journey together.
          </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}