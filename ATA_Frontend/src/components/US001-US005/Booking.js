import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import US003 from "../Header/US003";

function Booking() {

  const [userId, setUserId] = useState('US-001');
  const [routeId, setRouteId] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [driverId, setDriverId] = useState('');
  const [bookingStatus, setBookingStatus] = useState('Pending');
  const [totalFare, setTotalFare] = useState('');
  const [boardingPoint, setBoardingPoint] = useState('');
  const [dropPoint, setDropPoint] = useState('');
  const [vehicleData, setVehicleData] = useState([]);
  const [source, setSource] = useState([])
  const [routeIds, setRouteIds] = useState([]);
  const [destination, setDestination] = useState([])
  const [tableVisible, setTableVisible] = useState(false);
  const [noOfPassegers, setNoOfPassegers] = useState(1);
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [validFrom, setValidFrom] = useState('');
  const [validTo, setValidTo] = useState('');
  const [cvv, setCvv] = useState('');

  const handleClick1=(event)=>{
    const creditCard={creditCardNumber,validFrom,validTo,cvv,userId}
    fetch("http://localhost:8080/admin/creditcard",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(creditCard)
    }).then(response => response.json())
    .catch(error => console.error(error));
    }


  const handleClick=(e)=>{
    e.preventDefault();
    const booking={userId,routeId,vehicleId,bookingDate:currentDate,journeyDate,driverId,bookingStatus,
        totalFare,boardingPoint,dropPoint,noOfPassegers}

        fetch("http://localhost:8080/admin/Booking",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(booking)
      }).then(response => response.json())
      .catch(error => console.error(error));
    }
     

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAllRoute')
      .then(response => {
        setRouteIds(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [`http://localhost:8080/admin/selectAllRoute`]);

  function handleSelectChange1(event) {
    const selectedValue = event.target.value;
    setRouteId(selectedValue);

    const selectedData = routeIds.find(item => item.source === selectedValue);
    setRouteId(selectedData.routeId);
  }

 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/admin/selectAll`);
        const data = await response.json();
        setVehicleData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [`http://localhost:8080/admin/selectAll`]);
  
 
  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    setTotalFare(selectedValue);

    const selectedValue1 = event.target.value;
    setVehicleId(selectedValue1);

    const selectedData = vehicleData.find(item => item.name === selectedValue);
    setTotalFare(selectedData.totalFare);

    const selectedData1 = vehicleData.find(item => item.name === selectedValue1);
    setVehicleId(selectedData1.vehicleId);
  }
  

const currentDate = new Date().toISOString().slice(0, 10);
const paperStyle={padding:'50px 80px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}

  return (<div >
    <US003/>
    <Container>
    <form onSubmit={handleClick} > 
     <Paper elevation={5} style={paperStyle}>
    <div>
     
     <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"25%"}}>
        <FormLabel style={{fontSize:"25px"}}>BOOK YOUR TICKET...</FormLabel>
        </FormControl>
    
        <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>Select the Journey Date</FormLabel>
    <input type="date"  min={currentDate} style={{height:"31px",fontSize:"14px"}}
    value={journeyDate} onChange={(e)=>setJourneyDate(e.target.value)}/>
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>No of Passenger</FormLabel>
    <input type="number" min={1} value={noOfPassegers} onChange={(event) => setNoOfPassegers(event.target.value)}/>
    </FormControl> 
<div>
    
  <FormControl sx={{ m: 1, minWidth: 200 }}>
  <FormLabel style={{fontSize:"15px"}}>Source</FormLabel>
  <select id="source" style={{height:"31px",fontSize:"14px"}} onChange={handleSelectChange1}>
  <option value="" disabled selected>Select</option>
        {routeIds.map(option => (
          <option key={option.id} value={option.id}>{option.source}</option>
        ))}
      </select>
      </FormControl> 

     
      
      <FormControl sx={{ m: 1, minWidth: 200 }}>
<FormLabel style={{fontSize:"15px"}}>Destination</FormLabel>
<select id="destination" style={{height:"31px",fontSize:"14px"}} >
<option value="" disabled selected>Select</option>
        {routeIds.map(option => (
          <option key={option.id} value={option.id}>{option.destination}</option>
        ))}
      </select>
      </FormControl> 
      </div>
    
      <FormControl sx={{ m: 1, minWidth: 200 }}>
            <FormLabel style={{fontSize:"15px"}}>Vehicle</FormLabel>
            <select style={{height:"40px"}} labelId="demo-simple-select-label" id="demo-simple-select"  
            onChange={handleSelectChange} fullWidth>
          <option style={{fontSize:"15px"}} value="" >-Select-</option>
         {vehicleData.map((option) => (
        <option style={{fontSize:"15px"}} key={option.id} value={option.value}>{option.name}</option>))}
    </select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 200 }}>
      <FormLabel style={{fontSize:"15px"}}>Total Fare</FormLabel>
      {totalFare !== '' && (
      <input  style={{height:"40px",fontSize:"15px"}} id="outlined-basic" label="Total Fare" variant="outlined" fullWidth 
      value={totalFare} disabled={true}
      onChange={(e)=>setTotalFare(e.target.value)}
      />)}
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 200 }}>
<FormLabel style={{fontSize:"15px"}}>Boarding Point</FormLabel>
<input id="destination" style={{height:"31px",fontSize:"14px"}} 
value={boardingPoint} onChange={(e)=>setBoardingPoint(e.target.value)}/>
      </FormControl> 
      
      <FormControl sx={{ m: 1, minWidth: 200 }}>
