import Index from "pages/Index";
import Products from "./Layouts/Products";
import Users from "./Layouts/Users";
import Sales from "./Layouts/Sales";
import General from "./Layouts/General";
import Vendors from "pages/Vendors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { CreateProduct } from "./pages/CreateProduct";
import { EditProduct } from "./pages/EditProduct";
import { UserList } from "./pages/UserList";
import { CreateUser } from "./pages/CreateUser";
import { EditUser } from "./pages/EditUser";
import { CreateSale } from "pages/CreateSale";
import { EditSale } from "./pages/EditSale";
import { SaleList } from "./pages/SaleList";
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from "components/PrivateRoute";

function App() {
  return (
    <Auth0Provider
      domain="manufacturing-company-reok.us.auth0.com"
      clientId="QyruU5gjTJ5oUtXIFOHFgt5Cz9uKvGei"
      redirectUri={window.location.origin}
      audience="authentication-manufacturing-company-reok-fatnag"
    >
      <Router>
        <Switch>
          <Route path={["/Products"]}>
            <PrivateRoute>
              <Products>
                <Switch>
                  <Route exact path="/Products" component={ProductList} />
                  <Route exact path="/Products/add" component={CreateProduct} />
                  <Route
                    exact
                    path="/Products/edit/:id"
                    component={EditProduct}
                  />
                </Switch>
              </Products>
            </PrivateRoute>
          </Route>

          <Route path={["/Users"]}>
            <PrivateRoute>
              <Users>
                <Switch>
                  <Route exact path="/Users" component={UserList} />
                  <Route exact path="/Users/add" component={CreateUser} />
                  <Route exact path="/Users/edit/:id" component={EditUser} />
                </Switch>
              </Users>
            </PrivateRoute>
          </Route>

          <Route path={["/Sales"]}>
            <PrivateRoute>
              <Sales>
                <Switch>
                  <Route exact path="/Sales" component={SaleList} />
                  <Route exact path="/Sales/add" component={CreateSale} />
                  <Route exact path="/Sales/edit/:id" component={EditSale} />
                </Switch>
              </Sales>
            </PrivateRoute>
          </Route>

          <Route path={["/Vendors"]}>
            <PrivateRoute>
              <General>
                <Switch>
                  <Route path="/Vendors">
                    <Vendors />
                  </Route>
                </Switch>
              </General>
            </PrivateRoute>
          </Route>

          <Route path={["/"]}>
            <Switch>
              <Route path="/">
                <Index />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
