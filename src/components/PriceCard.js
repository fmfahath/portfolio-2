import React from 'react'
import { Link } from 'react-router-dom'
import './priceCard.css'

const PriceCard = () => {
  return (
    <div className='price-card-container'>
        <div className='price-card-content'>
            <div className='price-card'>
                <h3>- Basics -</h3>
                <span className='price-bar'></span>
                <p className='price'>$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Ddesign -</p>
                <Link to='./contact' className='btn'>PURCHASE NOW</Link>
            </div>
            <div className='price-card'>
                <h3>- Premium -</h3>
                <span className='price-bar'></span>
                <p className='price'>$ 200</p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Ddesign -</p>
                <Link to='./contact' className='btn'>PURCHASE NOW</Link>
            </div>
            <div className='price-card'>
                <h3>- Business -</h3>
                <span className='price-bar'></span>
                <p className='price'>$ 300</p>
                <p>- 3 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Ddesign -</p>
                <Link to='./contact' className='btn'>PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PriceCard