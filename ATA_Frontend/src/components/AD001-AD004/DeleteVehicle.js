import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import AD002 from "../Header/AD002";

function DeleteVehicle() {
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleIdError, setVehicleIdError] = useState('');

  const handleDelete = () => {
    if (!vehicleId) {
      setVehicleIdError('Vehicle Id is required.');
    } else {
      setVehicleIdError('');
    }
  
    if (vehicleId) {
    alert('Data deleted successfully!');
    axios.delete(`http://localhost:8080/admin/deleteVehicle/${vehicleId}`)
      .then(response => {
        console.log(response.data);
        setVehicleId(''); // clear input field after successful deletion
      })
      .catch(error => {
        console.log(error);
      });
    }
  };

 
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div>
    <AD002/>
    <Container>
        <Paper elevation={4} style={paperStyle}>

        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"23%"}}>
        <FormLabel style={{fontSize:"25px"}}>DELETE VEHICLE DETAILS...</FormLabel>
        </FormControl>
    <form onSubmit={handleDelete} style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Vehicle Id</FormLabel>
        <input type="text" value={vehicleId}
          onChange={(e)=>setVehicleId(e.target.value)}/>
{vehicleIdError && <span style={{color:'red'}}>{vehicleIdError}</span>}
      </FormControl>
    

     <FormControl sx={{ m: 1, minWidth: 50 }}>
      <Button  variant="contained" color="primary" onClick={handleDelete}>Delete</Button>
      </FormControl>
      
    </form>
    </Paper>
    </Container>
    </div>
  );
}

export default DeleteVehicle;
