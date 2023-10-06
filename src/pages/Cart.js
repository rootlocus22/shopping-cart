import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/CartSlice';

const Cart = () => {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeItem = (item) => {
        dispatch(remove(item));
    }
    return (
        <div className='cartContainer'>
            <h1 className='cartHeader'> Your cart Items</h1>
            {items.length > 0 ? items.map((item, i) => <div className='cartlayout' key={item.id}>
                <div className='productImage'>
                    <img src={item.images[0]} width={100} height={100}></img>
                </div>
                <div className='cartLeftlayout'>
                    <div className="productLabel">{item.title}</div>
                    <div className='price'>Price: {item.price}</div>
                    <div className='link' onClick={() => removeItem(item)}>Remove</div>
                </div>

            </div>) : <h1 className='cartHeader'> No Items Found. Please add Items.</h1>}


        </div>
    )
}

export default Cart;
