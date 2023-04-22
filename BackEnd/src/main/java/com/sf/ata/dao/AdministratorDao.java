package com.sf.ata.dao;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sf.ata.bean.CredentialsBean;
import com.sf.ata.bean.CreditcardBean;
import com.sf.ata.bean.DriverBean;
import com.sf.ata.bean.ProfileBean;
import com.sf.ata.bean.ReservationBean;
import com.sf.ata.bean.RouteBean;
import com.sf.ata.bean.VehicleBean;
@Repository
public class AdministratorDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query<VehicleBean> q; 
	private Query<RouteBean> q1;
	private Query<DriverBean> q2;
	private Query<ReservationBean> q3;
	public  String registerUser(CredentialsBean user)
	{
		System.out.println("Under Dao "+user.getUserID()+" "+user.getPassword());
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		session.save(user);
		transaction.commit();
		session.close();
		return "SUCCESS";
	}
	public boolean authenticate(CredentialsBean user) 
	{
		System.out.println("Under Dao "+user.getUserID()+" "+user.getPassword());
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		Query q3=session.createQuery("from CredentialsBean where userID=:uid and password=:pss");
		q3.setParameter("uid", user.getUserID());
		q3.setParameter("pss", user.getPassword());
		ArrayList<CredentialsBean> al=(ArrayList<CredentialsBean>) q3.getResultList();
		int count=0;
		for(CredentialsBean cb:al)
		{
			if((cb.getUserID().equals(user.getUserID()))&&(cb.getPassword().equals(user.getPassword())))
			{
				System.out.println("Record is  present"+cb.getUserID()+" "+cb.getPassword());
				count++;
				if(count>0)
				{
		return true;
				}
				else
				{
					return false;
				}
			}
		}
		return false;
		
	}

	//#####################	  ADD    ##########################
	public String addVehicle(VehicleBean vehicleBean) 
	{
		if(vehicleBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(vehicleBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(vehicleBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String addRoute(RouteBean routeBean) 
	{
		if(routeBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(routeBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(routeBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String addDriver(DriverBean driverBean) 
	{
		if(driverBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(driverBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(driverBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String addProfile(ProfileBean profileBean) 
	{
		if(profileBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(profileBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(profileBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String addReservation(ReservationBean reservationBean) 
	{
		if(reservationBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(reservationBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(reservationBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String addCreditcard(CreditcardBean creditcardBean) 
	{
		if(creditcardBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(creditcardBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(creditcardBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	//#####################	  UPDATE    ##########################
	public String updateVehicle(VehicleBean vehicleBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(vehicleBean!=null)
		{
		session.update(vehicleBean);

		transaction.commit();

		session.close();
		return "SUCCESS";
		}
		else if(vehicleBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	
	public String updateRoute(RouteBean routeBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(routeBean!=null)
		{
		session.update(routeBean);

		transaction.commit();

		session.close();
		return "SUCCESS";
		}
		else if(routeBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	
	public String updateDriver(DriverBean driverBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(driverBean!=null)
		{
		session.update(driverBean);

		transaction.commit();

		session.close();
		return "SUCCESS";
		}
		else if(driverBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	
	public String updateReservation(ReservationBean reservationBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(reservationBean!=null)
		{
		session.update(reservationBean);

		transaction.commit();

		session.close();
		return "SUCCESS";
		}
		else if(reservationBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	//#####################	  DELETE    ##########################
	public String deleteVehicle(int vehicleId)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(vehicleId>=0)
		{
		Query q1=session.createQuery("delete from VehicleBean where vehicleId=:eid");
		q1.setParameter("eid", vehicleId);
		q1.executeUpdate();
transaction.commit();
session.close();
		return "SUCCESS";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String deleteRoute(int routeId)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(routeId>=0)
		{
		Query q1=session.createQuery("delete from RouteBean where routeId=:eid");
		q1.setParameter("eid", routeId);
		q1.executeUpdate();
transaction.commit();
session.close();
		return "SUCCESS";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String deleteDriver(int driverId)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(driverId>=0)
		{
		Query q1=session.createQuery("delete from DriverBean where driverId=:eid");
		q1.setParameter("eid", driverId);
		q1.executeUpdate();
transaction.commit();
session.close();
		return "SUCCESS";
		}
		else
		{
			return "FAIL";
		}
	}
	//#####################	  VIEW    ##########################
	public ArrayList<VehicleBean> viewVehicles()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q=session.createQuery("from VehicleBean");
		return (ArrayList<VehicleBean>) q.list();
	}
	public VehicleBean viewVehicleById(int vehicleId)
	{
		VehicleBean elBean=new VehicleBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<VehicleBean> q2=session.createQuery("from VehicleBean where vehicleId=:eid");
	q2.setParameter("eid", vehicleId);
	ArrayList<VehicleBean> all=(ArrayList<VehicleBean>) q2.getResultList();
	for(VehicleBean e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}
	
	public ArrayList<RouteBean> viewRoutes()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q1=session.createQuery("from RouteBean");
		return (ArrayList<RouteBean>) q1.list();
	}
	public RouteBean viewRouteById(int routeId)
	{
		RouteBean elBean=new RouteBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<RouteBean> q2=session.createQuery("from RouteBean where routeId=:eid");
	q2.setParameter("eid", routeId);
	ArrayList<RouteBean> all=(ArrayList<RouteBean>) q2.getResultList();
	for(RouteBean e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}
	
	public ArrayList<DriverBean> viewDrivers()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q2=session.createQuery("from DriverBean");
		return (ArrayList<DriverBean>) q2.list();
	}
	public DriverBean viewDriverById(int driverId)
	{
		DriverBean elBean=new DriverBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<DriverBean> q2=session.createQuery("from DriverBean where driverId=:eid");
	q2.setParameter("eid", driverId);
	ArrayList<DriverBean> all=(ArrayList<DriverBean>) q2.getResultList();
	for(DriverBean e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}
	

public ArrayList<ReservationBean> viewReservations()
{
	session=sessionFactory.openSession();
	transaction=session.beginTransaction();
	q3=session.createQuery("from ReservationBean");
	return (ArrayList<ReservationBean>) q3.list();
}
public ReservationBean viewReservationById(int reservationId)
{
	ReservationBean elBean=new ReservationBean();
	session=sessionFactory.openSession();
	transaction=session.beginTransaction();
Query<ReservationBean> q2=session.createQuery("from ReservationBean where reservationId=:eid");
q2.setParameter("eid", reservationId);
ArrayList<ReservationBean> all=(ArrayList<ReservationBean>) q2.getResultList();
for(ReservationBean e1:all)
{
	elBean=e1;
}
return elBean;
}

}