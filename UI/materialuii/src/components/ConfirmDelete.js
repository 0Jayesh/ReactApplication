import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { fetchData } from "./data/dataAction";

const ConfirmDelete = (props) => {
    const { open, setOpen, deleteData } = props;

    var id = deleteData && deleteData.id;

    const deletePet = async () => {
        try {
            const response = await axios.delete(`https://localhost:7097/pet/deletePet/${id}`);
          } catch (error) {
            console.error('Error deleting entry:', error);
          }
          fetchData();
          setOpen(false)
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#FFF",
                p: 4,
            }}>
                <Typography>
                    { `Are you sure want to delete ${deleteData.name} ?`}
                </Typography>
                <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button 
                    onClick={deletePet}
                    > YES </Button> 
                    <Button onClick={() => setOpen(false)}> NO </Button>
                </Box>
                
            </Box>
        </Modal>
    )
}

export default ConfirmDelete;