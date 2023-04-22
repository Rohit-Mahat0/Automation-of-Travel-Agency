package com.sf.ata.bean;

import jakarta.persistence.*;
@Entity
@Table(name="ATA_TBL_USERS_CREDENTIALS")
public class CredentialsBean {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int uid;
@Column
private String userID;
@Column
private  String password;
@Column
private String userType;
@Column
private int loginStatus;
public int getUid() {
	return uid;
}
public void setUid(int uid) {
	this.uid = uid;
}
public String getUserID() {
	return userID;
}
public void setUserID(String userID) {

	this.userID=userID;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password=password;
}
public String getUserType() {
	return userType;
}
public void setUserType(String userType) {
	this.userType = userType;
}
public int getLoginStatus() {
	return loginStatus;
}
public void setLoginStatus(int loginStatus) {
	this.loginStatus = loginStatus;
}

}
