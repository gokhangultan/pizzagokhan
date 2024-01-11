import { useState } from 'react';
import axios from 'axios';
import Header3 from '../layouts/Header';
import { Card, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom'
import PizzaOrder from './PizzaOrder';


const initialForm = {
  boyutSec: '',
  hamurSec: '',
  siparisNotu: '',
  availableToppings: []
};

const siparisForm = {
  boyutSec: '',
  hamurSec: '',
  siparisNotu: '',
  availableToppings: []
};


export default function Siparis(props) {
  const history = useHistory();
  const [formData, setFormData] = useState(initialForm);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0)
  const selections = useState([])
  const secimler = props.calculateTotal;

  function handleChange(event) {
    let { name, value } = event.target;
    setFormData(f => ({ ...f, [name]: value }));
  }
  
  function handleSubmit(event) {
    //3.1.1. default davranış engelle
    event.preventDefault();
    if (selections[0].length < 4) {
      alert('En az 4 malzeme seçmelisiniz.');
      return;
    }
    if (count < 1) {
      alert('Pizza adedi en az 1 olmalıdır.');
      return;
    }
    if (formData.boyutSec  == '') {
      alert('Pizza boyutu seçmelisiniz.');
      return;
    }
    
    //3.1.2. business logic uygula.
    const formData2 = { ...formData, count, availableToppings: selections[0] };
    axios
      .post('https://reqres.in/api/users', formData2)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => console.warn(err));
    //3.1.3. formu sıfırla -Yöntem 2: controlled
    setFormData(initialForm);
    history.push(`/SiparisOnay`);
    console.log(formData2);
  }
  function setOrder(e, i) {
    e.preventDefault();
    setCount((count) => count + i);
  }
  console.log(siparisForm);
  return <div><Header3 />
    <div className="container">
      <Card>
        <h2>Positon Absolute Acılı Pizza</h2>
        <h3>
          <ul>
            <li>85.50₺</li>
            <li>4.9</li>
            <li>(200)</li>
          </ul>
        </h3>
        <p className='pizzaInfo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Form onSubmit={handleSubmit}>
         <div className='pizzaBoyut'>
          <FormGroup>
            <p>Boyut seç *</p>
            <Input
              id="kucukBoy"
              name="boyutSec"
              type="radio"
              value="small"
              onChange={handleChange}
            />
            <Label for="boyutSec">Küçük</Label>
            <br />
            <Input
              id="ortaBoy"
              name="boyutSec"
              type="radio"
              value="medium"
              onChange={handleChange}
            />
            <Label for="boyutSec">Orta</Label>
            <br />
            <Input
              id="buyukBoy"
              name="boyutSec"
              type="radio"
              value="large"
              onChange={handleChange}
            />
            <Label for="boyutSec">Büyük</Label>
          </FormGroup>
                    <FormGroup>
            <Label for="hamurSec">Hamur Seç *</Label> <br />
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
          </div>
          <FormGroup>
            <h2>Ek Malzemeler</h2>
            <p>En Fazla 10 malzeme seçebilirsiniz. Her seçim 5₺ </p>
            <PizzaOrder selections={selections} secimler={secimler}/>
            {console.log(secimler)}
          </FormGroup>
          <br /><br />
          <FormGroup class="borderSiparis">
            <Label for="siparisNotu">Sipariş Notu</Label><br />
            <Input
              id="siparisNotu"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="textarea"
              value={formData.siparisNotu}
              onChange={handleChange}
            />
          </FormGroup>
          <div className="order-confirm">
            <div className="complex-buttons">
              <button onClick={(e) => setOrder(e, -1)}>
                -
              </button>
              <button disabled>
                {count}
              </button>
              <button onClick={(e) => setOrder(e, 1)}>
                +
              </button>
            </div>
            <div className="order-summary">
              <div className="summary-card">
                <h3>Sipariş Toplamı</h3>
                <div className="value-group">
              
                  <div className="tag">Seçimler</div>
                  <div className="value">{secimler}₺</div>
                </div>
                <div className="value-group">
                  <div className="tag">Toplam</div>
                  <div className="value">{count * 85.50}</div>
                </div>
              </div>
              <Button color="primary" type='submit'>SİPARİŞ VER</Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
    <div>
      
    </div></div>;
}
