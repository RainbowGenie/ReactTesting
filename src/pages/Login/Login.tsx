import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center"
});

const HeadingStyle = styled(Box)({
  textAlign: "center"
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff"
});

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

type setAuthFunction = (auth: boolean) => void;
const Login = ({ setAuth }: { setAuth: setAuthFunction }) => {
  const navigate = useNavigate();
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>Login to your account</Typography>
          </HeadingStyle>

          <LoginForm setAuth={setAuth} />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}>
            Don’t have an account?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/signup">
              Sign up
            </Link>
            <Button color="primary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
