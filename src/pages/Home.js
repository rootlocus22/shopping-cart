import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUS } from '../redux/ProductSlice';
const Home = () => {
    const { data: products, status } = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if(status === STATUS.LOADING) {
        return <div>Loading......</div>
    }
    return <div className='productContainer'>
        {products.map((product, i) => (
            <Product key={product.id} product={product}></Product>
        ))}
    </div>


}

export default Home;