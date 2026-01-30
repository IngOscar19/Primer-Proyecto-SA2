export default function Item({ cart }) {
  if (cart.length === 0) {
    return <p className="text-center">El carrito está vacío</p>
  }

  return (
    <div className="carrito bg-white p-3">
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
                <img className="img-fluid" src={item.image} alt={item.name} />
              </td>
              <td>{item.name}</td>
              <td className="fw-bold">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


