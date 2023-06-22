import React, { useState } from 'react'
import  { Button, Drawer,IconButton,List, ListItem, ListItemButton,ListItemIcon,ListItemText, Tab, Tabs, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import makeStyles from '@mui/material';
import withStyles from '@mui/material';
// import {makeStyles} from '@mui/material'
// import {makeStyles } from '@material-ui/core'

const PAGES = ['PRICING','BLOG','ENTERPRISE','DOWNLOADS','LEARN']

// const useStyles = makeStyles({
//     btn: {
//         backgroundColor :'violet'
//     }
// })


// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: "100%",
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper
//     }
//   }));
  
  

function DrawerComponent() {

    const [openDrawer,setOpenDrawer] = useState(false)
    const [navValue,setNavValue] = useState()
    // const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
        <div >
        <Drawer 
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        >
            <List>
                {/* {
                    PAGES.map((page, index) => (
                        <ListItemButton key={index}>
                             <ListItemIcon>
                                 <ListItemText>
                                 <Typography variant="h6" fontSize="medium" >{page}</Typography>
                                 </ListItemText>
                             </ListItemIcon>
                         </ListItemButton>
                        ))
                }
                 */}<ListItem button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
                         <ListItemButton >
                             <ListItemIcon>
                                 <ListItemText>
                                 <Typography variant="h6" fontSize="medium" sx={{fontWeight:'bold'}}>PRICING</Typography>
                                 {/* <Button variant="contained" sx={{width:'500px'}}>PRICING</Button> */}
                                 </ListItemText>
                             </ListItemIcon>
                         </ListItemButton>
                     </ListItem>


                    <ListItem  selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
                         <ListItemButton >
                             <ListItemIcon>
                                 <ListItemText>
                                 <Typography variant="h6" fontSize="medium"  sx={{fontWeight:'bold'}}>BLOG</Typography>
                                 {/* <Button variant="contained" sx={{width:'500px'}}>BLOG</Button> */}

                                 </ListItemText>
                             </ListItemIcon>
                         </ListItemButton>
                    </ListItem>

                    <ListItem  selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
                         <ListItemButton>
                             <ListItemIcon>
                                 <ListItemText>
                                 <Typography variant="h6" fontSize="medium" sx={{fontWeight:'bold'}}>ENTERPRISE</Typography>
                                 {/* <Button variant="contained" sx={{width:'500px'}}>ENTERPRISE</Button> */}

                                 </ListItemText>
                             </ListItemIcon>
                         </ListItemButton>
                    </ListItem>


                    <ListItem  selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
                         <ListItemButton>
                             <ListItemIcon>
                                 <ListItemText>
                                 <Typography variant="h6" fontSize="medium"  sx={{fontWeight:'bold'}} >DOWNLOADS</Typography>
                                 {/* <Button variant="contained" sx={{width:'500px'}}>DOWNLOADS</Button> */}

                                 </ListItemText>
                             </ListItemIcon>
                         </ListItemButton>
                    </ListItem>


                    <ListItem  selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
                         <ListItemButton >
                             <ListItemIcon>
                                 <ListItemText>
                                 <Typography variant="h6" fontSize="medium"  sx={{fontWeight:'bold'}}>LEARN</Typography>
                                 {/* <Button variant="contained" sx={{width:'500px'}}>LEARN</Button> */}

                                 </ListItemText>
                             </ListItemIcon>
                         </ListItemButton>
                    </ListItem>
                         
            </List>

            {/* <Tabs orientation="vertical" value={navValue} onChange={(e,value) => setNavValue(value)}>
                {
                    PAGES.map((page, index) => (
                        <Tab label={page} sx={{color:'white',fontSize:'medium'}}/>
                    ))
                }
            </Tabs> */}


        </Drawer>
        <IconButton sx={{color:'white',marginLeft:'auto'}}onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
        </div>
    </>
  )
}

// ReactDOM.render(
//     <React.StrictMode>
//       <AppBarWithButtons />
//     </React.StrictMode>,
//     document.getElementById("root")
//   )

export default DrawerComponent