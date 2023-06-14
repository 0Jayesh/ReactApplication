import { Box, Button, FormControl, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const AddPet = (props) => {

    const { open, setOpen, fetchData } = props;

    const [breed, setBreed] = useState('');
    const [age, setAge] = useState(null);
    const [name, setName] = useState('');
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);

    const marginX = () => {
        return {
            margin: "12px 0px"
        }
    }

    const handleSubmit = async (e) => {

         const body = {
            "age": age,
            "breed": breed,
            "name": name,
            "weight": weight,
            "height": height
          }

          try {
                const response = await axios.post(`https://localhost:7097/pet/addPet`, body);
              } catch (error) {
                console.error('Error adding entry:', error);
              }
              fetchData();
              setOpen(false)

      };

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
             <form onSubmit={handleSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <FormControl>
                    <TextField
                    label="Breed"
                    name="breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    sx={marginX}
                    />

                    <TextField
                    label="Age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    sx={marginX}
                    />

                    <TextField
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={marginX}
                    />

                    <TextField
                    label="Height"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    sx={marginX}
                    />

                    <TextField
                    label="Weight"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    sx={marginX}
                    />
                </FormControl>

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
                </form>
            </Box>
        </Modal>
    )
}

export default AddPet;