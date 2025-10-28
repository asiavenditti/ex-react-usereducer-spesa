
import { useReducer } from 'react';
import './App.css'
// import { useState } from 'react';


function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProduct, dispatch] = useReducer(cartReducer, [])

  function cartReducer(state, action) {
    switch (action.type) {
      // aggiungi un prodotto
      case 'ADD_ITEM':
        return [...state, { ...action.payload, quantity: 1 }]


      // rimuovi prodotto
      case 'REMOVE_ITEM':
        return state.filter((item) => item.name !== action.payload.name)

      // aumenta la quantità 
      case 'UPDATE_QUANTITY':
        const alreadyExist = state.find(item => item.name === action.payload.name)

        if (alreadyExist) {
          // se il prodotto esiste, incrementa la quantità
          return state.map(item => {
            if (item.name === action.payload.name) {
              return { ...item, quantity: item.quantity + 1 }
            } else {
              return item
            }
          });
        } else {
          // se non esiste, lo aggiunge con quantity = 1
          return [...state, { ...action.payload, quantity: 1 }]
        }
    }
  }

  // const [addedProduct, setAddedProduct] = useState([])


  // function addToCart(product) {
  //   const existsAlready = addedProduct.some((item) => item.name === product.name)

  //   if (existsAlready) {
  //     setAddedProduct(
  //       updateProductQuantity(product)
  //     )
  //   } else {

  //     setAddedProduct([...addedProduct, { ...product, quantity: 1 }])
  //   }
  // }


  // function updateProductQuantity(product) {
  //   return addedProduct.map((item) => {
  //     if (item.name === product.name) {

  //       return { ...item, quantity: item.quantity + 1 }
  //     } else {

  //       return item;
  //     }
  //   })
  // }

  // function removeFromCart(product) {
  //   return setAddedProduct(
  //     addedProduct.filter((item) => item.name !== product.name))


  // }


  const total = addedProduct.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)


  return (
    <>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index}>
            <span>{product.name}</span> -
            <span>€{product.price}</span>
            <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: product })}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
      {addedProduct.length > 0 && (
        <div>
          <h2>Carrello</h2>
          {addedProduct.map((product, index) => {
            return (
              <ul key={index}>
                <li>Prodotto: {product.name}</li>
                <li>{`Prezzo: ${product.price.toFixed(2)} €`}</li>
                <li> Quantità {product.quantity}</li>
                <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: product })}>Rimuovi dal carrello</button>
              </ul>
            )
          })}
          <div className="total-price">
            <span>{`Il totale è ${total.toFixed(2)}€`}</span>
          </div>
        </div>

      )}
    </>
  )
}

export default App
