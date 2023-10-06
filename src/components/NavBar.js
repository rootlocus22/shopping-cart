import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const items = useSelector((state) =>  state.cart);
    return (
        <div>
            <div className='navContainer'>
                <Link className="navItem" to="/">Home</Link>
                <Link className="navItem" to="/cart">Cart</Link>
                <span className='cartItem'>Cart items: {items.length}</span>
            </div>
        </div>
    )
}

export default NavBar