import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Cart from './Cart/cart';
import Logo from '../assets/Images/waffle_logo_2019.png';
import { toggleCart } from '../actions/Actions';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import SignIn from '../components/SigninScreen/signin';
// import SignUp from '../components/SignupScreen/signup';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutDropdownOpen: false,
            operationsDropdownOpen: false,
            projectsDropdownOpen: false,
            showModal: false,
            modalType: 'signin',
            notificationDropDown: false
        }
    }

    toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({
            sideCartOpen: !this.state.sideCartOpen
        })
    };

    onMouseEnter = (caller) => {
        if (caller === 'about-us') {
          this.setState({ aboutDropdownOpen: true });
        } else if(caller === "operations") {
            this.setState({ operationsDropdownOpen: true });
        } else if(caller === "projects") {
            this.setState({ projectsDropdownOpen: true });
        }
      }
    
      onMouseLeave = (caller) => {
        if (caller === 'about-us') {
          this.setState({ aboutDropdownOpen: false });
        } else if(caller === "operations") {
            this.setState({ operationsDropdownOpen: false });
        } else if(caller === "projects") {
            this.setState({ projectsDropdownOpen: false });
        }
      }

    // toggleAboutDropDown= () => {
    //     this.setState({
    //         aboutDropdownOpen: !this.state.aboutDropdownOpen
    //     })
    // }

    handleModalType = (value) => {
        this.setState({
            modalType: value
        })
    }

    toggleNotificationDropDown = () => {
        this.setState({ notificationDropDown: !this.state.notificationDropDown })
    }

    render() {
        return (
            <header className="header">
            {/* <SwipeableDrawer
                anchor="right"
                open={this.props.isCartOpen}
                onClose={this.toggleDrawer}
                onOpen={this.toggleDrawer}
                >
                <Cart
                    // toggleAutoClose={this.autoCloseDrawerEventHandler}
                />
             </SwipeableDrawer> */}

                <Navbar className="primary-nav" color="" light>
                    <Nav>
                        <NavbarBrand href="/">
                            <div className="d-flex justify-content-center align-items-center">
                                {/* <img className="company-logo mr-2" src={Logo} alt="logo" /> */}
                                <div className="company-name">Green-Engineering</div>
                            </div>
                            
                        </NavbarBrand>
                    </Nav>

                    <Nav>
                        <Dropdown
                            onMouseEnter={() => this.onMouseEnter("about-us")}
                            onMouseLeave={() => this.onMouseLeave("about-us")}
                            isOpen={this.state.aboutDropdownOpen}
                            toggle={() => {}}>
                            <DropdownToggle className="nav-link" caret>
                                About us
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link to="/ceo-message"><DropdownItem>CEO Message</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/mission-statement"><DropdownItem>Mission Statement</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/executive-summary"><DropdownItem>Executive Summary</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/clients-business-associates"><DropdownItem>Clients and Business Associates</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/accreditation"><DropdownItem>Accreditation</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Link to="/company-profile">
                            <NavItem className="nav-link">
                                Company Profile
                            </NavItem>
                        </Link>
                        <Link to="/scope-of-service">
                            <NavItem className="nav-link">
                                Scope of Services
                            </NavItem>
                        </Link>
                        {/* <Link to="/field-of-operations"> */}
                        <Dropdown
                            onMouseEnter={() => this.onMouseEnter("operations")}
                            onMouseLeave={() => this.onMouseLeave("operations")}
                            isOpen={this.state.operationsDropdownOpen}
                            toggle={() => {}}>
                            <DropdownToggle className="nav-link" caret>
                                Field of Operations
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link to="/building-retexture"><DropdownItem>Building and Retexture</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/communication-transportation"><DropdownItem>Communication and Transportation</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/telecommunication-towers"><DropdownItem>Telecommunication Towers</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/transmission-lines"><DropdownItem>Transmission Lines</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/geotechnical-services"><DropdownItem>Geo-Technical Services</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        {/* </Link> */}
                        <Dropdown
                            onMouseEnter={() => this.onMouseEnter("projects")}
                            onMouseLeave={() => this.onMouseLeave("projects")}
                            isOpen={this.state.projectsDropdownOpen}
                            toggle={() => {}}>
                            <DropdownToggle className="nav-link" caret>
                                Projects
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link to="/steel-structure"><DropdownItem>Steel Structures and Buildings</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/telecom-tower"><DropdownItem>Telecom Towers</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/engineering-design"><DropdownItem>Detailed Engineering Design</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/building-survey"><DropdownItem>Buidling feasibility and TI Survey</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/highways-bridges"><DropdownItem>Highways, Bridges and Transmission Lines</DropdownItem></Link>
                                <DropdownItem divider />
                                <Link to="/projects-works"><DropdownItem>Miscellenous Projects and Works</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        {/* <Link to="/about-us">
                            <NavItem className="nav-link">
                                Career Opportunities
                            </NavItem>
                        </Link> */}
                        <Link to="/contact-us">
                            <NavItem className="nav-link">
                                Contact Us
                            </NavItem>
                        </Link>
                    </Nav>

                </Navbar>

                {/* <Modal isOpen={this.state.showModal} toggle={this.toggleModal} className={'signin-signup-modal'}>
                    <ModalHeader>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="company-logo mr-2" src={Logo} alt="logo" />
                            <div className="company-name">Waffle-World</div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        {this.state.modalType === 'signup'
                        ?
                        <SignUp
                            handleModalType={this.handleModalType}
                        />
                        :
                        <SignIn
                            handleModalType={this.handleModalType}
                        />
                        }
                        
                    </ModalBody>
                    <ModalFooter>
                    <Button className="btn-dark" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}
 
            </header>
        )
    }
}

// Header.propTypes = {
//     user: PropTypes.object,
//     isCartOpen: PropTypes.bool,
//     cart: PropTypes.array
//   };
  
//   function mapStateToProps(state) {
//     return {
//       user: state.user,
//       isCartOpen: state.cart.isCartOpen,
//       cart: state.cart.cart
//     };
//   }
  
//   export default connect(mapStateToProps)(Header);

export default Header;