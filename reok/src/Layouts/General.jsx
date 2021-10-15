import Footer from "components/Footer";
import PrivateRoute from "components/PrivateRoute";

const General = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="General">
        <main>{children}</main>
        <Footer />
      </div>
    </PrivateRoute>
  );
};

export default General;
