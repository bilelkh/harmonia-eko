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

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest
//   })
// }));

function ProjectDetails(props) {
  const id = props.match.params.id;
  console.log("===props.match.params.id===", props.match.params.id);
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
    <Grid item xs={12} sm={6} md={4}>
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
        {/* <CardActions
          disableSpacing
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <TextField id="standard-basic" type="number" variant="standard" />
          <Button variant="contained">Add to Cart</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
}

export default ProjectDetails;
