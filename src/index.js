import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Header from './components/Header';
import Crypto from './components/Cryptolist';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/cryptoList' element={<Crypto/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


// {/* <app>
//   <HEADER></HEADER>
//   <home></home>
//   <crypto>
//     LIST ALL <COINS>
//       <COINDES>

//       </COINDES>
//     </COINS>
//   </crypto>
// </app> */}