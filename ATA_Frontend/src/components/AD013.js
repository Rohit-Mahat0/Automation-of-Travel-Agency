import React, { useState } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import Head from "./Header/Head";

import axios from "axios";

function AD013() {
  const [reservationId, setReservationId] = useState("");
  const [bookingData, setBookingData] = useState(null);

 
    function handlePrint() {
      window.print();
    }

  async function handleSearch() {
    try {
      const response = await axios.get(`http://localhost:8080/admin/booking/${reservationId}`);
      setBookingData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const paperStyle={padding:'50px 20px', width:900,margin:"20px auto", backgroundColor:"#DAE3F3"}
  return (
    <div>
       <Head/>
  <Container>
  <Paper elevation={4} style={paperStyle} >
    <FormControl sx={{ m: 0, minWidth: 500, marginLeft:"40%"}} >
    <FormLabel style={{fontSize:"20px"}}> CHECK TICKET</FormLabel>
    
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 200 , marginLeft:35, height:75}} >
    <input type="text" placeholder="Enter your Reservation Id" style={{height:'50%'}} value={reservationId} onChange={(e) => setReservationId(e.target.value)} />
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 50 }} >
      <Button  variant="contained" color="primary"  onClick={handleSearch}>Search</Button>
      </FormControl>
    
      
      {bookingData && (
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
        <tr style={{ border: '1px solid black' }}>
          
          <th style={{ border: '1px solid black', padding: '8px' }}>journeyDate</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>bookingDate</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>boardingPoint</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>dropPoint</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Fare/km</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>noOfPassegers</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>vehicleId</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>reservationId</th>
        </tr>
      </thead>
       <tr key={bookingData.reservationId} style={{ border: '1px solid black' }}>
            
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.journeyDate}</td>
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.bookingDate}</td>
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.boardingPoint}</td>
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.dropPoint}</td>
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.totalFare}</td>
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.noOfPassegers}</td>
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.vehicleId}</td>
       <td style={{ border: '1px solid black', padding: '8px' }}>{bookingData.reservationId}</td>
     </tr>
     </table>


      )}
       </Paper>
  
  </Container>
    </div>
  );
}

export default AD013;
