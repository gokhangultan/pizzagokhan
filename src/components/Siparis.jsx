import { useState } from 'react';
import axios from 'axios';
import Header3 from '../layouts/Header';
import { Card, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import PizzaOrder from './PizzaOrder';

const initialForm = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  birthDate: '',
};


export default function Siparis()  {
  //Adım 1: form datalarını tutmak için bir state tanımlayalım. initial değerlerle başlamalı.
  const [formData, setFormData] = useState(initialForm);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0)

  //Adım 2-1: her değişimde state'deki form datasını güncelle => handleChange.
  function handleChange(event) {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  //Adım 3-1: onSubmit event'ini yakala ve istediğin şeyi yap => handleSubmit

  function handleSubmit(event) {
    //3.1.1. default davranış engelle
    event.preventDefault();
    //3.1.2. business logic uygula.
    axios
      .post('https://reqres.in/api/users', formData)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => console.warn(err));
    //3.1.3. formu sıfırla -Yöntem 2: controlled
    setFormData(initialForm);
  }
  return <div><Header3  /><Card>
  <h2>Positon Absolute Acılı Pizza</h2>
  <h3>
   <ul>
   <li>$Price</li>
   <li>$Point</li>
   <li>$Comment</li>
   </ul>
  </h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   <Form onSubmit={onsubmit}>
     <FormGroup>
       <p>Boyut seç *</p>
       <Input
         id="kucukBoy"
         name="kucukBoy"
         type="radio"
         value={formData.kucukBoy}
         onChange={handleChange}
       />
    <Label for="kucukBoy">Küçük</Label>
    <br/>
    <Input
         id="ortaBoy"
         name="ortaBoy"
         type="radio"
         value={formData.ortaBoy}
         onChange={handleChange}
       />
    <Label for="ortaBoy">Orta</Label>
    <br/>
    <Input
         id="buyukBoy"
         name="buyukBoy"
         type="radio"
         value={formData.buyukBoy}
         onChange={handleChange}
       />
    <Label for="buyukBoy">Büyük</Label>
     </FormGroup>
     
     <br/><br/>
     <FormGroup>
       <Label for="hamurSec">Hamur Seç *</Label> <br/>
       <Input
         id="hamurSec"
         name="hamurSec"
         type="select"
         value={formData.hamurSec}
         onChange={handleChange}
       >
          <option>Normal</option>
          <option>İnce Kenar</option>
          <option>Kalın Kenar</option>
       </Input>
     </FormGroup>
     <br/><br/>          
     <FormGroup>
       <h2>Ek Malzemeler</h2> 
       <p>En Fazla 10 malzeme seçebilirsiniz. Her seçim 5₺ </p>
 
<PizzaOrder />




     </FormGroup>
     <br/><br/>
     <FormGroup class="borderSiparis">
       <Label for="confirmPassword">Sipariş Notu</Label><br/>
       <Input
         id="confirmPassword"
         name="confirmPassword"
         placeholder="Siparişine eklemek istediğin bir not var mı?"
         type="textarea"
         value={formData.confirmPassword}
         onChange={handleChange}
       />
     </FormGroup>
     <br/><br/>
     
     
        
        <button onClick={() => setCount((count) => count - 1)}>
        -
        </button>
        <button disabled>
          {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>

     <FormGroup>
       <Label for="birthDate">BirthDate</Label>
       <Input
         id="birthDate"
         name="birthDate"
         type="date"
         value={formData.birthDate}
         onChange={handleChange}
       />
     </FormGroup>
     <br/><br/>
     <Link to="/siparisonay"><Button color="primary">SİPARİŞ VER</Button></Link>
   </Form>
 </Card>
 <div>
   {users.map((item, index) => {
     return (
       <p key={item.id}>
         {item.fullName}-{item.createdAt}
       </p>
     );
   })}
 </div></div>;
}
