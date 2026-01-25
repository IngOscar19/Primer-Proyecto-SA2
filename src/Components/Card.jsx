import React from 'react'

export default function Card() {
  return (
    <div className="card p-3 shadow-sm h-100">
      <div className="row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            src="./public/img/guitarra_08.jpg"
            alt="imagen guitarra"
          />
        </div>

        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">Dale</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="fw-black text-primary fs-3">$299</p>
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

