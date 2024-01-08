import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg'

function Header3(props) {
 
  return (
    <>
      <header>
        <img src={logo} />
        <nav>
          <NavLink exact to="/">
            {' '}
            Ana Sayfa
          </NavLink>
          <NavLink exact to="/siparis">
            Sipariş Oluştur
          </NavLink>
          <NavLink exact to="/siparisonay">
          SiparisOnay
          </NavLink>
         
        </nav>
        
      </header>
    </>
  );
}

export default Header3;