import { useFormik } from "formik";
import { Checkout } from "./Checkout";
import * as Yup from "yup";
import { database } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import { Glasses } from "../../common/glasses/Glasses";

export const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      card: "",
      exp: "",
      cod: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(database, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(database, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });
      clearCart();
    },
    validationOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es requerido")
        .min(3, "Este campo debe contener al menos 3 carácteres"),
      email: Yup.string()
        .email("Debes ingresar un e-mail")
        .required("Este campo es requerido")
        .min(8),
      phone: Yup.string()
        .required("Este campo es requerido")
        .min(8, "El telefono no es válido"),
      card: Yup.string()
        .required("Este campo es requerido")
        .min(16, "La tarjeta no es válida")
        .max(16, "La tarjeta no es válida"),
      exp: Yup.string()
        .required("Este campo es requerido")
        .min(4, "La fecha de vencimiento no es válida")
        .max(4, "La fecha de vencimiento no es válida"),
      cod: Yup.string()
        .required("Este campo es requerido")
        .min(3, "El código de seguridad no es válido")
        .max(3, "El código de seguridad no es válido"),
    }),
  });

  return (
    <div>
      {orderId ? (
        <>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Harry P",
              fontSize: "130px",
              color: "#7f0909",
            }}
          >
            Gracias por su compra!
          </h1>
          <h3
            style={{
              textAlign: "center",
            }}
          >
            Puede seguir su compra con el sigiente código: {orderId}
          </h3>
          <Glasses />
        </>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          total={total}
        />
      )}
    </div>
  );
};
