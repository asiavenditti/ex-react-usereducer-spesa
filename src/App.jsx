
import './App.css'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];
  return (
    <>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index}>
            <span>{product.name}</span>
            <span>€{product.price}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
