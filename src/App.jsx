import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import { menuRoutes } from "./routes/menuRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center" }}>
                <h1
                  style={{
                    fontFamily: "Harry P",
                    fontSize: "50px",
                    margin: 40,
                  }}
                >
                  Página no encontrada
                </h1>
                <Link
                  to="/"
                  style={{
                    border: "2px solid #7f0909",
                    padding: "10px 10px",
                    textAlign: "center",
                    color: "#ffc500",
                    backgroundColor: "#7f0909",
                    textDecoration: "none",
                  }}
                >
                  Volver atrás
                </Link>
              </div>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
