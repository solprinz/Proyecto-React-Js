import "./ItemList.css";
import { ProductCard } from "../common/ProductCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Harry P",
          textAlign: "center",
          fontSize: "80px",
          color: "#7f0909",
          marginTop: "20px",
        }}
      >
        Tienda virtual de Harry Potter
      </h1>

      <div className="cards-container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};
