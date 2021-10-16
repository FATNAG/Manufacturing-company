import Index from "pages/Index";
import Login from "pages/Login";
import Vendors from "pages/Vendors";
import Sales from "pages/Sales";
import General from "Layouts/General";
import Products from "./Layouts/Products";
import Users from "./Layouts/Users";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProductList } from './pages/ProductList';
import { CreateProduct } from  './pages/CreateProduct'
import { EditProduct } from './pages/EditProduct'


function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/Products']}>
          <Products>
            <Switch>
              <Route exact path="/Products" component={ProductList} />
              <Route exact path="/Products/add" component={CreateProduct} />
              <Route exact path="/Products/edit/:id" component={EditProduct} />
            </Switch>     
          </Products>
        </Route>  
        
        <Route path={['/Users']}>
          <Users>
            <Switch>
              
            </Switch>     
          </Users>
        </Route>

       
        
        
        <Route path={['/Sales','/Vendors']}>
          <General>
            <Switch>
                                   
              <Route path='/Vendors'>
                <Vendors/>
              </Route>
              <Route path='/Sales'>
                <Sales/>
              </Route>
            </Switch>
          </General>
        </Route>
        <Route path={['/Login']}>
          <Switch>
            <Route path='/Login'>
              <Login/>
            </Route>
          </Switch>
        </Route>
        <Route path={['/']}>
          <Switch>
            <Route path='/'>
              <Index/>
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
