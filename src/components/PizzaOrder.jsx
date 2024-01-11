import React, { useState } from 'react';

const availableToppings = [
  'Mantar',
  'Biber',
  'Sucuk',
  'Zeytin',
  'Sosis',
  'Mısır',
  'Soğan',
  'Jalapeno',
  'Zamazingo',
  'Peynir',
  'Ançüez',
  'Ton Balığı',
  'Peynir Sos',
  'Barbekü Sos',
];

const PizzaOrder = (props) => {
  const [selectedToppings, setSelectedToppings] = useState(props.selections[0]);
  const toppingPrice = 5;
  const secimler = props.calculateTotal;


  const handleToppingToggle = (topping) => {
    if (selectedToppings.includes(topping)) {
      // Tıklandığında malzeme zaten seçili ise kaldır
      setSelectedToppings((prevToppings) =>
        prevToppings.filter((item) => item !== topping)
      );
    } else if (selectedToppings.length < 10) {
      // Malzeme seçme sınırına ulaşılmamışsa ekle
      setSelectedToppings((prevToppings) => [...prevToppings, topping]);
    }
    props.selections[1](selectedToppings);
  };

  const calculateTotal = () => {
    return selectedToppings.length * toppingPrice;
  };

  return (
    <div>
      <h2>Malzeme Seçimi</h2>
      <p>En fazla 10 malzeme seçebilirsiniz.</p>
      <ul>
        {availableToppings.map((topping) => (
          <li key={topping}>
            <label>
              <input
                type="checkbox"
                checked={selectedToppings.includes(topping)}
                onChange={() => handleToppingToggle(topping)}
              />
              {topping}
            </label>
          </li>
        ))}
      </ul>
      <h3>Sipariş Toplamı: {calculateTotal()} TL</h3>
    </div>
  );
};

export default PizzaOrder;