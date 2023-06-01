import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
//import { ShoppingCartIcon } from "@mui/icons-material";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/*           {elemento.description}
           */}{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
