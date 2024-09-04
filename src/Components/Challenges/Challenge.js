import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import noteBook from "../../assets/icons/carbon_notebook-reference.svg";
import vector from "../../assets/icons/Vector.svg";
import robot from "../../assets/icons/Robot.svg";
import identity from "../../assets/icons/IdentificationCard.svg";

// Benefits Array with Correct Image Reference
const benefits = [
  {
    img: noteBook,
    title: "Prove your skills",
    description:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    img: vector,
    title: "Learn from community",
    description:
      "One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them.",
  },
  {
    img: robot,
    title: "Challenge yourself",
    description:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn from the experience, and bounce back harder.",
  },
  {
    img: identity,
    title: "Earn recognition",
    description:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "4rem 2rem",
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
}));

const BenefitCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: "#F8F9FD",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textAlign: "center",
  maxWidth: "400px",
  margin: "auto",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const BenefitImage = styled("img")(({ theme }) => ({
  width: "70px",
  height: "70px",
  marginBottom: theme.spacing(2),
}));

const BenefitTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: "1.25rem",
  marginBottom: theme.spacing(1),
}));

const BenefitDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  lineHeight: 1.6,
  padding: `0 ${theme.spacing(2)}px`,
}));

// Component
const Challenge = () => {
  return (
    <SectionContainer>
      <Typography variant="h4" color="textPrimary" gutterBottom>
        Why Participate in AI Challenges?
      </Typography>
      <Divider sx={{ width: "10%", margin: "auto", marginBottom: "3rem" }} />
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <BenefitCard>
              <BenefitImage src={benefit.img} alt={benefit.title} />
              <BenefitTitle variant="h6">{benefit.title}</BenefitTitle>
              <BenefitDescription variant="body2">
                {benefit.description}
              </BenefitDescription>
            </BenefitCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Challenge;
