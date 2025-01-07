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

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err.response?.data);
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  const handleSocialSignIn = (provider) => {
    alert(`Social sign-in with ${provider} clicked!`);
    // You can replace this with actual logic for social sign-in integration
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
            Sign in to TourPlanner
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 3, width: '100%' }}>or</Divider>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Sign in with
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton
                aria-label="sign in with Google"
                size="large"
                sx={{ color: '#DB4437' }}
                onClick={() => handleSocialSignIn('Google')}
              >
                <GoogleIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="sign in with Facebook"
                size="large"
                sx={{ color: '#4267B2' }}
                onClick={() => handleSocialSignIn('Facebook')}
              >
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="sign in with Twitter"
                size="large"
                sx={{ color: '#1DA1F2' }}
                onClick={() => handleSocialSignIn('Twitter')}
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
