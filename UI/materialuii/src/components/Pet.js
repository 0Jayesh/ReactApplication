import { Box, Button, Modal, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import AddPet from './AddPet';

const Pet = () => {

    const [ pets, setPets ] = useState([]);

    const [ openDeleteConfirmation ,setOpenDeleteConfirmation ] = useState(false);
    const [ openAddPopup, setOpenAddPopup ] = useState(false);
    const [ deleteData, setDeleteData] = useState({});

    useEffect(() => {
        fetchData();
    })

    const fetchData = async () => {
        try {
          const response = await fetch('https://localhost:7097/pet');
          const data = await response.json();
          setPets(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

     const onClickDelete = (row) => {
        setDeleteData(row)
        setOpenDeleteConfirmation(true)
     }

    const col = [
        { 
            field: 'breed',
            headerName: 'Pet Breed'
        },
        {
            field: 'name',
            headerName: 'Name'
        },
        {
            field: 'age',
            headerName: 'Age'
        },
        {
            field: 'height',
            headerName: 'Height'
        },
        {
            field: 'weight',
            headerName: 'Weight'
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
                        DELETE RECORD
                    </Button>
                )
            }
        }
    ]


    return (
        <div>
            <Box sx={{padding: "40px 50px 40px 50px"}}> 
            <Typography variant="h5">PET SHOP</Typography><br />
            </Box>
            <Button sx={{marginBottom: '12px'}} variant="contained"
            onClick={() => setOpenAddPopup(true)}
            > Add Pet</Button>
            <DataGrid
            autoHeight
            rows={pets}
            columns={col}
            rowHeight={76}
            disableColumnMenu={true}
            disableSelectionOnClick={true}
            disableColumnFilter={true}
            disableColumnSelector={true}
            getRowHeight={() => 'auto'}
            />

           { openDeleteConfirmation &&  
                <ConfirmDelete 
                fetchData={fetchData}
                open={openDeleteConfirmation} 
                setOpen={setOpenDeleteConfirmation}
                deleteData={deleteData}
                /> }

            { openAddPopup &&
                <AddPet
                    fetchData={fetchData}
                    open={openAddPopup}
                    setOpen={setOpenAddPopup}
                />
            }
        </div>
    )
}

export default Pet;