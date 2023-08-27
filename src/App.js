import './App.css';
import Card from './components/Card';
import Parent from './components/Parent';
import { useState } from 'react';

function App() {

  const [groceries, setGroceries] = useState([
    {
      name: "Cabbage",
      price: "1.80",
      stock: "3KG",
      country_of_origin: "Phillipines"
    },
    {
      name: "Luncheon Meat",
      price: "3.00",
      stock: "100 Cans",
      country_of_origin: "U.S.A."
    },
    {
      name: "Cheddar",
      price: "2.80",
      stock: "30 KG",
      country_of_origin: "Netherlands"
    },
    {
      name: "Jasmine Rice",
      price: "10.00",
      stock: "100 Bags",
      country_of_origin: "Thailand"
    },
  ])

  return (
    <div className="App">
      {
        ((groceries.map((grocery) => <Card name={grocery.name} price={grocery.price} stock={grocery.stock} country_of_origin={grocery.country_of_origin} />)))
      }
      <Parent />
    </div>
  );
}

export default App;
