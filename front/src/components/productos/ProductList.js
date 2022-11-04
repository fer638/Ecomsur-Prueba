import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/prducts/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.productos);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>{JSON.stringify(allProducts)}</div>;
};

export default ProductList;
