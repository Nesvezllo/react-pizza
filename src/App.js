import './scss/app.scss';
import './scss/_fonts.scss';
import './scss/_variables.scss';
import './scss/libs/_normalize.scss';
import './scss/components/_all.scss'

import * as axios from 'axios';

import Header from './components/Header'
import Categories from './components/Categories'
import Item from './components/Item'
import Sort from './components/Sort'
import React,{ useEffect } from 'react';


function App() {

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    axios.get("https://628a811de5e5a9ad3225452e.mockapi.io/items").then((res) => {
      setItems(res.data)
    })
  }, [])

  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
          <Categories />
          <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
              {items.map((item, index) => (
                <Item 
                  id={item.id} 
                  img={item.imageUrl} 
                  price={item.price}
                  rating={item.rating}
                  sizes={item.sizes}
                  title={item.title}
                  types={item.types} 
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
