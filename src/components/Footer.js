import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: ""
    }
  }

  onSelectedCurrency = (selectedOption) => {
    console.log(selectedOption)
    this.setState({
      selectedCurrency: selectedOption.target.value,
    })
  }

  render() {
    return (
      <div className="footer">
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="heading">
                <span>Mobile App</span>
              </div>
              <div className="links-container">
                <div className="my-3">
                  <i className="fas fa-2x fa-mobile-alt mr-3" />
                  <span className="appStore-link">Green Engineering App for iOS and Android</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="heading">
                <span>Destination/Region, Currency and Language</span>
              </div>
              <div className="links-container">
                <div className="my-3">
                  <div className="appStore-link">Pakistan, USD $</div>
                </div>
                <div className="my-3">
                  <div className="heading">
                    <span>Follow us</span>
                  </div>
                  <div className="follow-icons d-flex mt-3">
                    <i className="fab fa-instagram mr-4"></i>
                    <i className="fab fa-facebook-f mr-4"></i>
                    <i className="fab fa-twitter mr-4"></i>
                    <i className="fab fa-snapchat-ghost mr-4"></i>
                    <i className="fab fa-pinterest mr-4"></i>
                    <i className="fab fa-youtube mr-4"></i>
                  </div>
                </div>
                {/* <div className="heading">
                  <span>Select language</span>
                </div>
                <select className="language-select my-2">
                  <option value="volvo">English</option>
                  <option value="saab">French</option>
                  <option value="mercedes">Spanish</option>
                  <option value="audi">Urdu</option>
                </select> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="heading">
                <span>Customer Service</span>
              </div>
              <div className="links-container">
                <ul className="footer-links">
                  <li>{"Help & Contact us"}</li>
                  <Link to="/shipping"><li>{"Orders & Shipping"}</li></Link>
                  <li>{"Payment & Pricing"}</li>
                  <Link to="/exchange-return"><li>{"Returns & Refunds"}</li></Link>
                  {/* <li>{"Click & Collect"}</li> */}
                  <li>{"FAQs"}</li>
                  <li>{"Terms & Conditions"}</li>
                  <Link to="/privacy-policy"><li>{"Privacy Policy"}</li></Link>
                  {/* <li>{"Accessibility"}</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="heading">
                <span>About Green Engineering</span>
              </div>
              <div className="links-container">
                <ul className="footer-links">
                  <Link to="/about-us"><li>{"About us"}</li></Link>
                  <li>{"Investers"}</li>
                  {/* <li>{"Boutique Partners"}</li> */}
                  <li>{"Affiliate Programme"}</li>
                  <li>{"Careers"}</li>
                  {/* <li>{"Farfetch Customer Promise"}</li> */}
                  <li>{"Mobile App"}</li>
                  {/* <li>{"Sitemap"}</li>
                  <li>{"Positively"}</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 baseline">
            <div>'Green Engineering' and the 'Green Engineering' logo are trade marks of Green Engineering Private Limited and are registered in numerous jurisdictions around the world.</div>
            <div>© Copyright 2019 Green Engineering. All rights reserved.</div>
          </div>
        </div>
      </div>
      )
      }
    }

export default Footer;
