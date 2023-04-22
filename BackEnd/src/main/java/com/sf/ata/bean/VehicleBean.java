package com.sf.ata.bean;

import jakarta.persistence.*;

@Entity
@Table(name="Vehicle")
public class VehicleBean
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private int vehicleId;
	@Column
private String name;
	@Column
private String type;
	@Column
private String registrationnumber;
	@Column
private String seatcapacity;
	@Column
private String totalFare;
	public int getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getRegistrationnumber() {
		return registrationnumber;
	}
	public void setRegistrationnumber(String registrationnumber) {
		this.registrationnumber = registrationnumber;
	}
	public String getSeatcapacity() {
		return seatcapacity;
	}
	public void setSeatcapacity(String seatcapacity) {
		this.seatcapacity = seatcapacity;
	}
	public String getTotalFare() {
		return totalFare;
	}
	public void setTotalFare(String totalFare) {
		this.totalFare = totalFare;
	}
	@Override
	public String toString() {
		return "VehicleBean [vehicleId=" + vehicleId + ", name=" + name + ", type=" + type + ", registrationnumber="
				+ registrationnumber + ", seatcapacity=" + seatcapacity + ", totalFare=" + totalFare + "]";
	}

}


