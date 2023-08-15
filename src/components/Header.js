import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div>
            <span>CryptoCurrency</span>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/CryptoList'>Crypto</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Header