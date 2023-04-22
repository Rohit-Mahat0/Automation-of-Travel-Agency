import React from 'react';
import { BrowserRouter as Router,Switch, Route,Redirect } from 'react-router-dom';

import Registration from './components/Registration';
import Login from './components/Login';
import AddVehicle from './components/AD001-AD004/AddVehicle';
import DeleteVehicle from './components/AD001-AD004/DeleteVehicle';
import ViewVehicle from './components/AD001-AD004/ViewVehicle';
import ModifyVehicle from './components/AD001-AD004/ModifyVehicle';
import AddRoute from './components/AD005-AD008/AddRoute';
import DeleteRoute from './components/AD005-AD008/DeleteRoute';
import ViewRoute from './components/AD005-AD008/ViewRoute';
import ModifyRoute from './components/AD005-AD008/ModifyRoute';
import AddDriver from './components/AD009-AD012/AddDriver';
import DeleteDriver from './components/AD009-AD012/DeleteDriver';
import ModifyDriver from './components/AD009-AD012/ModifyDriver';
import AllotDriver from './components/AD009-AD012/AllotDriver';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import AddProfile from './components/US001-US005/AddProfile';
import ViewVehicleRoute from './components/US001-US005/ViewVehicleRoute';
import Booking from './components/US001-US005/Booking';
import CancelBooking from './components/US001-US005/CancelBooking';
import PrintTicket from './components/US001-US005/PrintTicket';
import AD013 from './components/AD013';

const App = () => {
  
  return (
    <Router>
      <Switch>
     
      <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Registration} />
        <Route path="/addVehicle" component={AddVehicle} />
        <Route path="/addRoute" component={AddRoute} />
        <Route path="/addDriver" component={AddDriver} />
        <Route path="/deleteVehicle" component={DeleteVehicle} />
        <Route path="/deleteRoute" component={DeleteRoute} />
        <Route path="/deleteDriver" component={DeleteDriver} />
        <Route path="/viewVehicle" component={ViewVehicle} />
        <Route path="/viewRoute" component={ViewRoute} />
        <Route path="/allotDriver" component={AllotDriver} />
        <Route path="/modifyVehicle" component={ModifyVehicle} />
        <Route path="/modifyRoute" component={ModifyRoute} />
        <Route path="/modifyDriver" component={ModifyDriver} />
        <Route path="/addProfile" component={AddProfile} />
        <Route path="/viewVehicleRoute" component={ViewVehicleRoute} />
        <Route path="/booking" component={Booking} />
        <Route path="/cancelbooking" component={CancelBooking} />
        <Route path="/printTicket" component={PrintTicket} />
        <Route path="/viewBooking" component={AD013} />

      </Switch>
    </Router>
  );
};

export default App;