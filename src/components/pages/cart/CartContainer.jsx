import { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";
import { Cart } from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice, getTotalItems } =
    useContext(CartContext);
  let total = getTotalPrice();
  let totalItems = getTotalItems();
  const limpiar = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se han eliminado los productos del carrito!", "", "success");
      }
    });
  };
  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      removeById={removeById}
      getTotalPrice={getTotalPrice}
      limpiar={limpiar}
      total={total}
      totalItems={totalItems}
    />
  );
};

export default CartContainer;
