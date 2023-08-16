import React from 'react';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
      <div className='bg-fuchsia-300 px-40 py-40 min-h-screen'>
        <span className='text-8xl text-purple-950'>CryptoCurrency.Analyzer</span>
        <p className='my-10 text-purple-700 text-2xl'>
          This Website is made to fetch cryptocurrency and its price and trends and show them !!!
        </p>
        <Link to='/CryptoList'><button className='bg-purple-500 text-white px-3 py-2 rounded-2xl my-10 mx-20 hover:bg-purple-900'>Crypto</button></Link>

      </div>
    </>
  );
}

export default App;
