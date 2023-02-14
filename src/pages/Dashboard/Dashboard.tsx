import { Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../components/Logo";
//////////////////////////////////////

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <Box sx={{ mb: 5, mt: -10 }}>
        <Logo />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "-4rem",
          fontSize: "5rem",
          fontWeight: 700,
          letterSpacing: "-0.5rem",
          display: "inline-block",
          whiteSpace: "nowrap",
          [theme.breakpoints.down("sm")]: {
            fontSize: "4rem",
            letterSpacing: "-0.4rem",
          },
        }}
        gutterBottom
      >
        Dashboard
      </Typography>
    </Container>
  );
};
export default Dashboard;
