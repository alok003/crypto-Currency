import React from 'react'
import { useParams } from 'react-router-dom';
import Plotter from './Plotter';

const CurrencyDetail = () => {
    const {crypto}=useParams();
    const decodedCrypto = JSON.parse(decodeURIComponent(crypto));
    // console.log(decodedCrypto);
  return (
    <>
        <h1>crypto Detail</h1>
        <pre>{JSON.stringify(decodedCrypto, null, 2)}</pre>
        {/* <p>{decodedCrypto}</p> */}
        <Plotter/>
    </>
  )
}

export default CurrencyDetail