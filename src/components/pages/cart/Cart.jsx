import "./Cart.css";
import { Link } from "react-router-dom";

import { Grid, ListItem } from "@mui/material";

export const Cart = ({ limpiar, total, cart, removeById, totalItems }) => {
  return (
    <>
      <Grid container>
        {cart.length === 0 ? (
          <ListItem>
            <h2 style={{ margin: "50px" }}>El carrito está vacío</h2>
            <Link to="/">
              <button className="btnRemove">Agregar productos</button>
            </Link>
          </ListItem>
        ) : (
          <>
            <Grid item md={8} xs={12}>
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Harry P",
                  fontSize: "70px",
                  marginTop: "10px",
                  color: "#7f0909",
                }}
              >
                tu carrito
              </h1>

              <Grid item xs={12} md={12} className="cartItems">
                {cart.map((product) => {
                  return (
                    <Grid
                      item
                      xs={1}
                      lg={3}
                      md={1}
                      key={product.id}
                      className="cardsProducts"
                      style={{ margin: "5px" }}
                    >
                      <h2>{product.title}</h2>
                      <img src={product.img} className="imgProducts" />
                      <h3>Total: ${product.price * product.quantity}</h3>
                      <h4>Cantidad: {product.quantity}</h4>
                      <button
                        className="btnCarrito"
                        onClick={() => removeById(product.id)}
                      >
                        Eliminar
                      </button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid item xs={12} md={4} className="cartInfo">
              <h2 style={{ margin: "20px", color: "#7f0909" }}>
                Resumen de compra
              </h2>
              <h3 style={{ margin: "20px" }}>
                Cantidad de productos: {totalItems}
              </h3>
              <h3 style={{ margin: "20px" }}>Total de la compra: ${total}</h3>
              <div>
                <h4>Cupon de descuento: </h4>
                <input type="text" />
              </div>

              <button onClick={limpiar} className="btnCompra">
                Limpiar carrito
              </button>
              <Link to="/checkout">
                <button className="btnCompra">Continuar compra</button>
              </Link>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};
