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

// operations pages...
import BuildingRetexture from './containers/Operations/BuildingRetexture';
import CommunicationTransport from './containers/Operations/CommunicationTransport';
import TelecommunicationTowers from './containers/Operations/TelecommunicationTowers';
import TransmissionLines from './containers/Operations/TransmissionLines';
import GeoTechnicalServices from './containers/Operations/GeoTechnicalServices';

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

    <Route path="/building-retexture" component={BuildingRetexture} />
    <Route path="/communication-transportation" component={CommunicationTransport} />
    <Route path="/telecommunication-towers" component={TelecommunicationTowers} />
    <Route path="/transmission-lines" component={TransmissionLines} />
    <Route path="/geotechnical-services" component={GeoTechnicalServices} />

    <Route path="/steel-structure" component={SteelStrcture} />
    <Route path="/telecom-tower" component={TelecomTowers} />
    <Route path="/engineering-design" component={EngineeringDesign} />
    <Route path="/building-survey" component={BuildingServey} />
    <Route path="/highways-bridges" component={HighwaysBridges} />
    <Route path="/projects-works" component={ProjectsWorks} />


    <Route path="/contact-us" component={ContactUs} />
    <Route path="/company-profile" component={Profile} />
    <Route path="/scope-of-service" component={Scope} />
  </Switch>
)

export default MainRouter;
