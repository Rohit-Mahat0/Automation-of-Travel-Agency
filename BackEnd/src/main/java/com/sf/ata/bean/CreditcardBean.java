package com.sf.ata.bean;

import jakarta.persistence.*;

@Entity
@Table(name="CreditCard")
public class CreditcardBean
{
	@Id
private int creditCardNumber;
	@Column
private String validFrom;
	@Column
private String validTo;
	@Column
private String cvv;
	@Column
private String userId;
	public int getCreditCardNumber() {
		return creditCardNumber;
	}
	public void setCreditCardNumber(int creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}
	public String getValidFrom() {
		return validFrom;
	}
	public void setValidFrom(String validFrom) {
		this.validFrom = validFrom;
	}
	public String getValidTo() {
		return validTo;
	}
	public void setValidTo(String validTo) {
		this.validTo = validTo;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	@Override
	public String toString() {
		return "CreditcardBean [creditCardNumber=" + creditCardNumber + ", validFrom=" + validFrom + ", validTo="
				+ validTo + ", cvv=" + cvv + ", userId=" + userId + "]";
	}

}


