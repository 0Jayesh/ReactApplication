import React, { useState } from 'react'
import './Navbar.css'
import {AppBar, Box, Button, Checkbox, FormControl, FormControlLabel, 
    FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, 
    RadioGroup, Select, TextField, Toolbar, Typography,IconButton, 
    Tabs, Tab,useMediaQuery,useTheme} from '@mui/material';
    import DiamondIcon from '@mui/icons-material/Diamond';
import DrawerComponent from './DrawerComponent';

const PAGES = ['PRICING','BLOG','ENTERPRISE','DOWNLOADS','LEARN']

function Navbar() {

    const [navValue,setNavValue] = useState()
    const theme=useTheme()
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    console.log( )

  return (
    <>  
        <div className='navbar'>
    
        <Box sx={{backgroundColor:' #063970'}} bgcolor="secondary.main">
            <AppBar className='appbar' bgcolor="secondary.main">
                <Toolbar className="toolbar">
                    
                    {
                        isMatch ? (
                            <>
                              
                                <div style={{display: 'flex',gap:'2s%'}}>
                                <DiamondIcon fontSize='medium'/>
                                <Typography variant="h6" fontSize="medium" >DIAMOND PLUS</Typography>
                                </div>

                                <DrawerComponent />

                            </>
                        ) :

                        (
                            <>
                                
                    <div className="leftNavbar" >
                        <DiamondIcon fontSize='medium'/>
                        <Typography variant="h6" fontSize="medium" >DIAMOND PLUS</Typography>
                    </div>

                    <div className="midNavbar">
                        
                        {/* <Typography variant="h6" fontSize="medium" value={0} indicatorColor='success'>PRODUCTS</Typography>
                        <Typography variant="h6" fontSize="medium">PRICING</Typography>

                        <Typography variant="h6" fontSize="medium">BLOG</Typography>
                        <Typography variant="h6" fontSize="medium">ENTERPRISE</Typography>
                        <Typography variant="h6" fontSize="medium">DOWNLOADS</Typography> */}
                        {/* <Typography variant="h6">LEARN</Typography> */}

                        <Tabs textColor="inherit" 
                        value={navValue}
                        onChange={(e,value) => setNavValue(value)}
                        indicatorColor = "secondary"
                        >
                            {/* {
                                PAGES.map((page,index)=>{
                                    <Tab key={index} label={page} />
                                })
                            } */}
                            <Tab label="PRICING" sx={{color:'white',fontSize:'medium'}}/>
                            <Tab label="BLOG" sx={{color:'white',fontSize:'medium'}}/>
                            <Tab label="ENTERPRISE" sx={{color:'white',fontSize:'medium'}} />
                            <Tab label="DOWNLOADS" sx={{color:'white',fontSize:'medium'}}/>
                            <Tab label="LEARN" sx={{color:'white',fontSize:'medium'}} />
                        </Tabs>

                    </div>

                    <div className="rightNavbar" >
                       <Button variant="contained" color="success"  sx= {{backgroundColor:'purple'}}>Start For Free</Button>
                    </div>
                            </>

                        )
                    }


                </Toolbar>
            </AppBar>
            </Box>
            
        </div>
    </>
  )
}

export default Navbar