<FormLabel style={{fontSize:"15px"}}>Drop Point</FormLabel>
<input id="destination" style={{height:"31px",fontSize:"14px"}} 
value={dropPoint} onChange={(e)=>setDropPoint(e.target.value)}/>
      </FormControl> 


   
  </div>
 

  <FormControl sx={{ m: 1, minWidth: 150, marginLeft:7 }}>
  <Button  color="primary" onSubmit={handleClick} variant="contained" className="btn btn-primary" type="submit" >Save</Button>
  </FormControl>
  <FormControl sx={{ m: 1, minWidth: 150 }}>
  <Button   type="button"  variant="contained" color="primary" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Payment</Button>
  </FormControl>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div className="modal-dialog">
    <div className="modal-content">
    <form onSubmit={handleClick1}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">add Payment</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        
      </div>
      
      <div className="modal-body">
      <FormControl sx={{ m: 1, minWidth: 170 }}>
      <FormLabel style={{fontSize:"15px"}}>Credit Card Number</FormLabel>
      <input type="number" value={creditCardNumber} onChange={(event)=>setCreditCardNumber(event.target.value)}
       style={{height:"31px",fontSize:"14px"}}/>
      </FormControl> 

      <FormControl sx={{ m: 1, minWidth: 170 }}>
      <FormLabel style={{fontSize:"15px"}}>Cvv</FormLabel>
      <input type="number" value={cvv} onChange={(event)=>setCvv(event.target.value)} style={{height:"31px",fontSize:"14px"}}/>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 170 }}>
      <FormLabel style={{fontSize:"15px"}}>Valid From</FormLabel>
      <input type="month" value={validFrom} onChange={(event)=>setValidFrom(event.target.value)} placeholder="MM/YYYY" style={{height:"31px",fontSize:"14px"}}/>
      </FormControl> 

      <FormControl sx={{ m: 1, minWidth: 170 }}>
      <FormLabel style={{fontSize:"15px"}}>Valid To</FormLabel>
      <input type="month" value={validTo} onChange={(event)=>setValidTo(event.target.value)} placeholder="MM/YYYY" style={{height:"31px",fontSize:"14px"}}/>
      </FormControl> 

      </div>
      <div className="modal-footer">
      <FormControl sx={{ m: 1, minWidth: 50 }}>
        <Button type="button" variant="contained"  data-dismiss="modal">Cancel</Button>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 50 }}>
        <Button type="submit"  variant="contained"  color="primary" onClick={handleClick1}  >Confirm</Button>
        </FormControl>
      </div>
      </form>
    </div>
    
  </div>
  
</div>  


     </Paper>
     </form>
    </Container>
    </div>
  );
}

export default Booking;
