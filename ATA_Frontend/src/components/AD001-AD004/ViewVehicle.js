import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import AD003 from "../Header/AD003";

function ViewVehicle() {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAll')
      .then(response => {
        setVehicleData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

 
const paperStyle={padding:'50px 20px', width:710,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD003/>
    <Container>
     <Paper elevation={4} style={paperStyle}>
     <div>
     <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"33%"}}>
        <FormLabel style={{fontSize:"25px"}}>VEHICLE RECORDS...</FormLabel>
        </FormControl>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Vehicle ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Type</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Registration Number</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Seat Capacity</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Fare/km</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map(vehicle => (
            <tr key={vehicle.vehicleId} style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.vehicleId}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.name}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.type}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.registrationnumber}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.seatcapacity}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.totalFare}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
        
     </Paper>
    </Container>
    </div>
  );
}

export default ViewVehicle;
