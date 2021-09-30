import React from "react";
import landingImage from "../assets/image_1.jpg";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();


  const navigateToProject = () => {
      history.push('project')
  }


  return (
    <React.Fragment>
      <img
        style={{
          width: "100%",
          height: "500px",
          margin: "auto",
          display: "block"
        }}
        src={landingImage}
      />

      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "25px"
        }}
      >
        <Card>
          <CardMedia
            component="img"
            height="194"
            image="https://fakeimg.pl/300/"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum set dolro sasa
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            height="194"
            image="https://fakeimg.pl/300/"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum set dolro sasa
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            height="194"
            image="https://fakeimg.pl/300/"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum set dolro sasa
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "41px"
        }}
      >
        <Button
          onClick={navigateToProject}
          variant="outlined"
          style={{
            marginTop: "-10px",
          }}
          startIcon={<ArrowForwardIcon
            style={{
              marginTop: "-1px",
            }} />}
        >
          La listes des projets
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default Landing;
