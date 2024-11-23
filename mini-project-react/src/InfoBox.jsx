import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    let INIT_IMG="https://vovam.in/wp-content/uploads/2021/10/Monsoon-Destinations-in-Nashik.jpg";
   
    return(
        <div>
      
            <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.Secondary" component={"span"}>
        <p>Temprature = {info.temp}&deg;C </p>
        <p>Humidity = {info.humidity}</p>
        <p>Min_Temp = {info.tempMin}&deg;C</p>
        <p>Max_temp = {info.tempMax}&deg;C</p>
        <p>The weather feelsLike = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    );
}