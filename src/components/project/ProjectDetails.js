import * as React from "react";
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
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
function ProjectDetails(props) {
  const history = useHistory();

  const navigateToProject = () => {
    history.push("/project");
  };

  const id = props.match.params.id;
  const projects = [
    {
      id: 1,
      title: "lorem ipsum",
      image: "https://fakeimg.pl/300/",
      price: 10,
      description: "lorem ipsum set dolro  sasa"
    },
    {
      id: 2,

      title: "lorem ipsum",
      image: "https://fakeimg.pl/300/",
      price: 10,
      description: "lorem ipsum set dolro sasasasasa "
    },
    {
      id: 3,

      title: "lorem ipsum",
      image: "https://fakeimg.pl/300/",
      price: 10,
      description: "lorem ipsum set dolro sasasasa "
    },
    {
      id: 4,

      title: "lorem ipsum",
      image: "https://fakeimg.pl/300/",
      price: 10,
      description: "lorem ipsum set dolro  sassasaa"
    },
    {
      id: 5,

      title: "lorem ipsum",
      image: "https://fakeimg.pl/300/",
      price: 10,
      description: "lorem ipsum set dolro sasa"
    },
    {
      id: 6,
      title: "lorem ipsum",
      image: "https://fakeimg.pl/300/",
      price: 10,
      description: "lorem ipsum set dolro  sasa"
    }
  ];
  const project = projects.find((p) => Number(p.id) === Number(id));
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "250px",
        flexDirection: "column"
      }}
    >
      <Button
        onClick={navigateToProject}
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        style={{ marginBottom: "5px" }}
      >
        Retour
      </Button>
      <Card>
        <CardHeader title={project.title} />
        <CardMedia
          component="img"
          height="194"
          image={project.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProjectDetails;
