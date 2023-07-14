import { Button, InputAdornment, TextField } from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { AccountCircle } from "@mui/icons-material";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { Grid, ListItem } from "@mui/material";
import "../cart/Cart.css";
export const Checkout = ({ handleSubmit, handleChange, errors, total }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid
          item
          md={4}
          xs={12}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <ListItem>
            <h3>Datos del comprador:</h3>
          </ListItem>
          <ListItem>
            <TextField
              label="Nombre"
              variant="outlined"
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              error={errors.name ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              label="Repetir email"
              variant="outlined"
              name="repemail"
              onChange={handleChange}
              helperText={errors.repemail}
              error={errors.repemail ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              label="Telefono"
              variant="outlined"
              name="phone"
              onChange={handleChange}
              helperText={errors.phone}
              error={errors.phone ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
        </Grid>
        <Grid item md={4} xs={12}>
          <ListItem>
            <h3>Datos de la tarjeta:</h3>
          </ListItem>
          <ListItem>
            <TextField
              label="Número de tarjeta"
              variant="outlined"
              name="card"
              onChange={handleChange}
              helperText={errors.card}
              error={errors.card ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              label="Fecha de vencimiento"
              variant="outlined"
              name="exp"
              onChange={handleChange}
              helperText={errors.exp}
              error={errors.exp ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              label="Código de seguridad"
              variant="outlined"
              name="cod"
              onChange={handleChange}
              helperText={errors.cod}
              error={errors.cod ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          <Button
            className="btnCompra"
            type="submit"
            style={{ margin: "10px", backgroundColor: "#ffc500" }}
          >
            Pagar ${total}
          </Button>
        </Grid>
        <Grid item md={3} xs={6} style={{ textAlign: "center" }}>
          <img
            src={
              "https://res.cloudinary.com/diiphots8/image/upload/v1689343289/HarryP_jiftq3.png"
            }
            style={{ width: "300px" }}
          />
        </Grid>
      </Grid>
    </form>
  );
};
