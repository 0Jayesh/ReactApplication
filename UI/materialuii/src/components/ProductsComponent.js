import React, { useEffect, useState } from 'react'
import './ProductsComponent.css'
import AppPagination from './AppPagination';
import {Chip,Avatar,Alert,AlertTitle, Stack,Box, IconButton,
     Card,CardMedia, CardContent, CardActions,Button,Typography, 
     CardHeader,Pagination, Select, MenuItem, Menu, TextField} from '@mui/material'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import { fetchData } from './data/dataAction';

function ProductsComponent() {

  const getTheData = useSelector(state => state.data.products)
  const dispatch = useDispatch()
  const [sortFilter,setSortFilter] = useState(1)
  const [sortData,setSortData] = useState(1)
  const [currentPage,setCurrentPage] = useState(1)
  const [cardsPerPage,setCardsPerPage] = useState(6)
  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  
  const [searchText,setSearchText] = useState('')

  const filterContent = {
       display:'flex',
       justifyContent:{
        lg:'space-between',
        md :'space-between',
        sm:'space-between',
        xs : 'center'
       },
       alignItems: {
        xs : 'center'
       }
  }

  const filterText = {
      width:{
        lg:'20%',
        md :'30%',
        sm: '35%',
        xs:'50%'
      },
      margin:'5px'
  }

  const filterSelect = {
      width:{
        lg :'25%',
        md:'35%',
        sm:'35%',
        xs :'50%'
      }
  }

  const fetchTheData = () => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
      dispatch(fetchData(res.data.products))
    })
  }
 
  useEffect(() => {
    fetchTheData()
  },[])
  
  const handleSortData = (e) => {
    setSortData(e.target.value)
  }

  const handleSortChange =(e) => {
    setSortFilter(e.target.value)
  }

  const setPage = (event,value) => {
    setCurrentPage(value)
  }

  const handleChange = (e,p) => {
    setCurrentPage(p)
  }

  var filteredData = []

  {
    sortData == 1 || sortData == 2 ?
    filteredData = getTheData :

    sortData == 3 ?

    filteredData = getTheData.sort((a,b) => a.price - b.price) :

    filteredData = getTheData.sort((a,b) => b.price - a.price)
  }

  var filteredSearchTextArray = filteredData.filter((user) =>
      user.title.toLowerCase().includes(searchText.toLowerCase())
  )

  const currentPosts = filteredSearchTextArray.slice(indexOfFirstPost,indexOfLastPost)

  const totalCards = filteredSearchTextArray.length
  const count=Math.ceil(totalCards/cardsPerPage)

  return (
    <>
        <br />
        <Typography variant="h5" align="center" 
        backgroundColor="primary.main"
        size="small"
        sx={{fontWeight:"bold",color:'lightblue',marginInline:'auto',width:'45%',borderRadius:'2px'}}
        >OUR PRODUCTS</Typography><br /> 

      <Stack direction={{lg:'row',md:'row',sm:'row',xs:'column'}} sx={filterContent} justifyContent="space-between" mx="40px">
    
      <TextField label="Search" 
      sx={filterText} variant="outlined"
      onChange={(e)=>setSearchText(e.target.value)}
      ></TextField>

      <Box sx={filterSelect}>
      <Select value={sortData} sx={{width:'100%',height:'30px',margin:'5px',backgroundColor:'#e2e8f0'}} onChange={handleSortData}>
        <MenuItem value={1} disabled>SORT DATA</MenuItem>
        {/* <MenuItem value={2}>DEFAULT</MenuItem> */}
        <MenuItem value={3}>PRICE - LOW TO HIGH</MenuItem>
        <MenuItem value={4}>PRICE - HIGH TO LOW</MenuItem>
      </Select>

      <Select value={sortFilter} onChange={handleSortChange} sx={{width:'100%',height:'30px',margin:'5px',backgroundColor:'#e2e8f0'}}>
        <MenuItem value={1} disabled>SORT ITEMS(Same Page)</MenuItem>
        {/* <MenuItem value={2}>DEFAULT</MenuItem> */}
        <MenuItem value={3}>PRICE - LOW TO HIGH</MenuItem>
        <MenuItem value={4}>PRICE - HIGH TO LOW</MenuItem>
      </Select>
      </Box>
      </Stack><br />
     {
      console.log(searchText)
     }

        {/* <Button sx={{backgroundColor:''}} variant="outlined" color="success">OUR PRODUCTS</Button> */}
        <Stack
         direction={{ lg:'row',md:'row',sm:'row',xs:'column'}}
         alignItems="center"
         justifyContent="center"
         padding={3}
         flexWrap="wrap"
         gap={5}
         sx={{backgroundColor:'white'}}
         className="productStack"
         >

{

    sortFilter == 1 || sortFilter == 2 ?

    currentPosts.map((ele)=>
            <Card 
              id={ele.id}
              sx={{
              width:340,
              height:500,
              backgroundColor:'#e2e8f0',
              // bgcolor:'primary.light',
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'
              // border:'3px solid white'
              }} variant="outlined" >
             <CardMedia
             component="img"
             height="300"
             image={ele.images[0]}
             sx={{width:'400px'}}
             />
  
            <CardContent >
            <Typography gutterBottom variant="h5" component="div">
            {ele.title}
           </Typography>
           <Typography variant="body2" color="text.secondary">
                {ele.description} 
          </Typography>
            </CardContent>  
                
              {/* <CardActions >
                
                
                  <Button sx={{marginBottom:'0'}} size="small" color="secondary" variant="contained"><b>VIEW MORE</b></Button>
                  <Button size="small" color="primary"  variant="contained">Add to Cart</Button>
               

              </CardActions>
   */}
                  
          <CardActions sx={{display:'flex',justifyContent: 'space-between',mr:'10px'}}>
                        
               <Chip sx={{width:'23%',backgroundColor:'lightblue',color:'black'}} label={'$ '+`${ele.price}`} variant="outlined"/>
               <Box>
                <Button  sx={{marginBottom:'0'}} size="small" color="secondary" variant="contained"><b>VIEW MORE</b></Button>
                <Button sx={{ml:'5px'}} size="small" color="primary"  variant="contained">Add to Cart</Button>
                </Box>
        
          </CardActions>


             </Card>
            ) :
            
            sortFilter == 3 ?

            currentPosts.sort((a,b) => a.price - b.price).map((ele)=>
            <Card 
              id={ele.id}
              sx={{
              width:400,
              height:500,
              backgroundColor:'#e2e8f0',
              // bgcolor:'primary.light',
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'
              // border:'3px solid white'
              }} variant="outlined" >
             <CardMedia
             component="img"
             height="300"
             image={ele.images[0]}
             sx={{width:'400px'}}
             />
  
            <CardContent >
            <Typography gutterBottom variant="h5" component="div">
            {ele.title}
           </Typography>
           <Typography variant="body2" color="text.secondary">
                {ele.description} 
          </Typography>
            </CardContent>  
                
              {/* <CardActions >
                
                
                  <Button sx={{marginBottom:'0'}} size="small" color="secondary" variant="contained"><b>VIEW MORE</b></Button>
                  <Button size="small" color="primary"  variant="contained">Add to Cart</Button>
               

              </CardActions>
   */}
                  
          <CardActions sx={{display:'flex',justifyContent: 'space-between',mr:'10px'}}>
                        <Box>
                <Button  sx={{marginBottom:'0'}} size="small" color="secondary" variant="contained"><b>VIEW MORE</b></Button>
                <Button sx={{ml:'5px'}} size="small" color="primary"  variant="contained">Add to Cart</Button>
                </Box>

               <Chip sx={{width:'20%',backgroundColor:'lightblue',color:'black'}} label={ele.price} variant="outlined"/>

        
          </CardActions>


             </Card>
            ) :

            currentPosts.sort((a,b) => b.price - a. price).map((ele)=>
            <Card 
              id={ele.id}
              sx={{
              width:400,
              height:500,
              backgroundColor:'#e2e8f0',
              // bgcolor:'primary.light',
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'
              // border:'3px solid white'
              }} variant="outlined" >
             <CardMedia
             component="img"
             height="300"
             image={ele.images[0]}
             sx={{width:'400px'}}
             />
  
            <CardContent >
            <Typography gutterBottom variant="h5" component="div">
            {ele.title}
           </Typography>
           <Typography variant="body2" color="text.secondary">
                {ele.description} 
          </Typography>
            </CardContent>  
                
              {/* <CardActions >
                
                
                  <Button sx={{marginBottom:'0'}} size="small" color="secondary" variant="contained"><b>VIEW MORE</b></Button>
                  <Button size="small" color="primary"  variant="contained">Add to Cart</Button>
               

              </CardActions>
   */}
                  
          <CardActions sx={{display:'flex',justifyContent: 'space-between',mr:'10px'}}>
                        <Box>
                <Button  sx={{marginBottom:'0'}} size="small" color="secondary" variant="contained"><b>VIEW MORE</b></Button>
                <Button sx={{ml:'5px'}} size="small" color="primary"  variant="contained">Add to Cart</Button>
                </Box>

               <Chip sx={{width:'20%',backgroundColor:'lightblue',color:'black'}} label={ele.price} variant="outlined"/>

        
          </CardActions>


             </Card>
            )

          }

          
          {/* {console.log({count})} */}
{/* 
          <AppPagination currentPage={currentPage} setCurrentPage={setCurrentPage} 
          handleChange={handleChange}
          /> */}

        </Stack>
        <div><Pagination sx={{display:'flex',alignItems: 'center',justifyContent: 'center',my:'10px'}} count={count} color="primary" onChange={handleChange}></Pagination></div>

    </>
  )
}

export default ProductsComponent
