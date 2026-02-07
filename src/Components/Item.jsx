import React from 'react'

export default function Item({ cart, setCart }) {

  const isEmpty = () => cart.length === 0

  const cartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    setCart(updatedCart
    )
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0) 

    setCart(updatedCart)
  }

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  
  if (isEmpty()) {
    return <p className="text-center m-0">El carrito está vacío</p>
  }

  return (
    <>
      <table className="w-100 table align-middle">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <img
                  className="img-fluid"
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: '80px' }}
                />
              </td>

              <td>{item.name}</td>

              <td className="fw-bold">${item.price}</td>

              <td>
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span className="fw-bold">
                    {item.quantity}
                  </span>

                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 💰 Total del carrito */}
      <div className="d-flex justify-content-end mt-3">
        <p className="fw-black fs-4 m-0">
          Total: ${cartTotal()}
        </p>
      </div>
    </>
  )
}
