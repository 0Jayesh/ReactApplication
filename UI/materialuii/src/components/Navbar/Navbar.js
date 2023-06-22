import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {AppBar, Box, Button, Toolbar, Typography, Tabs, Tab,useMediaQuery,useTheme} from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import DrawerComponent from '../DataGridComponent/DrawerComponent';
import { useNavigate, createBrowserRouter } from 'react-router-dom';

const navbarValueLabel = [
    {
        label: 'HOME',
        value: "/"
    },
    {
        label: 'PRODUCTS',
        value: "/products"
    },
    {
        label: 'PETS',
        value: "/pets"
    },
    {
        label: 'LOGIN',
        value: "/login"
    },
]

function Navbar() {

    const [navValue,setNavValue] = useState(0);
    const theme=useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const onChangeTabValue = (e, value) => {
        setNavValue(value);
        navigate(value);
    }

  return (
    <>  
        <div className='navbar'>
    
        <Box sx={{backgroundColor:' #063970'}} bgcolor="secondary.main">
            <AppBar className='appbar' bgcolor="secondary.main">
                <Toolbar className="toolbar">
                    { isMatch ? (
                        <>
                            <div style={{display: 'flex',gap:'2s%'}}>
                            <DiamondIcon fontSize='medium'/>
                            <Typography variant="h6" fontSize="medium" >DIAMOND PLUS</Typography>
                            </div>
                            <DrawerComponent />
                        </>
                    ) : (
                        <>           
                            <div className="leftNavbar" >
                                <DiamondIcon fontSize='medium'/>
                                <Typography variant="h6" fontSize="medium" >DIAMOND PLUS</Typography>
                            </div>
                            <div className="midNavbar">
                                <Tabs textColor="inherit" 
                                value={navValue}
                                onChange={(e,value) => onChangeTabValue(e,value)}
                                indicatorColor = "secondary"
                                >
                                    {
                                        navbarValueLabel?.map((item, index) => {
                                            return (
                                                <Tab label={item.label} value={item.value} sx={{color:'white',fontSize:'medium'}}/>
                                            )
                                        })
                                    }
                                </Tabs>
                                <Button onClick={() => navigate("/pets")}> Hello</Button>
                            </div>
                            <div className="rightNavbar" >
                            <Button variant="contained" color="success"  sx= {{backgroundColor:'purple'}}>Start For Free</Button>
                            </div>
                            </>
                    )}
                </Toolbar>
            </AppBar>
            </Box>
        </div>
    </>
  )
}

export default Navbar