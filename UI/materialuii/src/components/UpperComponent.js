import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import {Box, Button, Checkbox, FormControl, MenuItem, Select, TextField, Typography} from '@mui/material';
import './UpperComponent.css'

function UpperComponent() {

  

  return (
    <>
    <Box className='upperBox'>
      <Typography variant="h1">GAME CITY</Typography><br />
      <Typography variant="h5">Select your game:</Typography>
      <Button color="success" size="small" variant="contained" sx={{backgroundColor:'purple'}}>NFS</Button>&nbsp;
      <Button color="success" size="medium" variant="contained" sx={{backgroundColor:'purple'}}>GTA</Button>&nbsp;
      <Button color="success" size="small" variant="contained" sx={{backgroundColor:'purple'}}>Forza</Button>&nbsp;<br /><br />
      <LoadingButton loading loadingIndicator="Game&nbsp;Loading&nbsp;NOW..."></LoadingButton>
    </Box>
    </>
  )
}

export default UpperComponent