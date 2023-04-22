package com.sf.ata.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sf.ata.bean.CredentialsBean;
import com.sf.ata.bean.CreditcardBean;
import com.sf.ata.bean.DriverBean;
import com.sf.ata.bean.ProfileBean;
import com.sf.ata.bean.ReservationBean;
import com.sf.ata.bean.RouteBean;
import com.sf.ata.bean.VehicleBean;
import com.sf.ata.dao.AdministratorDao;

@Service
public class AdministratorService {
@Autowired
private AdministratorDao adao;
public  String registerUser(CredentialsBean user)
{
	return adao.registerUser(user);
}
public boolean authenticate(CredentialsBean user) 
{
return  adao.authenticate(user);
}
//#####################	  ADD    ##########################
public String addVehicle(VehicleBean vehicleBean) 
{
	return adao.addVehicle(vehicleBean);
}
public String addRoute(RouteBean routeBean) 
{
	return adao.addRoute(routeBean);
}
public String addDriver(DriverBean driverBean) 
{
	return adao.addDriver(driverBean);
}
public String addProfile(ProfileBean profileBean) 
{
	return adao.addProfile(profileBean);
}
public String addReservation(ReservationBean reservationBean) 
{
	return adao.addReservation(reservationBean);
}
public String addCreditcard(CreditcardBean creditcardBean) 
{
	return adao.addCreditcard(creditcardBean);
}
//#####################	  VIEW    ##########################
public ArrayList<VehicleBean> viewVehicles()
{
	return adao.viewVehicles();
}
public VehicleBean viewVehicleById(int vehicleId)
{
	return adao.viewVehicleById(vehicleId);
}
public ArrayList<RouteBean> viewRoutes()
{
	return adao.viewRoutes();
}
public RouteBean viewRouteById(int routeId)
{
	return adao.viewRouteById(routeId);
}

public ArrayList<DriverBean> viewDrivers()
{
	return adao.viewDrivers();
}
public DriverBean viewDriverById(int driverId)
{
	return adao.viewDriverById(driverId);
}
public ArrayList<ReservationBean> viewReservations()
{
	return adao.viewReservations();
}
public ReservationBean viewReservationById(int reservationId)
{
	return adao.viewReservationById(reservationId);
}
//#####################	  UPDATE    ##########################
public String updateVehicle(VehicleBean vehicleBean)
{
	return adao.updateVehicle(vehicleBean);
}
public String updateRoute(RouteBean routeBean)
{
	return adao.updateRoute(routeBean);
}
public String updateDriver(DriverBean driverBean)
{
	return adao.updateDriver(driverBean);
}
public String updateReservation(ReservationBean reservationBean)
{
	return adao.updateReservation(reservationBean);
}
//#####################	  DELETE    ##########################
public String deleteVehicle(int vehicleId)
{
	return adao.deleteVehicle(vehicleId);
}
public String deleteRoute(int routeId)
{
	return adao.deleteRoute(routeId);
}
public String deleteDriver(int driverId)
{
	return adao.deleteDriver(driverId);
}

}
