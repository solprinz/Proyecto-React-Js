/* export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Harry P",
          textAlign: "center",
          fontSize: "100px",
          color: "#7f0909",
          marginTop: "20px",
          letterSpacing: "15px",
        }}
      >
        {greeting}
      </h1>
      <h2 style={{ textAlign: "center" }}>Tienda virtual de Harry Potter </h2>
    </div>
  );
}; */

import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ProductsListPresentacional from "./ProductsListPresentacional";

export const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 3000); //reject ("La promesa salio mal")
    });

    tarea
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((error) => {
        console.log("catch: ", error);
      });
  }, []);

  return <ProductsListPresentacional items={items} />; //llama al hijo
};
