import axios from 'axios';
import React, { useState,useEffect } from "react";
import { Container,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import AD011 from "../Header/AD011";

function ModifyDriver() {
  const [driverId, setDriverId] = useState('');
  const[name, setName] = useState('')
  const[street, setStreet] = useState('')
  const[location, setLocation] = useState('')
  const[city, setCity] = useState('')
  const[state, setState] = useState('')
  const[pincode, setPincode] = useState('')
  const[mobileNo, setMobileNo] = useState('')
  const[licenseNumber, setLicenseNumber] = useState('')
  const [driverIds, setDriverIds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAllDriver')
      .then(response => {
        const driverIds = response.data.map(driver => driver.driverId);
        setDriverIds(driverIds);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  const handleClick=(e)=>{
    alert('Data updated successfully!');
    const driverData={driverId,name,street,location,city,state,pincode,mobileNo,licenseNumber }
    window.location.reload();
  axios.put("http://localhost:8080/admin/updateDriver", driverData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
    
  });
}

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD011/>
    <Container >
    <Paper elevation={9} style={ paperStyle} >

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"24%"}}>
    <FormLabel style={{fontSize:"25px"}}>UPDATE DRIVER DETAILS...</FormLabel>
    </FormControl>
<form onSubmit={handleClick} style={{ 
    display: "flex",flexDirection: "column",alignItems: "center",marginTop: "20px"}}>

<FormControl sx={{ m: 1, minWidth: 250 }}>
<FormLabel style={{fontSize:"17px"}}>DriverID</FormLabel>
  <select name="routeId" style={{height:'30px'}} value={driverId} onChange={(e)=>setDriverId(e.target.value)}>
     <option value="" disabled selected>Select</option>
        {driverIds.map(id => (
          <option key={id} value={id}>{id}</option>))}
      </select>
      </FormControl>

<FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Name</FormLabel>
    <input type="text" value={name}
      onChange={(e)=>setName(e.target.value)}/>

  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Street</FormLabel>
    <input
      type="text"
      value={street}
      onChange={(e)=>setStreet(e.target.value)}
    />
   
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Location</FormLabel>
    <input
      type="text"
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
    />
    
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>City</FormLabel>
    <input
      type="text"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
    />
   
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>State</FormLabel>
    <input
      type="text"
      value={state}
      onChange={(e)=>setState(e.target.value)}
    />
   
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>PIN code</FormLabel>
    <input
      type="text"
      value={pincode}
      onChange={(e)=>setPincode(e.target.value)}
    />
   
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Mobile No</FormLabel>
    <input
      type="number"
      value={mobileNo}
      onChange={(e)=>setMobileNo(e.target.value)}
    />
   
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>License Number</FormLabel>
    <input
      type="number"
      value={licenseNumber}
      onChange={(e)=>setLicenseNumber(e.target.value)}
    />
   
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

export default ModifyDriver
