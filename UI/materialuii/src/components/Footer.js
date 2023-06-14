import React from 'react'
import {Box, Typography,Button, IconButton, Divider} from '@mui/material'
import './Footer.css'
import { Stack } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DiamondIcon from '@mui/icons-material/Diamond';

const footerButtonStyle = {
    fontSize : {
        lg : '150px',
        md : '80px',
        sm : '80px'
},
mb:'auto'
}

const footer1 = {
    width : {
       md:'30%',
       sm:'48%',
       xs:'60%'
    }
}

const footer2 = {
    width : {
        md:'15%',
        sm:'20%',
        xs:'45%'
    },
    gap:'30px'
}

const footer3 = {
    width : {
        md:'15%',
        sm:'20%',
        xs:'45%'
    }
}

const footer4 = {
    width : {
        md:'15%',
        sm:'40%',
        xs:'45%'
    }
}

const footer5 = {
    width : {
        md:'10%',
        sm:'40%',
        xs:'80%'
    }
}

const dividerBottom = {
    backgroundColor : 'white'
}



function Footer() {
  return (
   <>
    <Stack
    sx={{ backgroundColor: '#063970',color:'white',width:'100%'}}
    fullWidth
    >
        <Stack
        direction='row'
        justifyContent='space-between'
        py="10px"
        flexWrap='wrap'
        gap="35px"
        >

        <Box 
        sx={footer1}
        className="footer1"

        // bgcolor="orange"
        >
            <Box 
            // bgcolor="red"
            sx={{height:'100%',width:'100%',float:'right',display:'flex'}}
            >
                {/* <Box sx={{width:'30%',height:'80%',mx:'auto'}} 
                bgcolor="green"
                >
                    <DiamondIcon sx={footerButtonStyle}/>
                </Box> */}
                <Stack  sx={{width:'100%',height:'100%'}} justifyContent="space-between">
                    <Stack sx={{height:'80%',mx:'20px'}} 
                    // bgcolor="orange" 
                    justifyContent="space-between"
                    >
                        <Typography variant="h4" fontWeight="bold" align="left">DIAMOND PLUS</Typography>
                        <Stack>
                            <Typography variant="h6" align='left'>+91 FOREST</Typography>
                            <Typography variant="h6" align='left'>CIVIL LINES,NAGPUR</Typography>
                            <Typography variant="h6" align='left'>0712 322009</Typography>
                        </Stack>
                    </Stack>
                    <Stack sx={{mx:'20px'}} direction={{lg:'row',md:'row',sm:'row',xs:'row'}} gap="10px" justifyContent="flex-start"
                    divider={<Divider sx={dividerBottom} orientation="vertical" flexItem />}
                    >
                        <Typography variant="subtitle1">Copyright</Typography>
                        <Typography variant="subtitle1">Privacy</Typography>
                        <Typography variant="subtitle1">Cookies</Typography>
                        <Typography variant="subtitle1">Policies</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box> 

        <Stack 
         sx={footer2}
         justifyContent="space-between" 
         className="footer2"
         >
            <Box align="left" sx={{display:'flex',gap:'10px',flexDirection:'column'}}>
                <Typography  variant="subtitle1" fontWeight="bold">FOLLOW US</Typography>
              <Box>  <FacebookIcon fontSize="large" sx={{pr:1}} /><TwitterIcon  fontSize="large" sx={{px:1}}/><YouTubeIcon fontSize="large" sx={{px:1}}/> </Box>
            </Box>
            <Stack align="left" gap="10px">
                <Typography  variant="subtitle1" fontWeight="bold">VISIT US</Typography>
              <Box>  <Typography>Map & Dir.</Typography>
                <Typography>Plan Your Visit</Typography>
                <Typography>Virtual Tour</Typography></Box>
            </Stack>
        </Stack> 

        <Stack 
         sx={footer3}
         justifyContent="space-between"
         className="footer3"
         >
            <Stack align="left" gap="10px">   
                <Typography variant="subtitle1" fontWeight="bold">SUPPORT US</Typography>
                <Button align="left" 
                size="small"
                variant="contained"
                color="secondary"
                sx={{width:'70%',height:'50px'}}
                >MAKE A GIFT</Button>
            </Stack><br />
            <Stack align="left" gap="10px">
                <Typography variant='subtitle1' fontWeight="bold">WORK WITH US</Typography>
                <Typography>View Jobs</Typography>
            </Stack>
            
        </Stack> 
        
        <Stack 
         sx={footer4}
         className="footer4"
         
        //  justifyContent="space-around"
         alignItems="flex-start"
         >
            {/* <div >
          <Typography sx={{height:'33%'}} variant="subtitle1" fontWeight="bold" mt="5px">RESOURCES AND LINKS</Typography>
          </div>
            <div ><Typography align="left">Library</Typography>
            <Typography align="left">Title IX</Typography>
            <Typography align="left">Registrar</Typography>
            </div>
            <div></div> */}
            <Stack sx={{height:'33%'}} align="left">
            <Typography sx={{height:'33%'}} variant="subtitle1" fontWeight="bold" mb="auto">RESOURCES AND LINKS</Typography>
            </Stack>
            <Stack sx={{height:'33%',mt:'auto'}} >
            <Typography align="left">Library</Typography> 
            <Typography align="left" >Title IX</Typography> 
            <Typography align="left">Registrar</Typography> 
            </Stack>
            <Stack sx={{height:'33%'}}></Stack>


            
        </Stack> 
        {/* <Typography align="left">Library</Typography> 
            <Typography align="left" >Title IX</Typography> 
            <Typography align="left">Registrar</Typography>  */}
        <Stack
            sx={footer5}
             justifyContent="space-around"
             className="footer5"
             >
                <div></div>
            <div><Typography align="left">Blackboard</Typography>
            <Typography align="left">MyGames</Typography>
            <Typography align="left">Emergency Info</Typography>
            </div>
            <div></div>

            
        </Stack>
        
        </Stack>
    </Stack>
   </>
  )
}

export default Footer