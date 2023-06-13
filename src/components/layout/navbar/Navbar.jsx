import MenuIcon from "@mui/icons-material/Menu";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { CartWidget } from "../../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#7f0909",
          color: "#ffc500",
        }}
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
          <Link to="/" className="logo">
            lumos
          </Link>

          <div className="categorias">
            <Link to="/">Inicio</Link>
            <Link to="/category/indumentaria">Indumentaria</Link>
            <Link to="/category/tazas">Tazas</Link>
            <Link to="/category/accesorios">Accesorios</Link>
          </div>
          <Link to="/carrito" style={{ color: "#ffc500" }}>
            <CartWidget />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
