import Home from '../components/Home';
import { Switch, Route } from 'react-router-dom';
import Siparis from '../components/Siparis';
import SiparisOnay from '../components/SiparisOnay';

export default function Main() {
  

  return (
    <div className="main-container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/siparisonay">
          <SiparisOnay />
        </Route>
        <Route path="/siparis">
          <Siparis />
        </Route>
       
      </Switch>
    </div>
  );
}
