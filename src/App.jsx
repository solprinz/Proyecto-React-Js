import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
