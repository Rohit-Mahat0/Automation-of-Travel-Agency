package com.sf.ata.bean;

import jakarta.persistence.*;

@Entity
@Table(name="Driver")
public class DriverBean
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int driverId;
	@Column
	private String name;
	@Column
	private String street;
	@Column
	private String location;
	@Column
    private String city;
	@Column
	private String state;
	@Column
	private String pincode;
	@Column
	private String mobileNo;
	@Column
	private String licenseNumber;
	public int getDriverId() {
		return driverId;
	}
	public void setDriverId(int driverId) {
		this.driverId = driverId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getLicenseNumber() {
		return licenseNumber;
	}
	public void setLicenseNumber(String licenseNumber) {
		this.licenseNumber = licenseNumber;
	}
	@Override
	public String toString() {
		return "DriverBean [driverId=" + driverId + ", name=" + name + ", street=" + street + ", location=" + location
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + ", mobileNo=" + mobileNo
				+ ", licenseNumber=" + licenseNumber + "]";
	}
	
}


