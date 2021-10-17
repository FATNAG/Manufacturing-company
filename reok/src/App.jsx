import Index from "pages/Index";
import Products from "./Layouts/Products";
import Users from "./Layouts/Users";
import Sales from "Layouts/Sales"
import General from "Layouts/General";
import Vendors from "pages/Vendors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProductList } from './pages/ProductList';
import { CreateProduct } from  './pages/CreateProduct'
import { EditProduct } from './pages/EditProduct'
import { UserList } from './pages/UserList';
import { CreateUser } from  './pages/CreateUser'
import { EditUser } from './pages/EditUser'
import { CreateSale } from "pages/CreateSale";
import { EditSale } from "./pages/EditSale";
import { SaleList} from './pages/SaleList';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/Products"]}>
          <Products>
            <Switch>
              <Route exact path="/Products" component={ProductList} />
              <Route exact path="/Products/add" component={CreateProduct} />
              <Route exact path="/Products/edit/:id" component={EditProduct} />
            </Switch>
          </Products>
        </Route>

        <Route path={["/Users"]}>
          <Users>
            <Switch>
              <Route exact path="/Users" component={UserList} />
              <Route exact path="/Users/add" component={CreateUser} />
              <Route exact path="/Users/edit/:id" component={EditUser} />
            </Switch>
          </Users>
        </Route>

        <Route path={["/Sales"]}>
          <Sales>
            <Switch>
              <Route exact path="/Sales" component={SaleList} />
              <Route exact path="/Sales/add" component={CreateSale} />
              <Route exact path="/Sales/edit/:id" component={EditSale} />
            </Switch>
          </Sales>
        </Route>

        <Route path={['/Vendors']}>
          <General>
            <Switch>               
              <Route path='/Vendors'>
                <Vendors/>
              </Route>
            </Switch>
          </General>
        </Route>
        {/* <Route path={["/Login"]}>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </Route> */}
        <Route path={["/"]}>
          <Switch>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
