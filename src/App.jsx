
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
    const existsAlready = addedProduct.some((item) => item.name === product.name)

    if (existsAlready) {
      setAddedProduct(
        addedProduct.map((item) => {
          if (item.name === product.name) {

            return { ...item, quantity: item.quantity + 1 }
          } else {

            return item;
          }
        })
      )
    } else {

      setAddedProduct([...addedProduct, { ...product, quantity: 1 }])
    }
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
      {addedProduct.length > 0 && (
        <div>
          <h2>Carrello</h2>
          {addedProduct.map((p, index) => {
            return (
              <ul key={index}>
                <li>Prodotto: {p.name}</li>
                <li>{`Prezzo: ${p.price.toFixed(2)} €`}</li>
                <li> Quantità {p.quantity}</li>
              </ul>
            )
          })}
        </div>
      )}
    </>
  )
}

export default App
