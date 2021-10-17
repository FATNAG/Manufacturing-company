import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getSales, deleteSale } from "../services/SalesService";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

export function SaleList() {
  const classes = useStyles();

  const [sales, setSales] = useState([]);

  useEffect(() => {
    getAllSales();
  }, []);

  const getAllSales = async () => {
    let response = await getSales();
    console.log(response);
    setSales(response.data.data);
  };

  const deleteSaleData = async (id) => {
    let callbackUser = window.confirm("Esta seguro de eliminar el producto");
    if (callbackUser) {
      await deleteSale(id);
      getAllSales();
    }
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Value</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Total</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sales.map((sale) => (
          <TableRow className={classes.row} key={sale._id}>
            <TableCell>{sale._id}</TableCell>
            <TableCell>{sale.name}</TableCell>
            <TableCell>{sale.description}</TableCell>
            <TableCell>{sale.value}</TableCell>
            <TableCell>{sale.amount}</TableCell>
            <TableCell>{sale.total}</TableCell>
            <TableCell>
              <Button
                component={Link}
                to={`/Sales/edit/${sale._id}`}
                color="primary"
              >
                Editar
              </Button>
              <Button
                color="secondary"
                onClick={() => deleteSaleData(sale._id)}
              >
                Borrar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
