import React from 'react'
import { Box,Button } from '@mui/material';
import {useState,useEffect} from 'react';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid'
import { GridRowsProp } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid';
import {datagridStyle} from './dataGrid.js'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {fetchData} from './data/dataAction'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function DataGridComponent() {

    const data = useSelector(state => state.products)
    const dispatch = useDispatch()
    const fetchTheData = () => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
          dispatch(fetchData(res.data.products))
        })
      }

    const renderRating = (row) => {
      // console.log('row', row);
        return <div><Button variant='contained'>{row.value}</Button></div>
    }

    const columns = [     
        { field: 'id', headerName: 'ID', width: 100 ,flex : 1,hideable : false},
        { field: 'title', headerName: 'Brand ', width: 100,flex : 2,editable:true },
        { field: 'price', headerName: 'Price', width: 100, flex : 2 },
        { field: 'rating', headerName: 'Rating', width: 100, flex : 2,renderCell: renderRating },
        { field: 'icon', headerName: 'Actions', width: 100,
         type:'actions',
         getActions :(params) => [
           <GridActionsCellItem
           icon = {<DeleteIcon />}
           onClick = {() => deleteEntry(params)}
           />,
           <GridActionsCellItem
           icon = {<EditIcon />}
           onClick = {() => editEntry(params.id)}
           />
         ],
        flex : 2 },
    ];

    var filteredData = data;

    const deleteEntry = (params) => {
      var indexToRemove = data.map((x) => {
        return x.id
      }).indexOf(params.id);
      filteredData.splice(indexToRemove,1)
      console.log(`Deleted ${params.id}`);
      console.log(filteredData);
    }

    const editEntry = (id) => {
      console.log(`EDIT ${id}`);
    }

 

    const rows = filteredData.map((row) => ({
        id : row.id,
        title : row.title,
        price : row.price,
        rating :  row.rating
    }))
      
    /*
    renderCell: (redirectPage) => {
      return <ActionRender redirectPage={redirectPage.value} />;
    },
    */


  return (
    <>
      <Box sx={{display :'flex',height:'100%'}}>
        <Box sx={{backgroundColor: '',flexGrow : 1}}>
        <DataGrid 
        autoHeight
        rows={rows} 
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5,10,15]}
        />
        </Box>
      </Box>
    </>
  )
}

export default DataGridComponent