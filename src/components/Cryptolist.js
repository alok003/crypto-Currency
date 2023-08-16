import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cryptolist = () => {

    const [Denomination,setDenomination] = useState('INR');
    const [cryptoAC, setcryptoAC] = useState([]);
    useEffect(() => {
        const fetchC = async () => {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${Denomination}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
            // console.log(response);
            setcryptoAC(response.data);
        };
        fetchC();
    }, [Denomination]);

    const handleCurrencyChange = (e) => {
        setDenomination(e.target.value);
    }
    return (
        <>
        <div className="">
        <div className='text-4xl text-center my-2 text-purple-600'>Crypto Currency List</div>
            <div className='mx-4'>
                <input type="radio" id="html" name="currency" value="inr" onChange={handleCurrencyChange} aria-selected></input>
                <label for="html" className='mx-3 text-xl'>INR</label>
                <input type="radio" id="css" name="currency" value="usd" onChange={handleCurrencyChange}></input>
                <label for="css" className='mx-3 text-xl'>USD</label>
                <input type="radio" id="javascript" name="currency" value="eur" onChange={handleCurrencyChange}></input>
                <label for="javascript" className='mx-3 text-xl'>EUR</label>
            </div>

            <ul>
                <div className='flex flex-wrap justify-around'>
                {cryptoAC.map(crypto => (
                    <Link to={`/cryptoDetail/${encodeURIComponent(JSON.stringify(crypto))}`}>
                        <li key={crypto.id}>
                            <div className='mx-4 my-3 shadow-2xl hover:bg-fuchsia-200 rounded-2xl max-w-screen-sm'>
                                <img src={crypto.image} alt={crypto.name} className='h-50 px-4 py-4'></img>
                                <span className='text-black block text-center text-2xl'>{crypto.name}</span>
                                <span className='text-green-600 block text-center text-xl'>{crypto.current_price}</span>
                            </div>
                        </li>
                    </Link>

                ))}
                </div>
            </ul>

        </div>
            
        </>

    )
}

export default Cryptolist


// heading
// search tab
// currency selector
// list