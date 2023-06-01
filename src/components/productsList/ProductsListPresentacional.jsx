//import "./ProductsList.css";

import ProductCard from "../common/ProductCard/ProductCard";

const ProductsListPresentacional = ({ items }) => {
  console.log(items);

  return (
    <div /* className="cards-container" */>
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ProductsListPresentacional;
