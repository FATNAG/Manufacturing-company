import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { editSale, getSale } from "../services/SalesService";
import { useHistory, useParams } from "react-router-dom";

const initialValue = {
  name: "",
  description: "",
  value: "",
  amount: "",
  total: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

export function EditSale() {
  const [sale, setSale] = useState(initialValue);
  const { name, description, value, amount, total } = sale;
  const classes = useStyles();
  let history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    loadSaleData();
  }, []);

  const loadSaleData = async () => {
    let response = await getSale(id);
    setSale(response.data.data);
  };

  const onValueChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const updateProductData = async () => {
    await editSale(sale);
    history.push("/Sales");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Editar venta</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Description</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="description"
          value={description}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Value</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="value"
          value={value}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Amount</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="amount"
          value={amount}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Total</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="total"
          value={total}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={(e) => updateProductData()}
          color="primary"
        >
          Editar Producto
        </Button>
      </FormControl>
    </FormGroup>
  );
}
