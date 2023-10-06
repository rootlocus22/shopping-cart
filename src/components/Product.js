import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/CartSlice';

const Product = (props) => {
    const { title, images, description, price } = props.product;
    const dispatch = useDispatch();
    const addTocart = () => {
        dispatch(add(props.product))
    }


    return (
        <div className="cardContainer">
            <div className="cardImage">
                <img src={images[0]} width={200} height={200}></img>
            </div>
            <h1 className='cardTitle'>{title}</h1>
            <div className="cardDesc">{description}</div>
            <div className="price">Price: {price}</div>
            <div className='cardFooter'>
                <div className='link' onClick={() => addTocart()}>Add to Cart</div>
            </div>
        </div>
    )
}

export default Product