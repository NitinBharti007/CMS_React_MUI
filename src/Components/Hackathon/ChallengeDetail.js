import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { AccessTime, SignalCellularAlt } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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
  textAlign: 'left',
}));

const OverviewSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

const ChallengeDetail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const handleEditClick = () => {
    navigate('/edit-challenge/1');
  };

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <Header>
        <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              backgroundColor: 'success.main',
              color: 'common.white',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              dp
            </Typography>
          </Box>
          <Typography variant="h6" fontWeight="bold">
            DPhi
          </Typography>
        </Container>
      </Header>
      <main>
        <Container maxWidth="lg" style={{ padding: '16px' }}>
          <Banner>
            <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <AccessTime style={{ color: '#fdd835', marginRight: '8px' }} />
              <Typography
                variant="body2"
                style={{
                  backgroundColor: '#fdd835',
                  color: '#004d40',
                  padding: '4px 12px',
                  borderRadius: '12px',
                }}
              >
                Starts on 17th Jun'22 09:00 PM (India Standard Time)
              </Typography>
            </Box>
            <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
              Data Sprint 72 - Butterfly Identification
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              Identify the class to which each butterfly belongs to
            </Typography>
            <Box
              sx={{
                backgroundColor: 'common.white',
                color: 'primary.main',
                padding: '4px 12px',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: theme.shadows[2],
              }}
            >
              <SignalCellularAlt style={{ marginRight: '8px' }} />
              Easy
            </Box>
          </Banner>
          <OverviewSection>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid', paddingBottom: '8px', marginBottom: '16px' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Overview
              </Typography>
              <Box>
                <Button variant="contained" color="success" style={{ marginRight: '8px' }} onClick={handleEditClick}>
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Box>
            </Box>
            <Typography variant="body1" color="textSecondary" style={{ marginBottom: '16px' }}>
              Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
            </Typography>
            <Typography variant="body1" color="textSecondary" style={{ marginBottom: '16px' }}>
              An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.
            </Typography>
          </OverviewSection>
        </Container>
      </main>
    </div>
  );
};

export default ChallengeDetail;
