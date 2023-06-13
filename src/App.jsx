import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/itemList/ItemListContainer";
import { Layout } from "./components/layout/Layout";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemDetailContainer } from "./components/pages/itemDetail/itemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <h1>404 not found</h1>
              <Link to="/">Volver atrás</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <h1
style={{
  fontFamily: "Harry P",
  textAlign: "center",
  fontSize: "100px",
  color: "#7f0909",
  marginTop: "20px",
  letterSpacing: "15px",
}}
>
Bienvenidos
</h1> */
}
