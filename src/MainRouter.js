import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';

// about us pages...
import Accreditation from './containers/AboutUs/Accreditation';
import CeoMessage from './containers/AboutUs/CeoMessage';
import ClientsBusiness from './containers/AboutUs/ClientsBusiness';
import ExecutiveSummary from './containers/AboutUs/ExecutiveSummary';
import MissionStatement from './containers/AboutUs/MissionStatement';

import ContactUs from './containers/ContactUs/ContactUs';
import Profile  from './containers/Profile/Profile';
import Scope  from './containers/Scope/Scope';
import Operations  from './containers/Operations/Operations';

// projects pages...
import BuildingServey from './containers/Projects/BuidingSurvey';
import EngineeringDesign from './containers/Projects/EngineeringDesign';
import HighwaysBridges from './containers/Projects/HighwaysBridges';
import SteelStrcture from './containers/Projects/SteelStrcture';
import TelecomTowers from './containers/Projects/TelecomTowers';
import ProjectsWorks  from './containers/Projects/ProjectsWorks';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/product/:title" component={Product} /> */}

    <Route path="/accreditation" component={Accreditation} />
    <Route path="/ceo-message" component={CeoMessage} />
    <Route path="/clients-business-associates" component={ClientsBusiness} />
    <Route path="/executive-summary" component={ExecutiveSummary} />
    <Route path="/mission-statement" component={MissionStatement} />

    <Route path="/steel-structure" component={SteelStrcture} />
    <Route path="/telecom-tower" component={TelecomTowers} />
    <Route path="/engineering-design" component={EngineeringDesign} />
    <Route path="/building-survey" component={BuildingServey} />
    <Route path="/highways-bridges" component={HighwaysBridges} />
    <Route path="/projects-works" component={ProjectsWorks} />


    <Route path="/contact-us" component={ContactUs} />
    <Route path="/company-profile" component={Profile} />
    <Route path="/scope-of-service" component={Scope} />
    <Route path="/field-of-operations" component={Operations} />
  </Switch>
)

export default MainRouter;
