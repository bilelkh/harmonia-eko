import React from "react";
import ProjectItem from "./ProjectItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function ProjectList() {
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

  return (
    <Box>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {projects.map((p) => (
          <ProjectItem project={p} />
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectList;
