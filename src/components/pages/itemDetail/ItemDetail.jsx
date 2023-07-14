import { Link } from "react-router-dom";
import { ItemCount } from "../../ItemCount";

export const ItemDetail = ({ productSelected, onAdd, cantidad }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h2
            style={{
              justifyContent: "center",
              textAlign: "center",
              margin: 10,
            }}
          >
            {productSelected.title}
          </h2>
          <img src={productSelected.img} style={{ height: 400 }} alt="" />

          {productSelected.stock === 0 ? (
            <div style={{ textAlign: "center", margin: 10 }}>
              <p style={{ margin: 20 }}>
                Lo sentimos, no hay stock disponible🙁
              </p>
              <Link to="/" className="btnCarrito">
                Volver atrás
              </Link>
            </div>
          ) : (
            <>
              <p style={{ textAlign: "center", margin: 10 }}>
                {productSelected.description}
              </p>
              <h4 style={{ textAlign: "center", margin: 10 }}>
                ${productSelected.price} c/u
              </h4>
              <ItemCount
                stock={productSelected.stock}
                initial={cantidad} //chequear que quede la cantidad que habaiamos agregado al carrito
                onAdd={onAdd}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
