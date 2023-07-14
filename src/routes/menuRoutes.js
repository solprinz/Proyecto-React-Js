import CartContainer from "../components/pages/cart/CartContainer";
import { ItemDetailContainer } from "../components/pages/itemDetail/itemDetailContainer";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import { ItemListContainer } from "../components/itemList/ItemListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
