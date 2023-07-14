import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { CartWidget } from "../../CartWidget/CartWidget";
import "../../../index.css";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#7f0909",
        color: "#ffc500",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Menu hamburguesa */}
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Harry P",
              fontSize: "70px",
              textDecoration: "none",
              color: "#ffc500",
            }}
          >
            Lumos
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} className="categorias">
                <Link to="/">Inicio</Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} className="categorias">
                <Link to="/category/indumentaria">Indumentaria</Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} className="categorias">
                <Link to="/category/tazas">Tazas</Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} className="categorias">
                <Link to="/category/accesorios">Accesorios</Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} className="categorias">
                <Link to="/carrito">Carrito</Link>
              </MenuItem>
            </Menu>
          </Box>
          {/* Menu extendido */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Harry P",
              fontSize: "50px",
              textDecoration: "none",
              color: "#ffc500",
              letterSpacing: ".3rem",
            }}
          >
            Lumos
          </Typography>

          <Box
            className="categorias"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link className="links" to="/">
              Inicio
            </Link>
            <Link className="links" to="/category/indumentaria">
              Indumentaria
            </Link>
            <Link className="links" to="/category/tazas">
              Tazas
            </Link>
            <Link className="links" to="/category/accesorios">
              Accesorios
            </Link>
            <Link
              to="/carrito"
              style={{ color: "#ffc500", justifySelf: "flex-end" }}
            >
              <CartWidget />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
