import React, { useEffect } from "react";
import ProductsList from "./ProductsList";
import { useSelector, useDispatch } from 'react-redux'
import { setProducts, setLoading } from "../redux/slices/productsSlice";
export default function Products() {
  let productsState = useSelector((state) => { return state.products })
  let dispatch = useDispatch()
  useEffect(() => {
    let fetchProducts = async () => {
      dispatch(setLoading(true))
      let res = await fetch('https://fakestoreapi.com/products')
      let response = await res.json()
      dispatch(setProducts(response))
      dispatch(setLoading(false))
    }
    fetchProducts()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center my-3">Products</h2>
          {productsState.loading ? <h5 className="text-center">Loading</h5> : productsState.products.map((product, index) => {
            return <ProductsList key={index} product={product} />
          })}
        </div>
      </div>
    </>
  );
}
