import React from 'react'

export default function Header({ cart, setShowCart }) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">

          <div className="col-8 col-md-3">
            <a href="/">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end position-relative">
            <button
              className="btn p-0 border-0 bg-transparent"
              onClick={() => setShowCart(prev => !prev)}
            >
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />
            </button>

            {cart.length > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {cart.length}
              </span>
            )}
          </nav>

        </div>
      </div>
    </header>
  )
}
