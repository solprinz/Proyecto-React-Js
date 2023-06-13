import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};
