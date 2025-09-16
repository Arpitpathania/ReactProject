import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product_Card from './components/Product_Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Products List</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </>
  )
}

export default App