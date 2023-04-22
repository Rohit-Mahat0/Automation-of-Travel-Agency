package com.sf.ata.bean;

import jakarta.persistence.*;

@Entity
@Table(name = "Route")
public class RouteBean {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int routeId;
	@Column
	private String source;
	@Column
	private String destination;
	@Column
	private int distance;
	@Column
    private int travelDuration;

	public int getRouteId() {
		return routeId;
	}

	public void setRouteId(int routeId) {
		this.routeId = routeId;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getDistance() {
		return distance;
	}

	public void setDistance(int distance) {
		this.distance = distance;
	}

	public int getTravelDuration() {
		return travelDuration;
	}

	public void setTravelDuration(int travelDuration) {
		this.travelDuration = travelDuration;
	}

	@Override
	public String toString() {
		return "Route [routeId=" + routeId + ", source=" + source + ", destination=" + destination + ", distance="
				+ distance + ", travelDuration=" + travelDuration + "]";
	}
	
}
