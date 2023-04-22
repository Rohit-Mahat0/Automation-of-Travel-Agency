import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import AD006 from "../Header/AD006";

function DeleteRoute() {
  const [routeId, setRouteId] = useState('');
  const [routeIdError, setRouteIdError] = useState('');

  const handleDelete = () => {
    if (!routeId) {
      setRouteIdError('Vehicle Id is required.');
    } else {
      setRouteIdError('');
    }
  
    if (routeId) {
    alert('Data deleted successfully!');
    axios.delete(`http://localhost:8080/admin/deleteRoute/${routeId}`)
      .then(response => {
        console.log(response.data);
        setRouteId(''); // clear input field after successful deletion
      })
      .catch(error => {
        console.log(error);
      });
    }
  };

 
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <AD006/>
    <Container>
        <Paper elevation={4} style={paperStyle}>

        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"23%"}}>
        <FormLabel style={{fontSize:"25px"}}>DELETE ROUTE DETAILS...</FormLabel>
        </FormControl>
    <form onSubmit={handleDelete} style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Route Id</FormLabel>
        <input type="text" value={routeId}
          onChange={(e)=>setRouteId(e.target.value)}/>
{routeIdError && <span style={{color:'red'}}>{routeIdError}</span>}
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

export default DeleteRoute;
