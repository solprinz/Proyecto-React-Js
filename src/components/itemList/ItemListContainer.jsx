import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { database } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loader } from "../common/Loader";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(database, "products");
    let consulta;

    if (!categoryName) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <ItemList items={items} />;
};
