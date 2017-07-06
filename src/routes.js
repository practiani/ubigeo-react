// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Mainx from './layouts/Main/Main';
import Home from './components/Home/Dashboard';
import Page404 from './components/Page404';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import UbigeoList from './components/Ubigeo/Ubigeo';


const AppRoutes = () =>
(
  <Mainx>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      
      <Route exact path="/ubigeo" component={UbigeoList} />

      <Route component={Page404} />
    </Switch>
  </Mainx>
  );

export default AppRoutes;
