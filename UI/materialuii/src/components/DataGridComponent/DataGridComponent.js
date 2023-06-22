import React from 'react'
import { Box,Button, Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {fetchPets} from '../data/dataAction'
import ConfirmDelete from '../ConfirmDelete.js';
import AddPet from '../AddPet.js';

function DataGridComponent() {

    const dispatch = useDispatch();
    const pets = useSelector(state => state.data.pets);

    const [ openDeleteConfirmation ,setOpenDeleteConfirmation ] = useState(false);
    const [ openAddPopup, setOpenAddPopup ] = useState(false);
    const [ deleteData, setDeleteData] = useState({});

    useEffect(() => {
      dispatch(fetchPets());
    },[dispatch])

    const onClickDelete = (row) => {
        setDeleteData(row)
        setOpenDeleteConfirmation(true)
    }

    const col = [
      { 
          field: 'breed',
          headerName: 'Pet Breed',
          width: 100 ,
          flex : 1,
          hideable : false,
      },
      {
          field: 'name',
          headerName: 'Name',
          width: 100,
          flex : 2
      },
      {
          field: 'age',
          headerName: 'Age',
          width: 100, 
          flex : 2
      },
      {
          field: 'height',
          headerName: 'Height',
          width: 100, 
          flex : 2
      },
      {
          field: 'weight',
          headerName: 'Weight',
          width: 100, 
          flex : 2
      },
      {
          field: 'id',
          headerName: 'Delete',
          renderCell: (params) => {
              return (
                  <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  onClick={() => onClickDelete(params.row)}
                  sx={{ margin: "12px 0px" }}
                  >
                      DELETE 
                  </Button>
              )
          }
      }
    ]

  return (
    <>
      <Box sx={{display :'flex',height:'100%', flexDirection: 'column'}}>
        <Box sx={{padding: "40px 50px 40px 50px"}}> 
            <Typography variant="h5">PET SHOP</Typography><br />
            <Button sx={{marginBottom: '12px'}} variant="contained"
            onClick={ () =>  setOpenAddPopup(true) }
            > Add Pet</Button>
        </Box>
        <Box sx={{ flexGrow : 1 }}>
        { pets && pets?.length && <DataGrid 
        autoHeight
        rows={pets} 
        columns={col}
        pageSize={5}
        rowsPerPageOptions={[5,10,15]}
        /> }
        </Box>
        { openDeleteConfirmation &&  
              <ConfirmDelete 
              open={openDeleteConfirmation} 
              setOpen={setOpenDeleteConfirmation}
              deleteData={deleteData}
          /> }

        { openAddPopup &&
                <AddPet
                open={openAddPopup}
                setOpen={setOpenAddPopup}
          /> }
      </Box>
    </>
  )
}

export default DataGridComponent