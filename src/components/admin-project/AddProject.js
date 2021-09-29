import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";
import { useHistory } from "react-router-dom";

function AddProject() {
  console.log("Add Project");
  function handleClick() {
    console.log("Save Project");
  }
  const history = useHistory();
  const navigateTo = () => {
    history.push("/admin/project");
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "55ch" },
      }}
      noValidate
      autoComplete="off"
      style={{
        marginTop: "80px",
      }}
    >
      <Button
        style={{
          marginTop: "6px",
          marginLeft: "500px",
        }}
        onClick={navigateTo}
      >
        <ArrowBackIcon>add_circle</ArrowBackIcon>Back
      </Button>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "53vh", width: "63vh" }}>
          <br />
          <br />
          <TextField
            label="Outlined primary"
            color="primary"
            focused
            required
            id="outlined-required"
            label="Required"
            placeholder="    Project Name"
          />
          <TextField
            label="Outlined primary"
            color="primary"
            focused
            required
            id="outlined-required"
            label="Required"
            placeholder="    Project Price"
          />
          <TextField
            label="Outlined primary"
            color="primary"
            focused
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={6}
            placeholder="   Project Description"
          />
          <Button
            color="primary"
            onClick={handleClick}
            startIcon={<SaveIcon />}
            variant="contained"
            style={{
              marginTop: "20px",
              marginLeft: "175px",
            }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default AddProject;
