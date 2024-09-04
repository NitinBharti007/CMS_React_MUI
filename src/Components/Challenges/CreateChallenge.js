import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { CalendarToday, Upload } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CreateChallenge = ({ onChallengeCreate }) => {
  const [challenge, setChallenge] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: '',
    image: '',
    levelType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChallenge({ ...challenge, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChallengeCreate({ ...challenge, id: Date.now() });
  };

  return (
    <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ width: '100%', backgroundColor: '#ffffff', padding: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                backgroundColor: '#2f855a',
                color: '#ffffff',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold">dp</Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold">DPhi</Typography>
          </div>
        </Container>
      </header>
      <main style={{ marginTop: '32px', width: '100%' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" style={{ fontWeight: '600', marginBottom: '24px' }}>Challenge Details</Typography>
          <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={handleSubmit}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Challenge Name</InputLabel>
              <TextField 
                label="Challenge Name" 
                variant="outlined"
                name="title"
                value={challenge.title}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Start Date</InputLabel>
              <TextField
                label="Start Date"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarToday color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                name="startDate"
                value={challenge.startDate}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel>End Date</InputLabel>
              <TextField
                label="End Date"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarToday color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                name="endDate"
                value={challenge.endDate}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Description</InputLabel>
              <TextField
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                name="description"
                value={challenge.description}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography variant="body1" style={{ marginBottom: '8px' }}>Image</Typography>
              <Button
                variant="outlined"
                startIcon={<Upload />}
                style={{ textTransform: 'none' }}
              >
                Upload
              </Button>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Level Type</InputLabel>
              <Select
                label="Level Type"
                name="levelType"
                value={challenge.levelType}
                onChange={handleInputChange}
              >
                <MenuItem value="Easy">Easy</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Hard">Hard</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              style={{ textTransform: 'none' }}
            >
              Create Challenge
            </Button>
          </form>
        </Container>
      </main>
    </div>
    </Link>
  );
};

export default CreateChallenge;
