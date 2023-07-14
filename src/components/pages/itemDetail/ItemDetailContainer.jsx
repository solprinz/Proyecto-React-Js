import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";
import { database } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { Loader } from "../../common/Loader";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó el producto al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(database, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ItemDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
          onAdd={onAdd}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};
