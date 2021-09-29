import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        position: "absolute",
        width: "100%",
      }}
    >
      <Box
        style={{
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "16px",
        }}
        color="blue"
      >
        <Container maxWidth="lg">
          {/* <img src={logo} /> */}
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            harmonia-eko &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
