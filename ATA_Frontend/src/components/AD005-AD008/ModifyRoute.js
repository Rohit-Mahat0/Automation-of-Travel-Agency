import axios from 'axios';
import React, { useState,useEffect } from "react";
import { Container,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import AD008 from "../Header/AD008";

function ModifyRoute() {
  const[routeId, setRouteId] = useState('')
  const[source, setSource] = useState('')
  const[destination, setDestination] = useState('')
  const[distance, setDistance] = useState('')
  const[travelDuration, setTravelDuration] = useState('')
  const [routeIds, setRouteIds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAllRoute')
      .then(response => {
        const routeIds = response.data.map(route => route.routeId);
        setRouteIds(routeIds);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  const handleClick=(e)=>{
    alert('Data updated successfully!');
    const routeData={routeId,source,destination,distance,travelDuration}
  axios.put("http://localhost:8080/admin/updateRoute", routeData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
    
  });
}

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD008/>
    <Container >
    <Paper elevation={9} style={ paperStyle} >

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"24%"}}>
    <FormLabel style={{fontSize:"25px"}}>UPDATE ROUTE DETAILS...</FormLabel>
    </FormControl>
<form onSubmit={handleClick} style={{ 
    display: "flex",flexDirection: "column",alignItems: "center",marginTop: "20px"}}>


<FormControl sx={{ m: 1, minWidth: 250 }}>
<FormLabel style={{fontSize:"17px"}}>RouteID</FormLabel>
  <select name="routeId" style={{height:'30px'}} value={routeId} onChange={(e)=>setRouteId(e.target.value)}>
     <option value="" disabled selected>Select</option>
        {routeIds.map(id => (
          <option key={id} value={id}>{id}</option>))}
      </select>
      </FormControl> 

    <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Source</FormLabel>
    <input type="text" name="source" value={source} onChange={(e)=>setSource(e.target.value)}/>
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Destination</FormLabel>
    <input type="text" name="destination" value={destination} onChange={(e)=>setDestination(e.target.value)}/>
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Distance</FormLabel>
    <input type="number" name="distance" value={distance} 
    onChange={(e)=>setDistance(e.target.value)}/>
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Travel Duration</FormLabel>
    <input type="number" name="travelDuration" value={travelDuration} 
    onChange={(e)=>setTravelDuration(e.target.value)}/>
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

export default ModifyRoute
