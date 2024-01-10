import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg'
import styled from 'styled-components';


const Logo = styled.img`
display:flex;
align-items:center;
`;
function Header3(props) {

  return (
    <>
      <header>
        <div className="container">
          <Logo src={logo} />
          <nav>
            <NavLink exact to="/">
              {' '}
              Ana Sayfa
            </NavLink> <p className='menuTick'>-</p>
            <NavLink exact to="/siparis">
              Sipariş Oluştur
            </NavLink>
            <NavLink exact to="/siparisonay">
            </NavLink>

          </nav>
        </div>
      </header>
    </>
  );
}

export default Header3;
