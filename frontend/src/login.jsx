import React, { useState } from 'react';
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

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempt with:', { email, password });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
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
                <Link href="#" variant="body2">
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
              <IconButton aria-label="sign in with Google" size="large" sx={{ color: '#DB4437' }}>
                <GoogleIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="sign in with Facebook" size="large" sx={{ color: '#4267B2' }}>
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="sign in with Twitter" size="large" sx={{ color: '#1DA1F2' }}>
                <TwitterIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://yourwebsite.com/">
              TourPlanner
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
