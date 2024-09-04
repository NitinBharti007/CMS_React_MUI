import React, { useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import ChallengeCard from "./ChallengeCard";
import CreateChallenge from "./CreateChallenge";

const ChallengeDashboard = () => {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "Challenge 1",
      image: "image1.jpg",
      status: "Upcoming",
      timeLeft: "12:00:00",
      startDate: "2024-09-10",
      endDate: "2024-09-20",
    },
    {
      id: 2,
      title: "Challenge 2",
      image: "image2.jpg",
      status: "Active",
      timeLeft: "06:30:00",
      startDate: "2024-09-05",
      endDate: "2024-09-15",
    },
  ]);

  // Function to add new challenge
  const handleCreateChallenge = (newChallenge) => {
    setChallenges((prevChallenges) => [
      ...prevChallenges,
      {
        ...newChallenge,
        id: prevChallenges.length + 1, // Generate new ID
        image: "default.jpg", // Assign a default image or handle image upload
      },
    ]);
  };

  return (
    <Box>
      <Container>
        {/* Create Challenge Form */}
        <CreateChallenge onCreate={handleCreateChallenge} />

        {/* Display Challenge Cards */}
        <Grid container spacing={2}>
          {challenges.map((challenge) => (
            <Grid item key={challenge.id} xs={12} sm={6} md={4}>
              <ChallengeCard challenge={challenge} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ChallengeDashboard;
