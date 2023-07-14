import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ elemento }) => {
  return (
    <div>
      <Card
        sx={{
          width: 300,
          height: 480,
        }}
        className="cards"
      >
        <CardMedia
          sx={{ height: 300, minHeight: 200 }}
          image={elemento.img}
          className="cardsImg"
          title={elemento.title}
        />
        <CardContent>
          <h2 className="titleImg">{elemento.title}</h2>
          <h4 style={{ textAlign: "end", color: "#7f0909" }}>
            ${elemento.price}
          </h4>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${elemento.id}`}>
            <Button>Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
