import './scss/app.scss';
import './scss/_fonts.scss';
import './scss/_variables.scss';
import './scss/libs/_normalize.scss';
import './scss/components/_all.scss'

import * as axios from 'axios';

import Header from './components/Header'
import HomePage from './components/HomePage'
import Cart from './components/Cart'

import React,{ useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';


function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div class="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Routes>
          <Route path="/" element={<HomePage searchValue={searchValue} />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
