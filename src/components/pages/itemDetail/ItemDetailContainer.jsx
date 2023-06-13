import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productFind = products.find((product) => product.id === Number(id));

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail productSelected={productSelected} />;
};
