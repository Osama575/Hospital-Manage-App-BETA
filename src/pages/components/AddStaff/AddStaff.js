import { Button, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const styles = {
  primary: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    textAlign: "center",
    fontSize: "15px",
    margin: "15px 0",
    display: 'block',
  },
};

const AddStaff = () => {
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Typography variant='h4' sx={{ borderBottom: "1px solid #333", mb: 5 }} >Add A Staff</Typography>
      <form>
        <TextField
          label="Staff's Name"
          placeholder="Type Name..."
          multiline
          sx={{ width: "50%", minWidth: "300px", my: 1 }}
        /> <br />
        <TextField
          label="Email"
          placeholder="Type Email..."
          multiline
          sx={{ width: "50%", minWidth: "300px", my: 1 }}
        /> <br />
        <label htmlFor="contained-button-file">
          <Input sx={{ display: "none" }} accept="image/*" id="contained-button-file" multiple type="file" />
          <Button sx={{ py: 2, my: 1 }} variant="outlined" component="span">
            Upload Profile Pic
          </Button>
        </label> <br />
        <FormControl sx={{ width: "50%", minWidth: "300px", my: 1 }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value='admin'>Admin</MenuItem>
            <MenuItem value='doctor'>Doctor</MenuItem>
            <MenuItem value='staff'>Staff</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit' style={styles.primary}>Add Staff</Button>
      </form>
    </>
  );
};

export default AddStaff;