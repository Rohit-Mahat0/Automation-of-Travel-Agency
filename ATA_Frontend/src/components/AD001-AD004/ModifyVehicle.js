import axios from 'axios';
import React, { useState,useEffect } from "react";
import { Container,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import AD004 from "../Header/AD004";

function ModifyVehicle() {
  const[vehicleId, setVehicleId] = useState('')
  const[name, setName] = useState('')
  const[type, setType] = useState('')
  const[registrationnumber, setRegistrationnumber] = useState('')
  const[seatcapacity, setSeatcapacity] = useState('')
  const[fareperkm, setFareperkm] = useState('')
  const [vehicleIds, setVehicleIds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAll')
      .then(response => {
        const vehicleIds = response.data.map(vehicle => vehicle.vehicleId);
        setVehicleIds(vehicleIds);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  const handleClick=(e)=>{
    alert('Data updated successfully!');
    const vehicleData={vehicleId,name,type,registrationnumber,seatcapacity,fareperkm}
  axios.put("http://localhost:8080/admin/updateVehicle", vehicleData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
    
  });
}

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div>
    <AD004/>
    <Container >
    <Paper elevation={9} style={ paperStyle} >

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"24%"}}>
    <FormLabel style={{fontSize:"25px"}}>UPDATE VEHICLE DETAILS...</FormLabel>
    </FormControl>
<form onSubmit={handleClick} style={{ 
    display: "flex",flexDirection: "column",alignItems: "center",marginTop: "20px"}}>


<FormControl sx={{ m: 1, minWidth: 250 }}>
<FormLabel style={{fontSize:"17px"}}>VehicleID</FormLabel>
  <select name="vehicleId" style={{height:'30px'}} value={vehicleId} onChange={(e)=>setVehicleId(e.target.value)}>
     <option value="" disabled selected>Select</option>
        {vehicleIds.map(id => (
          <option key={id} value={id}>{id}</option>))}
      </select>
      </FormControl> 

    <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Name</FormLabel>
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Type</FormLabel>
    <input type="text" name="type" value={type} onChange={(e)=>setType(e.target.value)}/>
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Registration Number</FormLabel>
    <input type="number" name="registrationnumber" value={registrationnumber} 
    onChange={(e)=>setRegistrationnumber(e.target.value)}/>
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Seating Capacity</FormLabel>
    <input type="number" name="seatcapacity" value={seatcapacity} 
    onChange={(e)=>setSeatcapacity(e.target.value)}/>
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Fare/km</FormLabel>
    <input type="number" name="fareperkm" value={fareperkm} 
    onChange={(e)=>setFareperkm(e.target.value)} />
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 50 }}>
  <Button  variant="contained" color="primary" type="submit">Update</Button>
  </FormControl>
  
</form>
</Paper>
</Container>
</div>
  )
}

export default ModifyVehicle
