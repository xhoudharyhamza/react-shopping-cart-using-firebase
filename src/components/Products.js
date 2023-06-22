import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { useSelector, useDispatch } from 'react-redux'
import { setProducts, setLoading } from "../redux/slices/productsSlice";

export default function Products() {
  const [page, setPage] = useState(1);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const productsState = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const limit = 10;
      const offset = (page - 1) * limit
      dispatch(setLoading(true));
      const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
      const response = await res.json();
      dispatch(setProducts(response));
      dispatch(setLoading(false));
      if (response.length < limit) {
        setAllDataLoaded(true);
      }
    }
    fetchProducts()
  }, [page]);

  const infiniteScroll = () => {
    if (
      !allDataLoaded &&
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(prevPage => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center my-3">Products</h2>
          {
            productsState.products.map((product, index) => (
              <ProductsList key={index} product={product} />
            ))
          }
          {productsState.loading && <h5 className="text-center">Loading...</h5>
          }
        </div>
      </div>
    </>
  );
}
