import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className='bg-purple-700 text-white flex justify-between'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/950px-Cryptocurrency_Logo.svg.png?20171112032351" className='h-12 px-4'/>
            <ul className='px-10 py-4 flex space-x-5 justify-end'>
                <li className='cursor-pointer'><Link to='/'>Home</Link></li>
                <li className='cursor-pointer'><Link to='/CryptoList'>Crypto</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Header 