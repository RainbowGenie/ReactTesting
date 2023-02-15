import { useEffect, useState } from "react";
import { Button, Typography, Container, Box, Snackbar, Alert, AlertColor } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
//////////////////////////////////////
type setAuthFunction = (auth: boolean) => void;
const Home = ({ setAuth }: { setAuth: setAuthFunction }) => {
  const theme = useTheme();
  const location = useLocation();
  const { credentialCorrect } = location.state;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");
  useEffect(() => {
    if (credentialCorrect) {
      setOpen(true);
      setMessage("Login Success");
      setSeverity("success");
    }
  }, [credentialCorrect]);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "90vh"
      }}>
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
            letterSpacing: "-0.4rem"
          }
        }}
        gutterBottom>
        Welcome Back
      </Typography>

      <Button size="large" variant="contained" onClick={() => setAuth(false)}>
        Log out
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default Home;
