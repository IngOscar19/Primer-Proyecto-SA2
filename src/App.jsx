import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
import Item from './Components/Item'

import React, { useState } from 'react'
import { db } from './db/db'

function App() {
  const [data] = useState(db)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <Header
        cart={cart}
        setShowCart={setShowCart}
      />

      {showCart && <Item cart={cart} />}

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row justify-content-center">
          {data.map((guitar) => (
            <div key={guitar.id} className="col-md-6 col-lg-4 my-4">
              <Card
                guitar={guitar}
                cart={cart}
                setCart={setCart}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
