import { BsFillCartCheckFill } from "react-icons/bs";
import { Badge } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();
  return (
    <>
      <Badge
        style={{ color: "#ffc500" }}
        badgeContent={totalItems}
        showZero
        color="secondary"
      >
        <BsFillCartCheckFill size="30px" />
      </Badge>
    </>
  );
};
