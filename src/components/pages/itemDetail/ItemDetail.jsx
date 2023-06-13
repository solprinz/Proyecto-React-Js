import { ItemCount } from "../../ItemCount";

export const ItemDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = { ...productSelected, quantity: cantidad };

    console.log(
      "Has agregado al carrito ",
      data.quantity,
      "unidades del producto",
      data.title
    );
  };

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

          {productSelected.stock > 0 ? (
            <>
              <h4 style={{ textAlign: "center", margin: 10 }}>
                ${productSelected.price}
              </h4>
              <ItemCount
                stock={productSelected.stock}
                initial={1}
                onAdd={onAdd}
              />
            </>
          ) : (
            <p style={{ textAlign: "center", marginBottom: 10 }}>
              Lo sentimos, no hay stock disponible
            </p>
          )}
        </div>
      </div>
    </>
  );
};
