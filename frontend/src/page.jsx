import React from 'react';
import {
    Box,
    TextField,
    Typography, // Add this line
    Button // Add this line
  } from "@mui/material";
  import { Search as SearchIcon, Explore as ExploreIcon, EmojiPeople as EmojiPeopleIcon } from "@mui/icons-material";
  

const tours = [
  { id: 1, title: 'Paris Adventure', image: '/placeholder.svg?height=200&width=300', description: 'Explore the City of Light' },
  { id: 2, title: 'Tokyo Discovery', image: '/placeholder.svg?height=200&width=300', description: 'Experience the blend of tradition and modernity' },
  { id: 3, title: 'New York City Escape', image: '/placeholder.svg?height=200&width=300', description: 'The city that never sleeps awaits' },
];

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ExploreIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TourPlanner
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Plan Your Dream Tour
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Discover amazing destinations and create unforgettable memories with our tour planning service.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Where do you want to go?"
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<EmojiPeopleIcon />}
                >
                  Plan Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Featured Tours
        </Typography>
        <Grid container spacing={4}>
          {tours.map((tour) => (
            <Grid item key={tour.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                  }}
                  image={tour.image}
                  alt={tour.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {tour.title}
                  </Typography>
                  <Typography>
                    {tour.description}
                  </Typography>
                </CardContent>
                <Button size="small" sx={{ m: 2 }}>View Details</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Ready to start your adventure?
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          Create Your Tour Now
        </Button>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          sx={{ mt: 3 }}
        >
          © {new Date().getFullYear()} TourPlanner. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

