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
  const {selections, setSelections} = props;


  const handleToppingToggle = (topping) => {
    if (selections.includes(topping)) {
      // Tıklandığında malzeme zaten seçili ise kaldır
      setSelections((prevToppings) =>
        prevToppings.filter((item) => item !== topping)
      );
    } else if (selections.length < 10) {
      // Malzeme seçme sınırına ulaşılmamışsa ekle
      setSelections((prevToppings) => [...prevToppings, topping]);
    }
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
                checked={selections.includes(topping)}
                onChange={() => handleToppingToggle(topping)}
              />
              {topping}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaOrder;