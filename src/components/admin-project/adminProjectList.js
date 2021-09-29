import React from "react";
import MUIDataTable from "mui-datatables";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const columns = [
  {
    name: "id",
    label: "id",
    options: {
      display: false
    }
  },
  {
    name: "title",
    label: "titre",
    options: {
      display: true
    }
  },
  {
    name: "price",
    label: "prix",
    options: {
      display: true
    }
  },
  {
    name: "description",
    label: "description",
    options: {
      display: true
    }
  }
];

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

const options = {
  filterType: "checkbox"
};
function adminProjectList() {
  return (
    <Box style={{ padding: "100px", textAlign: "center" }}>
      <MUIDataTable
        title={"list des projet"}
        data={projects}
        columns={columns}
        options={options}
      />
    </Box>
  );
}

export default adminProjectList;
