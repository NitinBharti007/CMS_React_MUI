import React, { useState } from 'react';
import CreateChallenge from './Components/Challenges/CreateChallenge';
import ChallengeCard from './Components/Hackathon/ChallengeCard'; 
import { Container, Grid } from '@mui/material';

const ChallengePage = () => {
  const [challenges, setChallenges] = useState([]);

  const handleChallengeCreate = (newChallenge) => {
    setChallenges([...challenges, newChallenge]);
  };

  return (
    <Container>
      <CreateChallenge onChallengeCreate={handleChallengeCreate} />
      <Grid container spacing={3} marginTop={3}>
        {challenges.map(challenge => (
          <Grid item key={challenge.id} xs={12} sm={6} md={4}>
            <ChallengeCard challenge={challenge} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ChallengePage;
