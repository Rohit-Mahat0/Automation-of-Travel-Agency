import React, { useState } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import AD009 from "../Header/AD009";

function AddDriver() {
  const[name, setName] = useState('')
  const[street, setStreet] = useState('')
  const[location, setLocation] = useState('')
  const[city, setCity] = useState('')
  const[state, setState] = useState('')
  const[pincode, setPincode] = useState('')
  const[mobileNo, setMobileNo] = useState('')
  const[licenseNumber, setLicenseNumber] = useState('')
  
  const[nameError, setNameError] = useState('')
  const[streetError, setStreetError] = useState('')
  const[locationError, setLocationError] = useState('')
  const[cityError, setCityError] = useState('')
  const[stateError, setStateError] = useState('')
  const[pincodeError, setPincodeError] = useState('')
  const[mobileNoError, setMobileNoError] = useState('')
  const[licenseNumberError, setLicenseNumberError] = useState('')
  

  const handleClick=(e)=>{
    if (!name) {
      setNameError('Name is required.');
    } else {
      setNameError('');
    }
  
    if (!street) {
      setStreetError('Street is required.');
    } else {
      setStreetError('');
    }
  
    if (!location) {
      setLocationError('Location is required.');
    } else {
      setLocationError('');
    }
    if (!city) {
      setCityError('City is required.');
    } else {
      setCityError('');
    }
    if (!state) {
      setStateError('State is required.');
    } else {
      setStateError('');
    }
    if (!pincode) {
      setPincodeError('Pin code is required.');
    } else {
      setPincodeError('');
    }
    if (!mobileNo) {
      setMobileNoError('Mobile no is required.');
    } else {
      setMobileNoError('');
    }
    if (!licenseNumber) {
      setLicenseNumberError('License no is required.');
    } else {
      setLicenseNumberError('');
    }
   
    if (name && street && location && city && state && pincode && mobileNo && licenseNumber ) {
      alert('Data added successfully!');
    const Login={name , street , location , city , state , pincode , mobileNo , licenseNumber }
    window.location.reload();
    fetch("http://localhost:8080/admin/addDriver",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Login)
  }).then(response => response.json())
  .catch(error => console.error(error));
}
 
}
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD009/>
    <Container>
    <Paper elevation={4} style={paperStyle}>

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"39%"}}>
    <FormLabel style={{fontSize:"25px"}}>ADD DRIVER</FormLabel>
    </FormControl>
<form onSubmit={handleClick} style={{ 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px"
  }}>
    <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Name</FormLabel>
    <input type="text" value={name}
      onChange={(e)=>setName(e.target.value)}/>
{nameError && <span style={{color:'red'}}>{nameError}</span>}
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Street</FormLabel>
    <input
      type="text"
      value={street}
      onChange={(e)=>setStreet(e.target.value)}
    />
    {streetError && <span style={{color:'red'}}>{streetError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Location</FormLabel>
    <input
      type="text"
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
    />
    {locationError && <span style={{color:'red'}}>{locationError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>City</FormLabel>
    <input
      type="text"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
    />
    {cityError && <span style={{color:'red'}}>{cityError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>State</FormLabel>
    <input
      type="text"
      value={state}
      onChange={(e)=>setState(e.target.value)}
    />
    {stateError && <span style={{color:'red'}}>{stateError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>PIN code</FormLabel>
    <input
      type="number"
      value={pincode}
      onChange={(e)=>setPincode(e.target.value)}
    />
    {pincodeError && <span style={{color:'red'}}>{pincodeError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Mobile No</FormLabel>
    <input
      type="number"
      value={mobileNo}
      onChange={(e)=>setMobileNo(e.target.value)}
    />
    {mobileNoError && <span style={{color:'red'}}>{mobileNoError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>License Number</FormLabel>
    <input
      type="number"
      value={licenseNumber}
      onChange={(e)=>setLicenseNumber(e.target.value)}
    />
    {licenseNumberError && <span style={{color:'red'}}>{licenseNumberError}</span>}
 </FormControl>


 <FormControl sx={{ m: 1, minWidth: 50 }}>
  <Button  variant="contained" color="primary" onClick={handleClick}>add</Button>
  </FormControl>
  
</form>
</Paper>
</Container>
</div>
  )
}

export default AddDriver
