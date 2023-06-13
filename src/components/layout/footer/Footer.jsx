import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#7f0909",
        color: "#ffc500",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>Seguinos en nuestras redes</div>
      <div>
        <InstagramIcon style={{ margin: 5 }} />
        <FacebookIcon style={{ margin: 5 }} />
        <TwitterIcon style={{ margin: 5 }} />
      </div>
      <br />
      <div>Sol Prinzen - React Js Comision 43420</div>
    </div>
  );
};
