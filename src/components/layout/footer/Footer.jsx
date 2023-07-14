import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Harry P",
          fontSize: "45px",
          margin: 10,
          color: "#ffc500",
        }}
      >
        I solemnly swear that I am up to no good
      </h3>
      <div
        style={{
          backgroundColor: "#7f0909",
          color: "#ffc500",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          Seguinos en nuestras redes:
          <InstagramIcon style={{ marginLeft: 10 }} />
          <FacebookIcon style={{ marginLeft: 10 }} />
          <TwitterIcon style={{ marginLeft: 10 }} />
        </div>
        <br />
        <div>Sol Prinzen - React Js Comision 43420</div>
      </div>
    </>
  );
};
