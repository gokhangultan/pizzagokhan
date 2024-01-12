import React from 'react';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const Text = styled.h2`
font-family: Roboto Condensed;
font-size: 86px;
font-weight: 300;
line-height: 92px;
letter-spacing: 1.5px;
text-align: center;
padding-top: 100px;
`;
const siparisNotu = styled.table`
color: white;
`;


export default function SiparisOnay(props) {
  const {siparisOzeti} = props;
const secimler = siparisOzeti.availableToppings;
  console.log(siparisOzeti);
  return (
    <div className='siparisOnay'>
      <img src={logo} className='home-logo' />
      <Text className='home-title-h2'>TEBRİKLER! <br />SİPARİŞİNİZ ALINDI!</Text>
      <siparisNotu className>
  <tr>
    <th>Boyut:</th>
    <th>{siparisOzeti.boyutSec}</th>
  </tr>
  <tr>
    <th>Hamur:</th>
    <th>{siparisOzeti.hamurSec}</th>
  </tr>
  <tr>
    <th>Ek Malzemeler:</th>
    <th>{siparisOzeti.availableToppings}</th>
  </tr>
  
  
</siparisNotu>
<siparisNotu>
  <tr>
    <th>Sipariş Toplamı</th>
  </tr>
  <tr>
    <th>Seçimler</th>
    <th>{siparisOzeti.availableToppings.length*5}</th>
  </tr>
 
  <tr>
    <th>Toplam</th>
    <th>{siparisOzeti.count*85.50+siparisOzeti.availableToppings.length*5}</th>
  </tr>
  
</siparisNotu>
    </div>
  );
}
