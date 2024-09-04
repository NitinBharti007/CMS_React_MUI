import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Avatar, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';

const Header = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const OverviewSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

const EditChallenge = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: '',
    image: '',
    levelType: ''
  });

  useEffect(() => {
    setChallenge({
      title: 'Data Sprint 72 - Butterfly Identification',
      startDate: '2022-06-17T21:00:00Z',
      endDate: '2022-06-30T21:00:00Z',
      description: 'Identify the class to which each butterfly belongs to',
      image: 'dummy-image-url',
      levelType: 'Easy'
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChallenge({ ...challenge, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Challenge:', challenge);
  };

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <Header>
        <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={challenge.image} style={{ marginRight: '16px' }} />
          <Typography variant="h6" fontWeight="bold">
            Edit Challenge
          </Typography>
        </Container>
      </Header>
      <main>
        <Container maxWidth="lg" style={{ padding: '16px' }}>
          <Banner>
            <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
              Edit Challenge Details
            </Typography>
          </Banner>
          <OverviewSection>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                name="title"
                value={challenge.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Start Date"
                type="datetime-local"
                name="startDate"
                value={challenge.startDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="End Date"
                type="datetime-local"
                name="endDate"
                value={challenge.endDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Description"
                name="description"
                value={challenge.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Level</InputLabel>
                <Select
                  name="levelType"
                  value={challenge.levelType}
                  onChange={handleChange}
                  label="Level"
                >
                  <MenuItem value="Easy">Easy</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Hard">Hard</MenuItem>
                </Select>
              </FormControl>
              <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <Button variant="contained" color="primary" type="submit">
                  Save Changes
                </Button>
              </Box>
            </form>
          </OverviewSection>
        </Container>
      </main>
    </div>
  );
};

export default EditChallenge;
