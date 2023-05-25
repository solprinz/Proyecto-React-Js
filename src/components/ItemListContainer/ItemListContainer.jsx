export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Harry P",
          textAlign: "center",
          fontSize: "100px",
          color: "#7f0909",
          marginTop: "20px",
          letterSpacing: "15px",
        }}
      >
        {greeting}
      </h1>
      <h2 style={{ textAlign: "center" }}>Tienda virtual de Harry Potter </h2>
    </div>
  );
};
