import React, { useState } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import US001 from "../Header/US001";

function AddProfile() {
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[dateOfBirth, setDateOfBirth] = useState('')
  const[gender, setGender] = useState('')
  const[street, setStreet] = useState('')
  const[location, setLocation] = useState('')
  const[city, setCity] = useState('')
  const[state, setState] = useState('')
  const[pincode, setPincode] = useState('')
  const[mobileNo, setMobileNo] = useState('')
  const[emailID, setemailID] = useState('')
  
  const[firstNameError, setFirstNameError] = useState('')
  const[lastNameError, setLastNameError] = useState('')
  const[dateOfBirthError, setDateOfBirthError] = useState('')
  const[genderError, setGenderError] = useState('')
  const[streetError, setStreetError] = useState('')
  const[locationError, setLocationError] = useState('')
  const[cityError, setCityError] = useState('')
  const[stateError, setStateError] = useState('')
  const[pincodeError, setPincodeError] = useState('')
  const[mobileNoError, setMobileNoError] = useState('')
  const[emailIDError, setemailIDError] = useState('')

  const handleClick=(e)=>{
    if (!firstName) {
        setFirstNameError('First Name is required.');
    } else {
        setFirstNameError('');
    }
    if (!lastName) {
        setLastNameError('First Name is required.');
    } else {
        setLastNameError('');
    }
    if (!dateOfBirth) {
        setDateOfBirthError('First Name is required.');
    } else {
        setDateOfBirthError('');
    }
    if (!gender) {
        setGenderError('First Name is required.');
    } else {
        setGenderError('');
    }
  
    if (!street) {
      setStreetError('Street is required.');
    } else {
      setStreetError('');
    }
  
    if (!location) {
      setLocationError('Location is required.');
    } else {
      setLocationError('');
    }
    if (!city) {
      setCityError('City is required.');
    } else {
      setCityError('');
    }
    if (!state) {
      setStateError('State is required.');
    } else {
      setStateError('');
    }
    if (!pincode) {
      setPincodeError('Pin code is required.');
    } else {
      setPincodeError('');
    }
    if (!mobileNo) {
      setMobileNoError('Mobile no is required.');
    } else {
      setMobileNoError('');
    }
    if (!emailID) {
        setemailIDError('License no is required.');
    } else {
        setemailIDError('');
    }
   
    if (firstName && lastName && dateOfBirth && gender && street && location && city && state && pincode && mobileNo && emailID ) {
      alert('Data added successfully!');
    const Login={firstName,lastName,dateOfBirth,gender,street,location,city,state,pincode,mobileNo,emailID }
    window.location.reload();
    fetch("http://localhost:8080/admin/addProfile",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Login)
  }).then(response => response.json())
  .catch(error => console.error(error));
}
 
}
const paperStyle={padding:'50px 20px', width:510,margin:"20px auto", backgroundColor:"#DAE3F3", borderRadius: '65px'}
  return (<div style={{backgroundColor:"#B4C7E7"}}>
    <US001/>
  <Container>
  <Paper elevation={4} style={paperStyle} >
    <FormControl sx={{ m: 0, minWidth: 500, marginLeft:"30%"}} >
    <FormLabel style={{fontSize:"20px"}}> USER REGISTRATION</FormLabel>
    </FormControl>

      
    <div style={{marginLeft:"25px"}}>
    <form onSubmit={handleClick} >
   
    
    <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>First Name</FormLabel>
    <input type="text" value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}/>
{firstNameError && <span style={{color:'red'}}>{firstNameError}</span>}
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>Last Name</FormLabel>
    <input type="text" value={lastName}
      onChange={(e)=>setLastName(e.target.value)}/>
{lastNameError && <span style={{color:'red'}}>{lastNameError}</span>}
  </FormControl>
   

        <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>Date Of Birth</FormLabel>
    <input type="date" value={dateOfBirth} style={{height:"31px",fontSize:"14px"}}
      onChange={(e)=>setDateOfBirth(e.target.value)}/>
{dateOfBirthError && <span style={{color:'red'}}>{dateOfBirthError}</span>}
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>Street</FormLabel>
    <input
      type="text"
      value={street}
      onChange={(e)=>setStreet(e.target.value)}
    />
    {streetError && <span style={{color:'red'}}>{streetError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>Location</FormLabel>
    <input
      type="text"
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
    />
    {locationError && <span style={{color:'red'}}>{locationError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>City</FormLabel>
    <input
      type="text"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
    />
    {cityError && <span style={{color:'red'}}>{cityError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>State</FormLabel>
    <input
      type="text"
      value={state}
      onChange={(e)=>setState(e.target.value)}
    />
    {stateError && <span style={{color:'red'}}>{stateError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>PIN code</FormLabel>
    <input
      type="number"
      value={pincode}
      onChange={(e)=>setPincode(e.target.value)}
    />
    {pincodeError && <span style={{color:'red'}}>{pincodeError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>Mobile No</FormLabel>
    <input
      type="number"
      value={mobileNo}
      onChange={(e)=>setMobileNo(e.target.value)}
    />
    {mobileNoError && <span style={{color:'red'}}>{mobileNoError}</span>}
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 200 }}>
    <FormLabel style={{fontSize:"15px"}}>Email Id</FormLabel>
    <input
      type="email"
      value={emailID}
      onChange={(e)=>setemailID(e.target.value)}
    />
    {emailIDError && <span style={{color:'red'}}>{emailIDError}</span>}
 </FormControl>

 <div style={{marginLeft:"8%"}}>
 <div class="form-check form-check-inline">
 <FormControl >
  <FormLabel style={{fontSize:"16px"}}>Gander :</FormLabel>
  </FormControl>
</div>

  
 <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  value="male"
          checked={gender === 'male'} onChange={(e)=>setGender(e.target.value)}/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"  value="female"
          checked={gender === 'female'} onChange={(e)=>setGender(e.target.value)}/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other"
          checked={gender === 'other'} onChange={(e)=>setGender(e.target.value)} />
  <label class="form-check-label" for="inlineRadio3">Other</label>
</div>

</div>

 <FormControl sx={{ m: 1, minWidth: 150 }} style={{marginLeft:'30%'}}>
  <Button   style={{marginLeft:"0%" ,top:"10px"}} variant="contained" color="primary"  onClick={handleClick}>add</Button>
  </FormControl>
 
 </form>   
    </div>
  </Paper>
  
  </Container>
  </div>
  )
}

export default AddProfile
