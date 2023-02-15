import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface MenuData {
  id: string;
  title: string;
}
const data: MenuData[] = [
  { id: "1", title: "Menu 1" },
  { id: "2", title: "Menu 2" },
  { id: "3", title: "Menu 3" },
  { id: "4", title: "Menu 4" }
];
type setAuthFunction = (auth: boolean) => void;
export default function Header({ auth, setAuth }: { auth: boolean; setAuth: setAuthFunction }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElAvatar, setAnchorElAvatar] = useState<null | HTMLElement>(null);

  const handleLogout = () => {
    setAuth(false);
  };

  const handleMenuAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAvatar(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Incredible
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuAvatar}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElAvatar}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElAvatar)}
                onClose={handleCloseAvatar}>
                <MenuItem onClick={handleCloseAvatar}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
          {!auth && (
            <Button onClick={() => navigate("/login")} color="inherit">
              Login
            </Button>
          )}
          {!auth && (
            <Button onClick={() => navigate("/signup")} color="inherit">
              Register
            </Button>
          )}
          <Button
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}>
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {data.map((item) => (
              <MenuItem key={item.id} onClick={handleClose}>
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
