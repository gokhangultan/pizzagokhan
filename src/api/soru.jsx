import { Switch, Route, Link } from "react-router-dom";
import Product from "./Product";

export default function App() {
  return (
    <div>
      <h1>Ürünler</h1>
      <nav>
        <Link to="/product/1">Ürün 1</Link>
        <span> - </span>
        <Link to="/product/2">Ürün 2</Link>
        <span> - </span>
        <Link to="/product/3">Ürün 3</Link>
      </nav>
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

//Products component

import {useParams} from 'react-router-dom';
export default function Product() {
  const {id} = useParams();
  return (
    <div>
      <h2>ProductId: {id}</h2>
    </div>
  );
}