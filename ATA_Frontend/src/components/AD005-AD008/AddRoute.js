import React, { useState } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import AD005 from "../Header/AD005";

function AddRoute() {
  const[source, setSource] = useState('')
  const[destination, setDestination] = useState('')
  const[distance, setDistance] = useState('')
  const[travelDuration, setTravelDuration] = useState('')
  
  
  const [sourceError, setSourceError] = useState('');
  const [destinationError, setDestinationError] = useState('');
  const[distanceError, setDistanceError] = useState('')
  const[travelDurationError, setTravelDurationError] = useState('')
  

  const handleClick=(e)=>{
    if (!source) {
      setSourceError('Source is required.');
    } else {
      setSourceError('');
    }
  
    if (!destination) {
      setDestinationError('Destination is required.');
    } else {
      setDestinationError('');
    }
  
    if (!distance) {
      setDistanceError('Distance is required.');
    } else {
      setDistanceError('');
    }
    if (!travelDuration) {
      setTravelDurationError('Travel Duration is required.');
    } else {
      setTravelDurationError('');
    }
   
    if (source && destination && distance && travelDuration ) {
      alert('Data added successfully!');
    const Login={source,destination,distance,travelDuration}
    window.location.reload();
    fetch("http://localhost:8080/admin/addRoute",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Login)
  }).then(response => response.json())
  .catch(error => console.error(error));
}
 
}
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD005/>
    <Container>
    <Paper elevation={4} style={paperStyle}>

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"39%"}}>
    <FormLabel style={{fontSize:"25px"}}>ADD ROUTE</FormLabel>
    </FormControl>
<form onSubmit={handleClick} style={{ 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px"
  }}>
    <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Source</FormLabel>
    <input type="text" value={source}
      onChange={(e)=>setSource(e.target.value)}/>
{sourceError && <span style={{color:'red'}}>{sourceError}</span>}
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Destination</FormLabel>
    <input
      type="text"
      value={destination}
      onChange={(e)=>setDestination(e.target.value)}
    />
    {destinationError && <span style={{color:'red'}}>{destinationError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Distance(km)</FormLabel>
    <input
      type="number"
      value={distance}
      onChange={(e)=>setDistance(e.target.value)}
    />
    {distanceError && <span style={{color:'red'}}>{distanceError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Travel Duration(hr)</FormLabel>
    <input
      type="number"
      value={travelDuration}
      onChange={(e)=>setTravelDuration(e.target.value)}
    />
    {travelDurationError && <span style={{color:'red'}}>{travelDurationError}</span>}
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

export default AddRoute
