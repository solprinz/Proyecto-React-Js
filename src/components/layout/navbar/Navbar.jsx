import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { CartWidget } from "../../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#7f0909", color: "#ffc500" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Harry P",
              fontSize: "70px",
            }}
          >
            lumos
          </Typography>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <a href="#">
              <li>Indumentaria</li>
            </a>
            <a href="#">
              <li>Accesorios</li>
            </a>
            <a href="#">
              <li>Tazas</li>
            </a>
          </ul>
          <Button color="inherit">
            <CartWidget />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
