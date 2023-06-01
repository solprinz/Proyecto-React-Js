import { Navbar } from "./components/layout/navbar/Navbar";
import ProductCard from "./components/common/ProductCard/ProductCard";
import { ProductsListContainer } from "./components/productsList/ProductsListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ProductsListContainer />
      <ProductCard />
    </div>
  );
}

export default App;
