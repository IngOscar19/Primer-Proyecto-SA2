import React from 'react'

export default function Card({ guitar }) {
  const { name, price, description, image } = guitar;

  return (
    <div className="card p-3 shadow-sm h-100">
      <div className="row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            src={image}
            alt={name}
          />
        </div>

        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">
            {name}
          </h3>

          <p>{description}</p>

          <p className="fw-black text-primary fs-3">
            ${price}
          </p>

          <button
            type="button"
            className="btn btn-dark w-100"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}


