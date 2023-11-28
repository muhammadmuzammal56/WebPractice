import './Section2.css'
import React, { useState } from 'react';
import { InputAdornment, Input, Container, FormControl, InputLabel, Select, MenuItem, Grid, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LineWeightIcon from '@mui/icons-material/LineWeight';
function Section2() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };
  return (
    <Grid style={{ paddingLeft: 0, paddingRight: 0, marginTop: '25px' }} id="Section1">
      <Grid spacing={2} container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Grid item xs={3} md={3} style={{ marginTop: '15px' }}>
          <Typography variant="h6" sx={{fontSize:'16px',fontWeight:'400'}}>Search</Typography>
          <FormControl fullWidth sx={{ backgroundColor: '#F4F4F4', borderRadius: '8px' }}>
            <Input
            className='Section2Input0InternalText'
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              value={searchText}
              onChange={handleSearchChange}
              sx={{ backgroundColor: 'transparent', borderRadius: '8px', border: '1px solid #ddd', padding: '7px', height: '50px' }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={2.7} md={2.6} style={{ marginTop: '15px' }}>
          <Typography variant="h6" sx={{fontSize:'16px',fontWeight:'400'}}>Categories</Typography>
          <FormControl fullWidth>
            <InputLabel  className='Section2Input0InternalText' id="dropdown-label-2">Choose Categories</InputLabel>
            <Select
              labelId="dropdown-label-2"
              id="dropdown-2"
              value={value2}
              label="Select Option"
              onChange={handleChange2}
              sx={{ backgroundColor: '#F4F4F4', height: '50px', borderRadius: '8px', border: '1px solid #ddd' }}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>s
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={2.7} md={2.6} style={{ marginTop: '15px' }}>
          <Typography variant="h6" sx={{fontSize:'16px',fontWeight:'400'}}>Sort</Typography>
          <FormControl fullWidth>
            <InputLabel  className='Section2Input0InternalText' id="dropdown-label-3">Default</InputLabel>
            <Select
              labelId="dropdown-label-3"
              id="dropdown-3"
              value={value3}
              label="Select Option"
              onChange={handleChange3}
              sx={{ backgroundColor: '#F4F4F4', height: '50px', borderRadius: '8px', border: '1px solid #ddd' }}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={2.7} md={2.6} style={{ marginTop: '15px' }}>
          <Typography variant="h6" sx={{fontSize:'16px',fontWeight:'400'}}>Pricing</Typography>
          <FormControl fullWidth>
            <InputLabel  className='Section2Input0InternalText' id="dropdown-label-4">All</InputLabel>
            <Select
              labelId="dropdown-label-4"
              id="dropdown-4"
              value={value4}
              label="Select Option"
              onChange={handleChange4}
              sx={{ backgroundColor: '#F4F4F4', height: '50px', borderRadius: '8px', border: '1px solid #ddd' }}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={0.9} md={0.9} className='Section2ButtonDiv' style={{ marginTop: '40px' }}>
          <Button variant="outlined"  className='Section2Button'  sx={{ backgroundColor: 'black', height: '50px', borderRadius: '8px', border: '1px solid #ddd' }} startIcon={<LineWeightIcon className='Section2ButtonIcon' sx={{color:'white',marginLeft:'8px'}} />}>
            {/* Delete */}
          </Button>

        </Grid>
      </Grid>

    </Grid>
  );
}

export default Section2;
