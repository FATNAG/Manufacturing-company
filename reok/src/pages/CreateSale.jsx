import { useState } from "react";
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
  Radio} from "@material-ui/core";
import { createSale } from "../services/SalesService";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  description: "",
  value: '',
  amount: '',
  total: '',
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

export function CreateSale() {
  const [sale, setSale] = useState(initialValue);
  const { saleName, description, value, amount, total } = sale;

  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const addSaleData = async () => {
    await createSale(sale);
    history.push("/Sales");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Register sale</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={saleName}
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
          onClick={(e) => addSaleData()}
          color="primary"
        >
          Create Sale
        </Button>
      </FormControl>
    </FormGroup>
  );
}
