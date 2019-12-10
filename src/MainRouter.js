import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import ContactUs from './containers/ContactUs/ContactUs';
import Profile  from './containers/Profile/Profile';
import Scope  from './containers/Scope/Scope';
import Operations  from './containers/Operations/Operations';
import Projects  from './containers/Projects/Projects';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/product/:title" component={Product} /> */}
    <Route path="/about-us" component={AboutUs} />
    <Route path="/contact-us" component={ContactUs} />
    <Route path="/company-profile" component={Profile} />
    <Route path="/scope-of-service" component={Scope} />
    <Route path="/field-of-operations" component={Operations} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default MainRouter;
