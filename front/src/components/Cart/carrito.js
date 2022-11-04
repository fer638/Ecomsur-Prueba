import React from 'react'

const Carrito = () => {
  return (
    <div className="carritos">
        <div className="carrito">
            <div className="carrito__close">
                <box-icon name="x"></box-icon>
        <h1>Carrito</h1>
        </div>
        <h2>Su Carrito</h2>
        <div className="carrito__center">

            <div className="carrito__item">
                <div>
                    <h3>
                        title</h3>
                        <p className="price">345</p>
                </div>
            </div>
            <box-icon name="up-arrow" type="solid"></box-icon>
            <p className="cantidad">1</p>
            <box-icon name="down-arrow" type="solid"></box-icon>
        </div>
        <div className="remove__item">
            <box-icon name="trash"></box-icon>

        </div>
        </div>
        <div className="carrito__footer">
            <h3>Total: $</h3>
        </div>

    </div>
  )
}

export default Carrito