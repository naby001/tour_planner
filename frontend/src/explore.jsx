import { useState } from "react"
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import backgroundImage from "./assets/cover.jpg"
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
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
} from "@mui/material"
import { MapPin, Calendar, Users } from 'lucide-react'

// Mock data for tours
const tours = [
  {
    id: 1,
    title: "Paris City Tour",
    description: "Explore the romantic city of Paris",
    location: "Paris, France",
    duration: "3 days",
    groupSize: "10-15",
    price: 599,
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
  },
  {
    id: 2,
    title: "Tokyo Adventure",
    description: "Discover the vibrant culture of Tokyo",
    location: "Tokyo, Japan",
    duration: "5 days",
    groupSize: "8-12",
    price: 899,
    image: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
  },
  {
    id: 3,
    title: "New York City Explorer",
    description: "Experience the Big Apple's iconic sights",
    location: "New York, USA",
    duration: "4 days",
    groupSize: "12-18",
    price: 749,
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
  },
  {
    id: 4,
    title: "African Safari",
    description: "Witness wildlife in their natural habitat",
    location: "Serengeti, Tanzania",
    duration: "7 days",
    groupSize: "6-10",
    price: 1299,
    image: "https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
  },
  {
    id: 5,
    title: "Sydney Highlights",
    description: "Discover the beauty of Sydney",
    location: "Sydney, Australia",
    duration: "4 days",
    groupSize: "10-15",
    price: 799,
    image: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
  },
  {
    id: 6,
    title: "Rome Historical Tour",
    description: "Explore the ancient history of Rome",
    location: "Rome, Italy",
    duration: "5 days",
    groupSize: "8-12",
    price: 899,
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
  },
]

export function Explore() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDuration, setFilterDuration] = useState("")

  const filteredTours = tours.filter((tour) => {
    return (
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDuration === "" || tour.duration.includes(filterDuration))
    )
  })

  return (
    <Box
      sx={{
        px: 4,
        py: 8,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>Explore Tours</Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8 }}>
        <TextField
          label="Search tours..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: { md: '50%' } }}
        />
        <FormControl variant="outlined" sx={{ width: { md: '25%' } }}>
          <InputLabel>Filter by duration</InputLabel>
          <Select
            value={filterDuration}
            onChange={(e) => setFilterDuration(e.target.value)}
            label="Filter by duration"
          >
            <MenuItem value="">All durations</MenuItem>
            <MenuItem value="3 days">3 days</MenuItem>
            <MenuItem value="4 days">4 days</MenuItem>
            <MenuItem value="5 days">5 days</MenuItem>
            <MenuItem value="7 days">7 days</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {filteredTours.map((tour) => (
          <Grid item xs={12} md={6} lg={4} key={tour.id}>
            <Card>
              <CardHeader title={tour.title} />
              <CardMedia
                component="img"
                height="200"
                image={tour.image}
                alt={tour.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tour.description}
                </Typography>
                <Box sx={{ mt: 4, spaceY: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{tour.location}</span>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{tour.duration}</span>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Users className="w-4 h-4 mr-2" />
                    <span>{tour.groupSize} people</span>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="span">${tour.price}</Typography>
                <Button variant="contained" color="primary">Book Now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

