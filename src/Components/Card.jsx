import Item from "./item";

export default function Card({ guitar, cart, setCart }) {
  const { id, name, price, description, image } = guitar;

  /* const existeEnCarrito = cart.find(g => g.id === g.id)

        if (existeEnCarrito) {
            // Si existe, incrementar cantidad
            const carritoActualizado = cart.map(g => {
                if (g.id === g.id) {
                    return { ...g, quantity: g.quantity + 1 }
                }
                return g
            })
            setCart(carritoActualizado)
        } else {
            // Si no existe, agregar con quantity 1
            setCart([...cart, { ...item, quantity: 1 }])
        } */

  function addToCart(item) {
    const itemExist = cart.findIndex(g => g.id === item.id);

    if (itemExist >= 0) {
      const updatedCart = cart.map(g =>
        g.id === item.id
          ? { ...g, quantity: g.quantity + 1 }
          : g
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  const isInCart = cart.some(g => g.id === id);

  return (
    <div className="card p-3 shadow-sm h-100">
      <div className="row align-items-center">
        <div className="col-4">
          <img className="img-fluid" src={image} alt={name} />
        </div>

        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">
            {name}
          </h3>

          <p>{description}</p>

          <p className="fw-black text-primary fs-3">${price}</p>

          {
            isInCart ? (
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={() => addToCart(guitar)}
              >
                Agregar otra unidad
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-dark w-100"
                onClick={() => addToCart(guitar)}
              >
                Agregar al carrito
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
