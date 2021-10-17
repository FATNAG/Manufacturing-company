import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { NavBarSales } from "components/NavBarSales";
import "assets/css/products.css";

const Sales = ({ children }) => {
  return (
    <div className="Productos">
      <Navbar title={"Gestion de Productos"} />
      <NavBarSales />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Sales;
