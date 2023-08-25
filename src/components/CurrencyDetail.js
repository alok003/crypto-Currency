import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Plotter from './Plotter';

const CurrencyDetail = () => {
  const { crypto } = useParams();
  const decodedCrypto = JSON.parse(decodeURIComponent(crypto));
  console.log(decodedCrypto);
  return (
    <>
      <h1 className='text-purple-600 text-4xl mx-8'>{decodedCrypto.name}</h1>
      <div className='flex justify-stretch flex-wrap w-screen h-screen'>
  <div className='w-2/3'>
    <div>
      <div className='inline-block w-full h-1/3 px-4 my-48'><Plotter /></div>
    </div>
    <div>
    <Link to='/CryptoList'><button className='bg-purple-600 text-white text-2xl px-4 py-2 hover:bg-white hover:text-purple-600 rounded-2xl mx-64 my-1'>Go Back</button></Link>
    </div>
  </div>
  <div className='w-1/3'>
    <img src={decodedCrypto.image} alt={decodedCrypto.name} className='rounded-4xl block mx-auto'></img>
    {/* <div className='flex flex-col'>
      {Object.entries(decodedCrypto).map(([key, value]) => (
        <div key={key} className='block my-1 justify-between'>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div> */}
    <div>
      <table>
      {Object.entries(decodedCrypto).map(([key, value]) => (
      <tr key={key}>
        <td>{key}</td>
        <td>:</td>
        <td>{value}</td>
      </tr>
      ))}
      </table>
    </div>
  </div>
</div>
     
    </>
  )
}

export default CurrencyDetail