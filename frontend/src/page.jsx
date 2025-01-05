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
        //color: "white",
        backgroundColor: "rgba(255, 223, 0, 0.4)",
      }}
    >
      <AppBar
  position="static"
  sx={{
    background: "#282a3a", // Gradient background
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
   // borderRadius:5,
   // width:900
  }}
>
  <Toolbar>
    <ExploreIcon
      sx={{
        mr: 2,
        color: "white",
        fontSize: 28,
        "&:hover": {
          color: "#ffd700", // Golden glow on hover
          textShadow: "0 0 8px #ffd700",
        },
      }}
    />
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        fontFamily: "k2d",
        fontWeight: "bold",
        color: "white",
        letterSpacing: 1.2,
      }}
    >
      TourPlanner
    </Typography>
    <Button
      color="inherit"
      component={Link}
      to="/explore"
      sx={{
        color: "white",
        fontSize: 16,
        "&:hover": {
          color: "#ffd700",
          transform: "scale(1.1)", // Slight enlargement on hover
        },
        transition: "transform 0.2s, color 0.2s",
      }}
    >
      Explore
    </Button>
    <Button
      color="inherit"
      component={Link}
      to=""
      sx={{
        color: "white",
        fontSize: 16,
        "&:hover": {
          color: "#ffd700",
          transform: "scale(1.1)",
        },
        transition: "transform 0.2s, color 0.2s",
      }}
    >
      Plan Your Trip
    </Button>
    <Button
      color="inherit"
      component={Link}
      to=""
      sx={{
        color: "white",
        fontSize: 16,
        "&:hover": {
          color: "#ffd700",
          transform: "scale(1.1)",
        },
        transition: "transform 0.2s, color 0.2s",
      }}
    >
      Magazine
    </Button>
    <Button
      color="inherit"
      component={Link}
      to="/about"
      sx={{
        color: "white",
        fontSize: 16,
        "&:hover": {
          color: "#ffd700",
          transform: "scale(1.1)",
        },
        transition: "transform 0.2s, color 0.2s",
      }}
    >
      About
    </Button>
    <Button
      color="inherit"
      component={Link}
      to="/login"
      sx={{
        color: "white",
        fontSize: 16,
        "&:hover": {
          color: "#ffd700",
          transform: "scale(1.1)",
        },
        transition: "transform 0.2s, color 0.2s",
      }}
    >
      Login
    </Button>
  </Toolbar>
</AppBar>

      <Box
        sx={{
          height:'100vh',
          display: "flex",
          flexDirection: "column",
         // justifyContent: "center",
          backgroundColor: "rgba(255, 223, 0, 0.4)",
          py: 6,
        }}
      >
       
          <Typography
            component="h1"
            //variant="h2"
            align="center"
            color="white"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 1,
              fontFamily: "K2D",
             fontSize: 100,
              textShadow: `
                1px 1px 0px #ff8c00, 
                2px 2px 0px #ff4500, 
                3px 3px 0px #ff1493, 
                4px 4px 0px #9400d3, 
                5px 5px 0px #1e90ff, 
                6px 6px 0px #00fa9a
              `,
              marginTop:10
            }}
          >
            Plan Your Dream Tour
          </Typography>
          <Typography variant="h5" align="center" color="white"   sx={{
            color: "white",
            mb: 4,
            fontFamily: "K2D",
            fontSize: 40,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}>
            Create a group with your friends and family and plan your upcoming getaway
          </Typography>
          <Box sx={{ mt: 4, alignItems: "center", display: "flex", flexDirection:"column" }}>
           
          <TextField
  fullWidth
  variant="outlined"
  placeholder="Tell us your plan and we will create an itinerary for you..."
  InputProps={{
    style: {
      backgroundColor: "#282a3a",
      borderRadius: 30,
      paddingLeft: 8, // Adjusted padding for better spacing
    },
  }}
  sx={{
    marginBottom: 2,
    width: "60%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(58, 134, 255, 0.8)", // Neon blue border
        borderWidth: 2,
      },
      "&:hover fieldset": {
        borderColor: "rgba(58, 134, 255, 1)", // Brighter on hover
        boxShadow: "0 0 8px rgba(58, 134, 255, 0.8)", // Neon glow
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(58, 134, 255, 1)", // Solid neon blue on focus
        boxShadow: "0 0 12px rgba(58, 134, 255, 1)", // Stronger glow on focus
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(255, 255, 255, 0.4)", // Placeholder text color
    },
    "& .MuiInputBase-input": {
      color: "white", // Input text color
    },
  }}
/>
      
            
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<EmojiPeopleIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Gradient colors
                    color: "white",
                    width: "15%",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Adds depth
                    borderRadius: "8px", // Rounded corners for a modern look
                    transition: "transform 0.2s, box-shadow 0.2s", // Smooth animation on hover
                    "&:hover": {
                      transform: "scale(1.05)", // Slightly enlarge on hover
                      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)", // Enhanced shadow
                    },
                    fontFamily: "K2D",
                  }}
                >
                  Create Tour
                </Button>
           
    
          </Box>
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
