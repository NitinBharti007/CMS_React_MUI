import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Box)(({ theme }) => ({
  maxWidth: "21rem",
  minHeight: "32rem",
  borderRadius: "0.75rem",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  margin: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  marginRight: '20px'
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "200px",
}));

const CardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flexGrow: 1,
}));

const StatusTag = styled("span")(({ status }) => ({
  backgroundColor:
    status === "Upcoming"
      ? "#fef9c3"
      : status === "Active"
      ? "#d1fae5"
      : "#fef2f2",
  color:
    status === "Upcoming"
      ? "#d97706"
      : status === "Active"
      ? "#10b981"
      : "#ef4444",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  fontWeight: "600",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.375rem",
  display: "inline-block",
}));

const TimerSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  color: "#1f2937",
  fontSize: "1.125rem",
  fontWeight: "600",
  marginBottom: theme.spacing(2),
}));

const TimerUnit = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 1),
}));

const ChallengeCard = ({ challenge }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(challenge.timeLeft);

  useEffect(() => {
    if (challenge.status === "Past") return;

    const parseTime = (timeStr) => {
      const [hours, minutes, seconds] = timeStr.split(":").map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    };
    const updateTimer = () => {
      setTimeLeft((prevTimeLeft) => {
        const remainingTime = parseTime(prevTimeLeft) - 1;

        if (remainingTime <= 0) {
          return "00:00:00";
        }

        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        return [
          hours.toString().padStart(2, "0"),
          minutes.toString().padStart(2, "0"),
          seconds.toString().padStart(2, "0"),
        ].join(":");
      });
    };

    // Set interval to update timer every second
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [challenge.status, timeLeft]);

  const handleParticipateClick = () => {
    navigate(`/challenge/${challenge.id}`); // Replace with your actual challenge ID
  };

  const formattedTime = timeLeft.split(":").map((time, index) => (
    <TimerUnit key={index}>
      <Typography variant="h4" component="p">
        {time}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {index === 0 ? "Days" : index === 1 ? "Hours" : "Mins"}
      </Typography>
    </TimerUnit>
  ));

  return (
    <StyledCard>
      <CardImage component="img" src={challenge.image} alt={challenge.title} />
      <CardContent>
        <Box textAlign="center" marginBottom={2}>
          <StatusTag status={challenge.status}>{challenge.status}</StatusTag>
        </Box>
        <Typography variant="h6" align="center" gutterBottom>
          {challenge.title}
        </Typography>
        <Typography
          mt="10px"
          variant="body2"
          align="center"
          color="textSecondary"
        >
          {challenge.status === "Upcoming"
            ? "Starts in"
            : challenge.status === "Active"
            ? "Ends in"
            : "Ended on"}
        </Typography>
        {challenge.status !== "Past" && <TimerSection>{formattedTime}</TimerSection>}
        {challenge.status === "Past" && (
          <Box textAlign="center" mt="30px">
            <Typography fontSize="18px" variant="body2" color="textSecondary">
              {`From ${new Date(challenge.startDate).toLocaleDateString()} to ${new Date(challenge.endDate).toLocaleDateString()}`}
            </Typography>
          </Box>
        )}
        <Box textAlign="center" mt="30px">
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "9999px", py: 1.5, px: 4 }}
            startIcon={<i className="fas fa-check-circle"></i>}
            onClick={handleParticipateClick}
          >
            Participate Now
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ChallengeCard;
