import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import LoginHeader from "./Header/LoginHeader";

function RegistrationForm() {
  const[username, setUsername] = useState('')
  const [options, setOptions] = useState([]);
  const[password, setPassword] = useState('')
  const [option, setOption] = useState("select");
  const[mobile, setMobile] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/Branch/getAll')
      .then(response => response.json())
      .then(data =>{setOptions(data.filter(row => row.username  === {username}))
  });
      
  }, []);

  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    setUsername(selectedValue);

    const selectedData = options.find(item => item.username === selectedValue);
    setUsername(selectedData.bname);
  }
  
  const handleClick=(e)=>{
    e.preventDefault()
    window.location.reload();
    const Login={username,password}
    
    fetch("http://localhost:8080/Login/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Login)
  }).then(response => response.json())
  
  .catch(error => console.error(error));
 
}

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto",backgroundColor:"#DAE3F3"}
  return (<div >
    <LoginHeader/>
    <Container>
        <Paper elevation={4} style={paperStyle}>

        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"42%"}}>
        <FormLabel style={{fontSize:"25px"}}>REGISTER</FormLabel>
        </FormControl>
    <form onSubmit={handleClick} style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Username</FormLabel>
        <input type="text" value={username}
          onChange={(e)=>setUsername(e.target.value)}/>

      </FormControl>
    
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Password</FormLabel>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
     </FormControl>

     <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Mobile</FormLabel>
        <input
          type="number"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
        />
     </FormControl>

     <FormControl sx={{ m: 1, minWidth: 250 }}>
      <FormLabel style={{fontSize:"17px"}}>User Type</FormLabel>
        <select style={{height:"34px",fontSize:"15px"}} value={option} >
        <option value="select">Select</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        
        </FormControl>

     <FormControl sx={{ m: 1, minWidth: 50 }}>
      <Button  variant="contained" color="primary" onClick={handleClick}>Register</Button>
      </FormControl>
      
    </form>
    </Paper>
    </Container>
    </div>
  );
}

export default RegistrationForm;
