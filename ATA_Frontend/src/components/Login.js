import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import LoginHeader from "./Header/LoginHeader";

function RegistrationForm() {
  const[username, setUsername] = useState('')
  const [options, setOptions] = useState([]);
  const[password, setPassword] = useState('')
  const [option, setOption] = useState("select");
  const [redirect, setRedirect] = useState('');
  const [error, setError] = useState('');

  function handleUserIdChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

   function handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://localhost:8080/admin/selectUser/${username}/${password}`)
      .then(response => {
        const data = response.data;
        if (username === 'AD-001' && password === 'AD-001') {
          setRedirect('/addVehicle');
        } else if (username === 'AD-002' && password === 'AD-002') {
          setRedirect('/deleteVehicle');
        } else if (username === 'AD-003' && password === 'AD-003') {
          setRedirect('/viewVehicle');
        } else if (username === 'AD-004' && password === 'AD-004') {
          setRedirect('/modifyVehicle');
        } else if (username === 'AD-005' && password === 'AD-005') {
          setRedirect('/addRoute');
        } else if (username === 'AD-006' && password === 'AD-006') {
          setRedirect('/deleteRoute');
        } else if (username === 'AD-007' && password === 'AD-007') {
          setRedirect('/viewRoute');
        } else if (username === 'AD-008' && password === 'AD-008') {
          setRedirect('/modifyRoute');
        } else if (username === 'AD-009' && password === 'AD-009') {
          setRedirect('/addDriver');
        } else if (username === 'AD-010' && password === 'AD-010') {
          setRedirect('/deleteDriver');
        } else if (username === 'AD-011' && password === 'AD-011') {
          setRedirect('/modifyDriver');
        } else if (username === 'AD-012' && password === 'AD-012') {
          setRedirect('/allotDriver');
        } else if (username === 'AD-013' && password === 'AD-013') {
          setRedirect('/viewBooking');
        } else if (username === 'US-001' && password === 'US-001') {
          setRedirect('/addProfile');
        } else if (username === 'US-002' && password === 'US-002') {
          setRedirect('/viewVehicleRoute');
        } else if (username === 'US-003' && password === 'US-003') {
          setRedirect('/booking');
        } else if (username === 'US-004' && password === 'US-004') {
          setRedirect('/cancelbooking');
        } else if (username === 'US-005' && password === 'US-005') {
          setRedirect('/printTicket');
        } else {
          setError('Invalid credentials');
        }
      })
      .catch(error => console.error('Error:', error));
  }

  if (redirect) {
    return <Redirect to={redirect} />;
  }

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <LoginHeader/>
    <Container>
      
        <Paper elevation={4} style={paperStyle}>

        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"45%"}}>
        <FormLabel style={{fontSize:"25px"}}>Login</FormLabel>
        </FormControl>
    <form onSubmit={handleSubmit} style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}>

{error && <div style={{ color: 'red' }}>{error}</div>}

   <FormControl sx={{ m: 1, minWidth: 250 }}>
      <FormLabel style={{fontSize:"15px"}}>User Type</FormLabel>
        <select style={{height:"40px",fontSize:"15px"}}  >
        <option value="select">Select</option>
          <option >Admin</option>
          <option >user</option>
         
        </select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Username</FormLabel>
        <input type="text" value={username}
          onChange={handleUserIdChange}/>

      </FormControl>
    
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Password</FormLabel>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
     </FormControl>

     <FormControl sx={{ m: 1, minWidth: 50 }}>
      <Button  variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
      </FormControl>
      
    </form>
    </Paper>
    </Container>
    </div>
  );
}

export default RegistrationForm;
