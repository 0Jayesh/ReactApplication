import React from 'react'
import {Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography} from '@mui/material';
import './loginComponent.css'
import { useState } from 'react';
import { SelectUnstyledContext } from '@mui/base';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function LoginComponent() {

  const [country,setCountry] = useState('')
  const [state,setState] = useState('')
  const [city,setCity] = useState('')
  const [gender,setGender] = useState('')
  

  const updateCountry = (e) => {
      console.log(e.target.value)
      setCountry(e.target.value)
  }

  const updateState = (e) => {
    console.log(e.target.value)
    setState(e.target.value)
}

const updateCity = (e) => {
  console.log(e.target.value)
  setCity(e.target.value)
}
  
  return (
    <Box className="BOOX" sx={{
      display:'flex',
      gap:10,
      // height:700,
      alignItems: 'center',
      justifyContent: 'center',
      padding:'10px',
      }}>
      <Box  sx={{
        width: '40%',
        minWidth:'340px',
        height: 300,
        borderRadius : '10px',
        backgroundColor: 'lightblue',
        boxShadow:1,
        // border:'2px solid',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        gap:'10%'}}>
<TextField required label="Email" type="email" variant="filled" 
sx={{width:'50%',boxShadow:'5'}}

/>

<TextField required label="Password" type="password" variant="filled" 
sx={{width:'50%',boxShadow:'5'}}

/>

        


<Button variant="contained" color="success"
  sx={{
    width:'50%',
    backgroundColor:'purple'}}
>LOGIN NOW</Button>

      </Box>


      <Box sx={{
        width:'40%',
        minWidth:'340px',

        height:680,
        backgroundColor: 'lightblue',
        borderRadius : '10px',
        // border:'2px solid',

        boxShadow:1}}>

          <br />
          <Typography variant="h6" color="primary" sx={{fontWeight: 'bold'}}>SIGN UP</Typography>
          <br />
          <div className='subClass'>

            <div className='subClass1'>
              <TextField required label="First Name" variant="filled" sx={{width:'45%',height:'40%',boxShadow:'3'}}></TextField>
              <TextField required iconStart={<AlternateEmailIcon/>} label="Last Name" variant="filled" sx={{width:'45%',boxShadow:'3'}}></TextField >
            </div>

            <div className='subClass2'>
             <TextField required label="Email ID" type="email" variant="filled" sx={{width:'45%',boxShadow:'3'}}></TextField>
             <TextField label="User ID" variant="filled" sx={{width:'45%',boxShadow:'3'}}></TextField>
            </div>

            <div className='subClass3'>
            <Select value={country}  displayEmpty sx={{width:'46%',boxShadow:'3'}}  variant="filled"
            onChange={updateCountry}
            >
              <MenuItem value="" disabled>Country</MenuItem>    
              <MenuItem value={1}>India</MenuItem>
              <MenuItem value={2}>Japan</MenuItem>
              <MenuItem value={3}>UK</MenuItem>
              <MenuItem value={4}>US</MenuItem>
              <MenuItem value={5}>France</MenuItem>
            </Select>

            <div className="subClass31">
            <Select value={state} displayEmpty sx={{width:'48%',boxShadow:'3'}} variant="filled" onChange={updateState}>
            <MenuItem value="" disabled>State</MenuItem>
              <MenuItem value={1}>Maharashtra</MenuItem>
              <MenuItem value={2}>UttarPradesh</MenuItem>
              <MenuItem value={3}>Telangana</MenuItem>
              <MenuItem value={4}>Kerala</MenuItem>
              <MenuItem value={5}>MadhyaPradesh</MenuItem>
            </Select>

          
            <Select value={city}  displayEmpty sx={{width:'48%',boxShadow:'3'}} variant="filled" onChange={updateCity}>
            <MenuItem value="" disabled>City</MenuItem>
              <MenuItem value={1}>Nagpur</MenuItem>
              <MenuItem value={2}>Katol</MenuItem>
              <MenuItem value={3}>Mumbai</MenuItem>
              <MenuItem value={4}>Bangalore</MenuItem>
              <MenuItem value={5}>Hyderabad</MenuItem>
            </Select>
            </div>
           
            </div>

            <div className='subClass4'>
              <TextField required label="Phone Number" variant="filled" sx={{width:'46%',boxShadow:'3'}}></TextField>
              <TextField label="Reference Code" variant="filled"  sx={{width:'45%',boxShadow:'3'}}></TextField>
            </div>

            <div className='subClass5'>
            <TextField required label="Password" type="password" variant="filled" sx={{width:'46%',boxShadow:'3'}}>Password</TextField>

              
              <TextField required label="Confirm Password" type="password" variant="filled" sx={{width:'46%',boxShadow:'3'}}>Password</TextField>


            </div>

            {/* <div className='subClass6'>
              <FormControl className='subClass51' sx={{width:'45%'}}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup value={gender} onChange={e => setGender(e.target.value)} className='radioGroup' >
              <FormControlLabel value="male" control={<Radio />} label="Male"></FormControlLabel>
              <FormControlLabel value="female" control={<Radio />} label="Female"></FormControlLabel>
              <FormControlLabel value="undefined" control={<Radio />} label="Undefined"></FormControlLabel>
            </RadioGroup>
            </FormControl>
            <div classname="subClass61">
            <TextField required label="Confirm Password" type="password" variant="filled" sx={{width:'45%'}}>Password</TextField>
            <TextField label="Referral Code" variant="filled"></TextField>
            </div>
            </div> */}

            <div className='subClass6'>
              <div>
              <FormControl  sx={{width:'50%'}}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup value={gender} onChange={e => setGender(e.target.value)} className='radioGroup' >
              <FormControlLabel width="20px" value="male" control={<Radio />} label="MALE"></FormControlLabel>
              <FormControlLabel value="female" control={<Radio />} label="FEMALE"></FormControlLabel>
              <FormControlLabel value="undefined" control={<Radio />} label="UNDEFINED"></FormControlLabel>
            </RadioGroup>
            </FormControl>
              </div>
              <div className="subClass61">
              <TextField  variant="filled" type="date" sx={{width:'100%',boxShadow:'3'}}/>

               <TextField label="Referral Code" variant="filled" sx={{boxShadow:'3'}}></TextField>
              </div>
            </div>

            <div className='subClass7'>

              <FormControl >
              <FormGroup>
                <FormControlLabel control={<Checkbox/>} />
              </FormGroup>
              </FormControl>

            

              <span style={{display:'flex',justifyContent: 'center',alignItems: 'center'}}>I ACCEPT ALL TERMS AND POLICIES</span>

            </div>

            <div className='subClass8'>
              <Button variant="contained" color="success" 
              sx= {{width:'50%',backgroundColor:'purple'}}
              >SUBMIT</Button>
            </div>

          </div>

        
        </Box>


     </Box>
   
  )
}

export default LoginComponent