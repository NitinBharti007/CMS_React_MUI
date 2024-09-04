import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Challenge from './Components/Challenges/Challenge';
import ChallengeDetail from './Components/Hackathon/ChallengeDetail';
import Hackathon from './Components/Hackathon/Hackathon';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CreateChallenge from './Components/Challenges/CreateChallenge';
import EditChallenge from './Components/Hackathon/EditChallenge';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    common: {
      white: '#ffffff',
    },
  },
  spacing: 8,
});

function AppContent() {
  const location = useLocation();

  const isChallengeDetailPage = location.pathname.startsWith('/challenge/');
  const isEditChallengePage = location.pathname.startsWith('/edit-challenge/');
  const isAdminPage = location.pathname === '/admin';

  return (
    <div>
      {!isChallengeDetailPage && !isEditChallengePage && !isAdminPage && (
        <>
          <Navbar />
          <Header />
          <Challenge />
          <Hackathon />
        </>
      )}
      <Routes>
        <Route path="/challenge/:id" element={<ChallengeDetail />} />
        <Route path="/admin" element={<CreateChallenge />} />
        <Route path="/edit-challenge/:id" element={<EditChallenge />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
