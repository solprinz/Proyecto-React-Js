import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";

export const CartWidget = () => {
  return (
    <Box>
      <ShoppingCartIcon fontSize="large" />
      <span
        style={{
          position: "absolute",
          border: "#ffc500 solid 1px",
          borderRadius: "150px",
          padding: "0 6px",
          fontSize: "10px",
        }}
      >
        2
      </span>
    </Box>
  );
};
