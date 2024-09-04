import React from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";

const FilterComponent = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (event) => {
    onFilterChange({ ...filters, [event.target.name]: event.target.checked });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Filter by Status
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="all"
              checked={filters.all}
              onChange={handleCheckboxChange}
            />
          }
          label="All"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="active"
              checked={filters.active}
              onChange={handleCheckboxChange}
            />
          }
          label="Active"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="upcoming"
              checked={filters.upcoming}
              onChange={handleCheckboxChange}
            />
          }
          label="Upcoming"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="past"
              checked={filters.past}
              onChange={handleCheckboxChange}
            />
          }
          label="Past"
        />
      </FormGroup>

      <Typography variant="h6" gutterBottom style={{ marginTop: "1rem" }}>
        Filter by Level
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="easy"
              checked={filters.easy}
              onChange={handleCheckboxChange}
            />
          }
          label="Easy"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="medium"
              checked={filters.medium}
              onChange={handleCheckboxChange}
            />
          }
          label="Medium"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="hard"
              checked={filters.hard}
              onChange={handleCheckboxChange}
            />
          }
          label="Hard"
        />
      </FormGroup>
    </Box>
  );
};

export default FilterComponent;
