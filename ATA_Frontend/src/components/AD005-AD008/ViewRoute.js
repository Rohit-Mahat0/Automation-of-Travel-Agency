import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import AD007 from "../Header/AD007";

function ViewRoute() {
  const [routeData, setRouteData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAllRoute')
      .then(response => {
        setRouteData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD007/>
    <Container>
     <Paper elevation={4} style={paperStyle}>
     <div>
     <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"33%"}}>
        <FormLabel style={{fontSize:"25px"}}>ROUTE RECORDS...</FormLabel>
        </FormControl>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Route Id</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Source</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Destination</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Distance</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Travel Duration</th>
          </tr>
        </thead>
        <tbody>
          {routeData.map(route => (
            <tr key={route.routeId} style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{route.routeId}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{route.source}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{route.destination}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{route.distance}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{route.travelDuration}</td>
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

export default ViewRoute;
