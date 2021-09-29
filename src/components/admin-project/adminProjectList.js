import * as React from "react";
import MUIDataTable from "mui-datatables";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const columns = [
  {
    name: "id",
    label: "id",
    options: {
      display: false,
    },
  },
  {
    name: "title",
    label: "titre",
    options: {
      display: true,
    },
  },
  {
    name: "price",
    label: "prix",
    options: {
      display: true,
    },
  },
  {
    name: "description",
    label: "description",
    options: {
      display: true,
    },
  },
];

const projects = [
  {
    id: 1,
    title: "lorem ipsum",
    image: "https://fakeimg.pl/300/",
    price: 10,
    description: "lorem ipsum set dolro  sasa",
  },
  {
    id: 2,

    title: "lorem ipsum",
    image: "https://fakeimg.pl/300/",
    price: 10,
    description: "lorem ipsum set dolro sasasasasa ",
  },
  {
    id: 3,

    title: "lorem ipsum",
    image: "https://fakeimg.pl/300/",
    price: 10,
    description: "lorem ipsum set dolro sasasasa ",
  },
  {
    id: 4,

    title: "lorem ipsum",
    image: "https://fakeimg.pl/300/",
    price: 10,
    description: "lorem ipsum set dolro  sassasaa",
  },
  {
    id: 5,

    title: "lorem ipsum",
    image: "https://fakeimg.pl/300/",
    price: 10,
    description: "lorem ipsum set dolro sasa",
  },
  {
    id: 6,
    title: "lorem ipsum",
    image: "https://fakeimg.pl/300/",
    price: 10,
    description: "lorem ipsum set dolro  sasa",
  },
];

const options = {
  filterType: "checkbox",
};
function AdminProjectList() {
  const history = useHistory();
  const navigateTo = () => {
    history.push("/admin/project/add");
  };
  
  return (
    <Box
      style={{ padding: "100px", textAlign: "center" }}
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <div style={{ float: "right" }}>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={navigateTo}>
            <Icon
              baseClassName="fas"
              className="fa-plus-circle"
              color="primary"
            />
            Add new Project
          </Button>
        </Stack>
      </div>
      <br />
      <br />
      <br />
      <MUIDataTable
        title={"list des projet"}
        data={projects}
        columns={columns}
        options={options}
      />
    </Box>
  );
}

export default AdminProjectList;
