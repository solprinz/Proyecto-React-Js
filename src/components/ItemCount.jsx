import { useCount } from "./hooks/useCount";
import "./pages/cart/Cart.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  return (
    <>
      <div className="itemCount" style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "5px 10px",
            border: " #7f0909 solid 2px",
            borderRadius: "10px",
          }}
          onClick={decrement}
        >
          -
        </button>
        <span style={{ margin: 5 }}>{count}</span>
        <button
          style={{
            padding: "5px 10px",
            border: " #7f0909 solid 2px",
            borderRadius: "10px",
          }}
          onClick={increment}
        >
          +
        </button>
      </div>
      <div style={{ textAlign: "center", margin: 10 }}>
        <button className="btnCarrito" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
