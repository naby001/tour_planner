import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      console.error('Registration failed:', err.response?.data);
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  const handleSocialSignUp = (provider) => {
    alert(`Social sign-up with ${provider} clicked!`);
    // Replace this alert with actual social sign-up logic
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'grey.100',
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 2 }}>
        <Paper elevation={6} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="lock"
            sx={{ bgcolor: 'primary.main', color: 'white', mb: 2 }}
          >
            <LockOutlinedIcon />
          </IconButton>
          <Typography component="h1" variant="h5">
            Sign Up for TourPlanner
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  {'Already have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 3, width: '100%' }}>or</Divider>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Sign up with
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton
                aria-label="sign up with Google"
                size="large"
                sx={{ color: '#DB4437' }}
                onClick={() => handleSocialSignUp('Google')}
              >
                <GoogleIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="sign up with Facebook"
                size="large"
                sx={{ color: '#4267B2' }}
                onClick={() => handleSocialSignUp('Facebook')}
              >
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="sign up with Twitter"
                size="large"
                sx={{ color: '#1DA1F2' }}
                onClick={() => handleSocialSignUp('Twitter')}
              >
                <TwitterIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
