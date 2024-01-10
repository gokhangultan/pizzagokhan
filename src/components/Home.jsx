
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const HomeLogo = styled.img`
text-align: center;

`;

export default function Home() {
  


  return (
    <div className='main-content'>
      <HomeLogo src={logo} className='home-logo' />
      <h2 className='home-title-h2'>KOD ACIKTIRIR <br />PİZZA, DOYURUR</h2>
      <Link to="/siparis"><button >ACIKTIM</button></Link>
    </div>

  );
}
