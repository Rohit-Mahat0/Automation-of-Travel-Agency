import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import US002 from "../Header/US002";
import Table from "../US001-US005/Table";



function ViewVehicleRoute() {
  const [routeData, setRouteData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);
  const[source, setSource] = useState([])
  const [routeIds, setRouteIds] = useState([]);
  const[destination, setDestination] = useState([])
  const [tableVisible, setTableVisible] = useState(false);

  function handleButtonClick() {
    setTableVisible(!tableVisible);
  }
 
  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAllRoute')
      .then(response => {
        setRouteIds(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  

  useEffect(() => {
    
    axios.get('http://localhost:8080/admin/selectAll')
      .then(response => {
        setVehicleData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

 
const currentDate = new Date().toISOString().slice(0, 10);
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}

  return (<div >
    <US002/>
    <Container>
     <Paper elevation={4} style={paperStyle}>
     <div>
     <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"25%"}}>
        <FormLabel style={{fontSize:"25px"}}>ROUTE VEHICLE DETAILS...</FormLabel>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 170 }}>
    <FormLabel style={{fontSize:"15px"}}>Select the Journey Date</FormLabel>
    <input type="date"  min={currentDate} style={{height:"31px",fontSize:"14px"}}/>
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 170 }}>
<FormLabel style={{fontSize:"15px"}}>Source</FormLabel>
<select id="source" style={{height:"31px",fontSize:"14px"}}>
<option value="" disabled selected>Select</option>
        {routeIds.map(option => (
          <option key={option.id} value={option.id}>{option.source}</option>
        ))}
      </select>
      </FormControl> 

      <FormControl sx={{ m: 1, minWidth: 170 }}>
<FormLabel style={{fontSize:"15px"}}>Destination</FormLabel>
<select id="destination" style={{height:"31px",fontSize:"14px"}}>
<option value="" disabled selected>Select</option>
        {routeIds.map(option => (
          <option key={option.id} value={option.id}>{option.destination}</option>
        ))}
      </select>
     
      </FormControl> 
      
      <FormControl sx={{ m: 1, minWidth: 100 }}>
  <Button onClick={handleButtonClick} variant="contained" color="primary" type="submit">Vehicle Details</Button>
  {tableVisible && <Table/>}
  </FormControl>

{/* <button onClick={handleButtonClick}>Show Vehicle</button>
      {tableVisible && <Table/>} */}
  </div>
        
     </Paper>
    </Container>
    </div>
  );
}

export default ViewVehicleRoute;
