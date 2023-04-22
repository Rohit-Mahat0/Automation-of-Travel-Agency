import React, { useState } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import AD001 from "../Header/AD001";

function AddVehicle() {
  const[name, setName] = useState('')

  const[type, setType] = useState('')
  const[registrationnumber, setRegistrationnumber] = useState('')
  const[seatcapacity, setSeatcapacity] = useState('')
  const[totalFare, setTotalFare] = useState('')
  
  const [nameError, setNameError] = useState('');
  const [typeError, setTypeError] = useState('');
  const[registrationnumberError, setRegistrationnumberError] = useState('')
  const[seatcapacityError, setSeatcapacityError] = useState('')
  const[totalFareError, setTotalFareError] = useState('')

  const handleClick=(e)=>{
    if (!name) {
      setNameError('Name is required.');
    } else {
      setNameError('');
    }
  
    if (!type) {
      setTypeError('Type is required.');
    } else {
      setTypeError('');
    }
  
    if (!registrationnumber) {
      setRegistrationnumberError('Registration Number is required.');
    } else {
      setRegistrationnumberError('');
    }
    if (!seatcapacity) {
      setSeatcapacityError('Seat Capacity is required.');
    } else {
      setSeatcapacityError('');
    }
    if (!totalFare) {
      setTotalFareError('TotalFare is required.');
    } else {
      setTotalFareError('');
    }
    if (name && type && seatcapacity && registrationnumber && totalFare) {
      alert('Data added successfully!');
    const Login={name,type,registrationnumber,seatcapacity,totalFare}
    window.location.reload();
    fetch("http://localhost:8080/admin/addVehicle",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Login)
  }).then(response => response.json())
  .catch(error => console.error(error));
}
 
}
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto", backgroundColor:"#DAE3F3"}
  return (<div style={{backgroundColor:"#B4C7E7"}}>
    <AD001/>
    <Container>
    <Paper elevation={4} style={paperStyle}>

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"39%"}}>
    <FormLabel style={{fontSize:"25px"}}>Add Vehicle</FormLabel>
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
    <FormLabel style={{fontSize:"17px"}}>Type</FormLabel>
    <input
      type="text"
      value={type}
      onChange={(e)=>setType(e.target.value)}
    />
    {typeError && <span style={{color:'red'}}>{typeError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Registration Number</FormLabel>
    <input
      type="number"
      value={registrationnumber}
      onChange={(e)=>setRegistrationnumber(e.target.value)}
    />
    {registrationnumberError && <span style={{color:'red'}}>{registrationnumberError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Seating Capacity</FormLabel>
    <input
      type="number"
      value={seatcapacity}
      onChange={(e)=>setSeatcapacity(e.target.value)}
    />
    {seatcapacityError && <span style={{color:'red'}}>{seatcapacityError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Fare/km</FormLabel>
    <input
      type="number"
      value={totalFare}
      onChange={(e)=>setTotalFare(e.target.value)}
    />
    {totalFareError && <span style={{color:'red'}}>{totalFareError}</span>}
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

export default AddVehicle
