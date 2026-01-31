import React from 'react'

export default function Item({ cart }) {
  // Mantenemos la lógica visual simple
  if (cart.length === 0) {
    return <p className="text-center m-0">El carrito está vacío</p>
  }

  return (
    <table className="w-100 table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((item, index) => (
          <tr key={index}>
            <td>
              {/* La clase img-fluid responderá al CSS del padre */}
              <img 
                className="img-fluid" 
                src={item.image} 
                alt={item.name} 
              />
            </td>
            <td>{item.name}</td>
            <td className="fw-bold">${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}