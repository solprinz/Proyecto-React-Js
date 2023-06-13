import { useCount } from "./hooks/useCount";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  return (
    <>
      <div className="itemCount" style={{ textAlign: "center" }}>
        <button style={{ paddingLeft: 3, paddingRight: 3 }} onClick={decrement}>
          -
        </button>
        <span style={{ margin: 5 }}>{count}</span>
        <button style={{ paddingLeft: 3, paddingRight: 3 }} onClick={increment}>
          +
        </button>
      </div>
      <div style={{ textAlign: "center", margin: 10 }}>
        <button
          style={{
            borderRadius: 10,
            border: "2px solid black",
            padding: 5,
            textAlign: "center",
          }}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
