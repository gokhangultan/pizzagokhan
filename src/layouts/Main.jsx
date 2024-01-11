import Home from '../components/Home';
import { Switch, Route } from 'react-router-dom';
import Siparis from '../components/Siparis';
import SiparisOnay from '../components/SiparisOnay';
import { useState } from 'react';


export default function Main(props) {
  const [currentOrder, setCurrentOrder] = useState({});


  return (
    <div className="main-container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/siparisonay" >
          <SiparisOnay siparisOzeti={currentOrder}  />
        </Route>
        <Route path="/siparis">
          <Siparis setCurrentOrder={setCurrentOrder}/>
        </Route>
       
      </Switch>
    </div>
  );
}
