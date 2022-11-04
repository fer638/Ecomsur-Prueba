import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/prducts/actions";

export const ListadeProductos = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.productos);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(allProducts);
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        {allProducts.map((producto)=> (
            <div className="producto">
            <a href="#">
              <img className="producto__img" src={`http://localhost:5000${producto.image}`}></img>
            </a>
            <div className="producto__footer">
              <h1>{producto.name}</h1>
              <p>{producto.brand}</p>
              <p className="price">{producto.price}</p>
            </div>
            <div className="buttom">
              <button className="btn">Añadir al carrito</button>
              <div>
                <a href="#" className="btn">
                  Ver
                </a>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
};
