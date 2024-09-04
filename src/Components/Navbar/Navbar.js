import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from "../../assets/icons/logo.svg";

const NavbarContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '2px 40px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  boxSizing: 'border-box',
  top: 0,
  left: 0,
  zIndex: 1000,
});

const LogoImage = styled('img')({
  width: '60px',
  height: '40px',
  paddingLeft: '10px',
});

function Navbar() {
  return (
    <NavbarContainer>
      <LogoImage src={logo} alt="Logo" />
    </NavbarContainer>
  );
}

export default Navbar;
