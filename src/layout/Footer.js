import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        position: "absolute",
        left: "0",
        right: "0",
      }}
    >
      <Box
        style={{
          backgroundColor: "#1976d2",
          color: "#fff"
        }}
        color="blue"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            harmonia-eko &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
