import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/Homepage'; 
import LoginPage from './pages/Login'; 
import SignUpPage from './pages/SignUp'; 
import {Explore} from './pages/explore'; 
import {About} from './pages/about'; 
import GroupTourMagazine from './pages/magazine'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      '@media (min-width:600px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={ <Explore/>} />
          {/* <Route path="/plan" element={<PlanYourTrip />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/magazine" element={<GroupTourMagazine/>} /> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

