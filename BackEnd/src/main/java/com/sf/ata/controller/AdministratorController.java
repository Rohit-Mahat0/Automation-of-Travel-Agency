package com.sf.ata.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sf.ata.bean.CredentialsBean;
import com.sf.ata.bean.CreditcardBean;
import com.sf.ata.bean.DriverBean;
import com.sf.ata.bean.ProfileBean;
import com.sf.ata.bean.ReservationBean;
import com.sf.ata.bean.RouteBean;
import com.sf.ata.bean.VehicleBean;
import com.sf.ata.service.AdministratorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdministratorController {
	@Autowired
	private AdministratorService adserv;
	@GetMapping("/selectUser/{userName}/{password}")
	@ResponseBody
	public boolean auth(@PathVariable String userName,@PathVariable String password)
{
//		CredentialsBean cb=new CredentialsBean();
//		cb.setUserID(userID);
//		cb.setPassword(password);
		System.out.println("Under Controller "+userName+" "+password);
		CredentialsBean cb=new CredentialsBean();
		cb.setUserID(userName); 
		cb.setPassword(password);
		System.out.println(adserv.authenticate(cb));;
		return adserv.authenticate(cb);
	}
	@PostMapping("/registerUser")
	public String reg(@RequestBody CredentialsBean cb)
	{
		adserv.registerUser(cb);
		return "<h1>User Added Successfully</h1>";
	}

	
//#####################	  ADD    ##########################
@PostMapping("/addVehicle")
public String meth1(@RequestBody VehicleBean eb)
{
	adserv.addVehicle(eb);
	return "<h1>Vehicle Added Successfully</h1>";
}

@PostMapping("/addRoute")
public String meth1(@RequestBody RouteBean eb)
{
	adserv.addRoute(eb);
	return "<h1>Route Added Successfully</h1>";
}
@PostMapping("/addDriver")
public String meth1(@RequestBody DriverBean eb)
{
	adserv.addDriver(eb);
	return "<h1>Driver Added Successfully</h1>";
}
@PostMapping("/addProfile")
public String meth1(@RequestBody ProfileBean eb)
{
	adserv.addProfile(eb);
	return "<h1>Profile Added Successfully</h1>";
}
@PostMapping("/Booking")
public String meth1(@RequestBody ReservationBean eb)
{
	adserv.addReservation(eb);
	return "<h1>Booking Successfully</h1>";
}

@PostMapping("/creditcard")
public String meth1(@RequestBody CreditcardBean eb)
{
	adserv.addCreditcard(eb);
	return "<h1>Creditcard added Successfully</h1>";
}

//#####################	  View    ##########################
@GetMapping("/selectAll")
public List<VehicleBean> meth2()
{
	
	return adserv.viewVehicles();
}

@GetMapping("/selectAllRoute")
public List<RouteBean> meth21()
{
	
	return adserv.viewRoutes();
}

@GetMapping("/selectAllDriver")
public List<DriverBean> meth22()
{
	
	return adserv.viewDrivers();
}

@GetMapping("/selectAllBooking")
public List<ReservationBean> meth23()
{
	
	return adserv.viewReservations();
}

@GetMapping("/booking/{id}")
public ReservationBean meth9(@PathVariable(value = "id") int reservationId)
{
	return adserv.viewReservationById(reservationId);
	
}
//#####################	  UPDATE    ##########################
@PutMapping("/updateVehicle")
public String meth3(@RequestBody VehicleBean eb)
{
	adserv.updateVehicle(eb);
	return "<h1> Vehicle Updated successfully</h1>";
}
@GetMapping("/vehicle/{id}")
public VehicleBean meth4(@PathVariable(value = "id") int vehicleId)
{
	return adserv.viewVehicleById(vehicleId);
	
}
@PutMapping("/updateRoute")
public String meth3(@RequestBody RouteBean eb)
{
	adserv.updateRoute(eb);
	return "<h1> Vehicle Updated successfully</h1>";
}

@PutMapping("/updateDriver")
public String meth3(@RequestBody DriverBean eb)
{
	adserv.updateDriver(eb);
	return "<h1> Driver Updated successfully</h1>";
}

@PutMapping("/updateBooking")
public String meth3(@RequestBody ReservationBean eb)
{
	adserv.updateReservation(eb);
	return "<h1> Reservation Updated successfully</h1>";
}
//#####################	  DELETE    ##########################
@DeleteMapping("/deleteVehicle/{id}")
public String meth5(@PathVariable(value="id") int vehicleId)
{
	System.out.println(vehicleId);
	return "<h1>"+adserv.deleteVehicle(vehicleId)+" record deleted successfully</h1>";
}

@DeleteMapping("/deleteRoute/{id}")
public String meth55(@PathVariable(value="id") int routeId)
{
	System.out.println(routeId);
	return "<h1>"+adserv.deleteRoute(routeId)+" record deleted successfully</h1>";
}

@DeleteMapping("/deleteDriver/{id}")
public String meth35(@PathVariable(value="id") int driverId)
{
	System.out.println(driverId);
	return "<h1>"+adserv.deleteDriver(driverId)+" record deleted successfully</h1>";
}

}
