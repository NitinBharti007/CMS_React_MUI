import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Rocket from "../../assets/cardimage/Rocket.png";
import Img1 from '../../assets/icons/Group 1000002515.svg';
import Img2 from '../../assets/icons/Group 1000002516.svg';
import Img3 from '../../assets/icons/Group 1000002518.svg';

const HeaderContainer = styled(Box)({
  backgroundColor: "#082c3c",
  color: "white",
  padding: "48px 0",
  width: "100%",
  margin: '0',
});

const ContentContainer = styled(Box)({
  maxWidth: "1200px",
  marginTop: "60px",
  marginLeft: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
});

const TitleContainer = styled(Box)({
  marginLeft: "80px",
  display: "flex",
  alignItems: "center",
});

const VerticalDivider = styled(Divider)({
  backgroundColor: "#FFCE5C",
  width: "7px",
  height: "160px",
  marginRight: "30px",
  marginBottom: '110px'
});

const TitleSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "550px",
  marginTop: "50px",
});

const Title = styled(Typography)({
  textAlign: "left",
  fontSize: "50px",
});

const Description = styled(Typography)({
  marginTop: "16px",
  marginBottom: "24px",
  textAlign: "left",
  lineHeight: "1.6",
});

const RocketImage = styled("img")({
  maxWidth: "250px",
  transform: "rotate(20deg)",
  marginRight: "100px",
});

const StatsContainer = styled(Box)({
  backgroundColor: "#072736",
  padding: "40px 0",
  marginTop: "200px",
  marginBottom: "-40px",
});

const StatsGrid = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: 'center',
});

const StatItem = styled(Box)({
  textAlign: "left",
  display: 'flex',
  alignItems: 'center',
});

const SmallDivider = styled(Divider)({
  backgroundColor: "#C4C4C4",
  height: "50px",
  margin: '0 20px',
  width: '0.1px',
});

// Component
function Header() {
  const navigate = useNavigate(); // Initialize navigate

  const handleCreateChallengeClick = () => {
    navigate('/admin'); // Navigate to CreateChallenge page
  };

  return (
    <HeaderContainer>
      <ContentContainer>
        <TitleContainer>
          <VerticalDivider orientation="vertical" />
          <TitleSection>
            <Title variant="h3" component="h1">
              Accelerate Innovation with Global AI Challenges
            </Title>
            <Description variant="body1">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </Description>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleCreateChallengeClick} // Handle button click
            >
              Create Challenge
            </Button>
          </TitleSection>
        </TitleContainer>
        <RocketImage src={Rocket} alt="Rocket" />
      </ContentContainer>

      <StatsContainer>
        <StatsGrid>
          <StatItem>
            <img src={Img1} alt="Image5" style={{ marginRight: '16px' }} />
            <Box>
              <Typography variant="h6">100K+</Typography>
              <Typography variant="body2">AI model submissions</Typography>
            </Box>
          </StatItem>
          
          <SmallDivider orientation="vertical" />

          <StatItem>
            <img src={Img2} alt="Image2" style={{ marginRight: '16px' }} />
            <Box>
              <Typography variant="h6">50K+</Typography>
              <Typography variant="body2">Data Scientists</Typography>
            </Box>
          </StatItem>
          
          <SmallDivider orientation="vertical" />

          <StatItem>
            <img src={Img3} alt="Image3" style={{ marginRight: '16px' }} />
            <Box>
              <Typography variant="h6">100+</Typography>
              <Typography variant="body2">AI Challenges hosted</Typography>
            </Box>
          </StatItem>
        </StatsGrid>
      </StatsContainer>
    </HeaderContainer>
  );
}

export default Header;
