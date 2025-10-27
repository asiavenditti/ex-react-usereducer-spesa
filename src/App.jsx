
import './App.css'
import { useState } from 'react';
function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProduct, setAddedProduct] = useState([])


  function addToCart(product) {
    setAddedProduct([...addedProduct, { ...product, quantity: 1 }])
    console.log(addedProduct)
  }


  return (
    <>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index}>
            <span>{product.name}</span> -
            <span>€{product.price}</span>
            <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
