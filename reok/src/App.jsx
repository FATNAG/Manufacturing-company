import Index from "pages/Index";
import Login from "pages/Login";
import Products from "pages/Products";
import Sales from "pages/Sales";
import Users from "pages/Users";
import Vendors from "pages/Vendors";
import General from "Layouts/General";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/Products', '/Sales', '/Users', '/Vendors']}>
          <General>
            <Switch>
              <Route path="/Products">
                <Products/>
              </Route>
              <Route path="/Sales">
                <Sales/>
              </Route>
              <Route path="/Users">
                <Users/>
              </Route>
              <Route path='/Vendors'>
                <Vendors/>
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
