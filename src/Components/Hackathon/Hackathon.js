import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Popover,
  TextField,
  Chip,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChallengeCard from "./ChallengeCard";  // Ensure this import is correct
import FilterComponent from "./FilterComponent";
import challengeImg from "../../assets/cardimage/Group 1000002771.png";
import challengeImg2 from "../../assets/cardimage/Group 1000002466.png";
import challengeImg3 from "../../assets/cardimage/Group 1000002766.png";
import challengeImg4 from "../../assets/cardimage/Group 1000002767.png";
import challengeImg5 from "../../assets/cardimage/Group 1000002772.png";
import challengeImg6 from "../../assets/cardimage/Group 1000002773.png";

const challenges = [
  {
    id: 1, // Add unique id to each challenge
    title: "Data Science Bootcamp - Graded Datathon",
    status: "Upcoming",
    timeLeft: "02:15:22",
    image: challengeImg,
  },
  {
    id: 2, // Add unique id to each challenge
    title: "Data Sprint 72 Butterfly Identification",
    status: "Upcoming",
    timeLeft: "04:12:34",
    image: challengeImg2,
  },
  {
    id: 3, // Add unique id to each challenge
    title: "Data Sprint 71 Weather Recognition",
    status: "Active",
    timeLeft: "00:08:34",
    image: challengeImg3,
  },
  {
    id: 4, // Add unique id to each challenge
    title: "Data Sprint 70-Airline Passenger Satisfaction",
    status: "Active",
    timeLeft: "00:04:34",
    image: challengeImg4,
  },
  {
    id: 5, // Add unique id to each challenge
    title: "Engineering Graduates Employment Outcomes",
    status: "Past",
    timeLeft: "00:12:34",
    startDate: "2024-07-01",
    endDate: "2024-07-15",
    image: challengeImg5,
  },
  {
    id: 6, // Add unique id to each challenge
    title: "Travel Insurance Claim Prediction",
    status: "Past",
    timeLeft: "00:07:34",
    startDate: "2024-08-01",
    endDate: "2024-08-15",
    image: challengeImg6,
  },
];

const Container = styled(Box)(() => ({
  padding: "4rem 2rem",
  backgroundColor: "#0A3D62",
  color: "#000000",
  minHeight: "100vh",
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: '#ffffff',
  marginTop: '40px'
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: '60px',
  marginBottom: '20px',
}));

const SearchInput = styled(TextField)(() => ({
  width: "60%",
  backgroundColor: "#fff",
  borderRadius: '10px',
}));

const FilterButton = styled(Button)(() => ({
  borderRadius: '10px',
  padding: '17px 30px',
}));

const SelectedFiltersContainer = styled(Box)(() => ({
  display: 'flex',
  color: '#ffffff',
  marginTop: '30px',
  marginLeft: '180px',
  gap: '30px',
  marginBottom: '20px',
}));

const Hackathon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    all: true,
    active: false,
    upcoming: false,
    past: false,
    easy: false,
    medium: false,
    hard: false,
  });
  const [sortOrder, setSortOrder] = useState("Newest First");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'filter-popover' : undefined;

  // Apply filters to challenges
  const filteredChallenges = challenges
    .filter(challenge => {
      const statusFilter = filters.all || filters[challenge.status.toLowerCase()];
      return statusFilter;
    })
    .sort((a, b) => {
      if (sortOrder === "Newest First") {
        return b.timeLeft.localeCompare(a.timeLeft);
      } else {
        return a.timeLeft.localeCompare(b.timeLeft);
      }
    });

  // Get selected filter names
  const selectedFilterNames = Object.entries(filters)
    .filter(([key, value]) => value && key !== 'all')
    .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1));

  return (
    <Container>
      <HeaderSection>
        <Typography variant="h4" gutterBottom>
          Explore Challenges
        </Typography>
        <SearchContainer>
          <SearchInput variant="outlined" placeholder="Search challenges..." />
          <FilterButton variant="contained" color="primary" onClick={handleFilterClick}>
            Filter
          </FilterButton>
          <FormControl>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              style={{ color: '#fff', backgroundColor: '#1976d2', borderRadius: '10px', padding: '1px 10px' }}
            >
              <MenuItem value="Newest First">Newest First</MenuItem>
              <MenuItem value="Oldest First">Oldest First</MenuItem>
            </Select>
          </FormControl>
        </SearchContainer>
        <SelectedFiltersContainer>
          {selectedFilterNames.length > 0 ? (
            selectedFilterNames.map((filter, index) => (
              <Chip
                key={index}
                label={filter}
                variant="outlined"
                style={{ backgroundColor: '#e0e0e0', color: '#000' }}
                onDelete={() => {
                  const newFilters = { ...filters, [filter.toLowerCase()]: false };
                  setFilters(newFilters);
                }}
              />
            ))
          ) : (
            <Typography variant="body2" color="white">No filters selected</Typography>
          )}
        </SelectedFiltersContainer>
      </HeaderSection>
      <Box>
        <Grid container spacing={4}>
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge) => (
              <Grid item key={challenge.id} xs={12} sm={6} md={4}>
                <ChallengeCard challenge={challenge} />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center" color="white">
              No challenges match the selected filters
            </Typography>
          )}
        </Grid>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: { width: '180px', padding: '10px' },
        }}
      >
        <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
      </Popover>
    </Container>
  );
};

export default Hackathon;
