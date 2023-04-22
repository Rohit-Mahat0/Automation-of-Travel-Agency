package com.sf.ata.bean;

import java.sql.Date;

import javax.validation.constraints.NotNull;

import jakarta.persistence.*;
@Entity
@Table(name = "reservation")
public class ReservationBean {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reservationId;
	@Column
    private String userId;
	@Column
    private String routeId;
	@Column
    private String vehicleId;
	@Column
	private Date bookingDate;
	@Column
    private Date journeyDate;
	@Column
    private String driverId;
	@Column
	private String bookingStatus;
	@Column
	private int totalFare;
	@Column
	private String boardingPoint;
	@Column
	private String dropPoint;
	@Column
	private String noOfPassegers;
	public int getReservationId() {
		return reservationId;
	}
	public void setReservationId(int reservationId) {
		this.reservationId = reservationId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getRouteId() {
		return routeId;
	}
	public void setRouteId(String routeId) {
		this.routeId = routeId;
	}
	public String getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}
	public Date getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}
	public Date getJourneyDate() {
		return journeyDate;
	}
	public void setJourneyDate(Date journeyDate) {
		this.journeyDate = journeyDate;
	}
	public String getDriverId() {
		return driverId;
	}
	public void setDriverId(String driverId) {
		this.driverId = driverId;
	}
	public String getBookingStatus() {
		return bookingStatus;
	}
	public void setBookingStatus(String bookingStatus) {
		this.bookingStatus = bookingStatus;
	}
	public int getTotalFare() {
		return totalFare;
	}
	public void setTotalFare(int totalFare) {
		this.totalFare = totalFare;
	}
	public String getBoardingPoint() {
		return boardingPoint;
	}
	public void setBoardingPoint(String boardingPoint) {
		this.boardingPoint = boardingPoint;
	}
	public String getDropPoint() {
		return dropPoint;
	}
	public void setDropPoint(String dropPoint) {
		this.dropPoint = dropPoint;
	}
	public String getNoOfPassegers() {
		return noOfPassegers;
	}
	public void setNoOfPassegers(String noOfPassegers) {
		this.noOfPassegers = noOfPassegers;
	}
	@Override
	public String toString() {
		return "ReservationBean [reservationId=" + reservationId + ", userId=" + userId + ", routeId=" + routeId
				+ ", vehicleId=" + vehicleId + ", bookingDate=" + bookingDate + ", journeyDate=" + journeyDate
				+ ", driverId=" + driverId + ", bookingStatus=" + bookingStatus + ", totalFare=" + totalFare
				+ ", boardingPoint=" + boardingPoint + ", dropPoint=" + dropPoint + ", noOfPassegers=" + noOfPassegers
				+ "]";
	}
	
}




