import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";


export default function InfoBox({ info }) {
  let hotImgURL =
    "https://st.depositphotos.com/1000276/4915/i/950/depositphotos_49158383-stock-photo-sunny-day-in-mountain-landscape.jpg";
  let coldImgURL =
    "https://www.shutterstock.com/image-photo/exotic-view-snowcapped-spruces-on-600nw-1912812352.jpg";
  let rainyImgURL =
    "https://offloadmedia.feverup.com/secretsandiego.com/wp-content/uploads/2022/03/13025520/shutterstock_1195674502-1024x683.jpg";
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
              ? rainyImgURL
              : info.temp > 15
              ? hotImgURL
              : coldImgURL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humidity > 80
              ? <ThunderstormIcon/>
              : info.temp > 15
              ? <WbSunnyIcon/>
              : <AcUnitIcon/>
          }
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Min. Temperature = {info.tempMin}&deg;C</p>
            <p>Max. Temperature = {info.tempMax}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Wind speed = {info.windSpeed}m/s</p>
            <p>Sea-level = {info.seaLevel}hPa</p>
            <p>Groung-level = {info.groundLevel}hPa</p>
            <p>
              Weather can be describe as {info.weather} and feels like{" "}
              {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
