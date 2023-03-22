import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CircularProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SinglePhone() {
    const { id }= useParams()
    const [phone, setPhone] = useState({});
    const [loading, setLoading] = useState(true);


    async function fetchPhone() {
        try {
            console.log(id)
          const response = await axios.get(`http://localhost:5005/phones/${id}`);
          console.log(response)
          setPhone(response.data);
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        fetchPhone();
    }, []);


    if(loading) {
        return (
          <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <CircularProgress />
          </Box>
        )
      }  


  return (
    <Card sx={{ maxWidth: 345, padding:"10px 100px" , boxShadow:3, margin:"10px"}}>
      <CardActionArea component={RouterLink} to={`/phones/${phone.id}`}>
        <CardMedia
          component="img"
          height="440"
          image={`/${phone.imageFileName}`}
          alt="green iguana"
        />
        <CardContent sx={{width: "100%",}}>
          <Typography gutterBottom variant="h2" component="div">
            {phone.name}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Manufacturer:</Typography>{phone.manufacturer}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Color:</Typography> {phone.color}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Description:</Typography> {phone.description}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Price:</Typography> {phone.price}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Screen:</Typography> {phone.screen}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Description:</Typography> {phone.description}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Processor:</Typography> {phone.processor}
          </Typography>
          <Typography sx={{padding: "5px 0", display:"flex", flexDirection:"column"}}>
            <Typography variant='h5'>Ram:</Typography> {phone.ram}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
