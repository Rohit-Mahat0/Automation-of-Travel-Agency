import axios from 'axios';
import React, { useState,useEffect } from "react";
import { Container,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import US004 from "../Header/US004";

function CancelBooking() {
    const [reservationId, setReservationId] = useState('');
    const [bookingStatus, setBookingStatus] = useState('Pending');
   
  
  const handleClick=(e)=>{
    alert('Data updated successfully!');
    const vehicleData={reservationId,bookingStatus}
  axios.put("http://localhost:8080/admin/updateBooking", vehicleData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
    
  });
}

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <US004/>
    <Container >
    <Paper elevation={9} style={ paperStyle} >

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"24%"}}>
    <FormLabel style={{fontSize:"25px"}}>CANCEL YOUR BOOKING...</FormLabel>
    </FormControl>
<form onSubmit={handleClick} style={{ 
    display: "flex",flexDirection: "column",alignItems: "center",marginTop: "20px"}}>


 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Reservation Id</FormLabel>
    <input type="number"  value={reservationId} 
    onChange={(e)=>setReservationId(e.target.value)} />
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 50 }}>
  <Button onClick={handleClick} variant="contained" color="primary" type="submit">Cancel</Button>
  </FormControl>
  
</form>
</Paper>
</Container>
</div>
  )
}

export default CancelBooking
