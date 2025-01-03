import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  TextField,
  Avatar,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmailIcon from "@mui/icons-material/Email";
import backgroundImage from "./assets/cover.jpg";
import { Link } from "react-router-dom";
const tours = [
  {
    id: 1,
    title: "Paris Adventure",
    image:
      "https://images.pexels.com/photos/29972111/pexels-photo-29972111/free-photo-of-eiffel-tower-at-sunset-with-seine-river.jpeg?auto=compress&cs=tinysrgb&w=600?height=200&width=300",
    description: "Explore the City of Light",
  },
  {
    id: 2,
    title: "Tokyo Discovery",
    image:
      "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=600?height=200&width=300",
    description: "Experience the blend of tradition and modernity",
  },
  {
    id: 3,
    title: "New York City Escape",
    image:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=600?height=200&width=300",
    description: "The city that never sleeps awaits",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    avatar: "url(${backgroundImage})",
    text: "TourPlanner made our family vacation unforgettable!",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "url(${backgroundImage})",
    text: "The best way to discover hidden gems in any city.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "/placeholder.svg?height=50&width=50",
    text: "I've never had such a seamless travel experience before.",
  },
];

const destinations = [
  {
    id: 1,
    name: "Bali",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600?height=300&width=400",
  },
  {
    id: 2,
    name: "Santorini",
    image:
      "https://images.pexels.com/photos/29972111/pexels-photo-29972111/free-photo-of-eiffel-tower-at-sunset-with-seine-river.jpeg?auto=compress&cs=tinysrgb&w=600?height=200&width=300",
  },
  {
    id: 3,
    name: "Machu Picchu",
    image:
      "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=400?height=300&width=400",
  },
  {
    id: 4,
    name: "Kyoto",
    image:
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400?height=300&width=400",
  },
];

function HomePage() {
  const [currentDestination, setCurrentDestination] = React.useState(0);

  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestination(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar>
          <ExploreIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TourPlanner
          </Typography>
          
          <Button color="inherit" component={Link} to="/explore">Explore</Button>
          <Button color="inherit" component={Link} to="">Plan Your Trip</Button>
          <Button color="inherit" component={Link} to="">Magazine</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          py: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
          >
            Plan Your Dream Tour
          </Typography>
          <Typography variant="h5" align="center" color="white" paragraph>
            Discover amazing destinations and create unforgettable memories with
            our tour planning service.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Where do you want to go?"
                  InputProps={{
                    startAdornment: (
                      <SearchIcon sx={{ color: "action.active", mr: 1 }} />
                    ),
                    style: { backgroundColor: "white" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<EmojiPeopleIcon />}
                  sx={{ backgroundColor: "blue", color: "white" }}
                >
                  Plan Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Featured Tours
        </Typography>
        <Grid container spacing={4}>
          {tours.map((tour) => (
            <Grid item key={tour.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
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
                  <Typography>{tour.description}</Typography>
                </CardContent>
                <Button size="small" sx={{ m: 2 }}>
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.5)", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Featured Destinations
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 400,
              overflow: "hidden",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "white",
              }}
              onClick={prevDestination}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "white",
              }}
              onClick={nextDestination}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${currentDestination * 100}%)`,
              }}
            >
              {destinations.map((destination) => (
                <Box
                  key={destination.id}
                  sx={{
                    flexShrink: 0,
                    width: "100%",
                    height: 400,
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      p: 2,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {destination.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          What Our Travelers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ mr: 2 }}
                  />
                  <Typography variant="subtitle1">
                    {testimonial.name}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  "{testimonial.text}"
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.7)",
          p: 6,
          mt: "auto",
        }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Ready to start your adventure?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            display: "block",
            mx: "auto",
            mt: 2,
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Create Your Tour Now
        </Button>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <EmailIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: { backgroundColor: "white" },
            }}
            sx={{ mr: 2 }}
          />
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            Subscribe to Newsletter
          </Button>
        </Box>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
          sx={{ mt: 3 }}
        >
          © {new Date().getFullYear()} TourPlanner. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
