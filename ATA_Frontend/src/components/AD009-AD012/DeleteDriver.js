import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import AD010 from "../Header/AD010";

function DeleteDriver() {
  const [driverId, setDriverId] = useState('');
  const [driverIdError, setDriverIdError] = useState('');

  const handleDelete = () => {
    if (!driverId) {
      setDriverIdError('Driver Id is required.');
    } else {
      setDriverIdError('');
    }
  
    if (driverId) {
    alert('Data deleted successfully!');
    axios.delete(`http://localhost:8080/admin/deleteDriver/${driverId}`)
      .then(response => {
        console.log(response.data);
        setDriverId(''); // clear input field after successful deletion
      })
      .catch(error => {
        console.log(error);
      });
    }
  };

 
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD010/>
    <Container>
        <Paper elevation={4} style={paperStyle}>

        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"23%"}}>
        <FormLabel style={{fontSize:"25px"}}>DELETE DRIVER DETAILS...</FormLabel>
        </FormControl>
    <form onSubmit={handleDelete} style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Driver Id</FormLabel>
        <input type="text" value={driverId}
          onChange={(e)=>setDriverId(e.target.value)}/>
{driverIdError && <span style={{color:'red'}}>{driverIdError}</span>}
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

export default DeleteDriver;
