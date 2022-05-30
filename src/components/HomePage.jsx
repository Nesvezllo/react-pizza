import React,{useEffect} from 'react'
import * as axios from 'axios'

import Categories from './Categories'
import Item from './Item'
import Sort from './Sort'
import Loader from './Loader'
import Pagination from './Pagination/Pagination'


const HomePage = ({searchValue, }) => {

  const [items, setItems] = React.useState([]);
  const [isLoading,setIsLoading] = React.useState(true) 
  const [categoryId, setCategoryId] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortId, setSortId] = React.useState({
    name: 'популярности',
    sort: 'rating', 
  })

  useEffect(() => {
    setIsLoading(true)
    const order = sortId.sort.includes('-') ? 'asd': 'desc';
    const sortBy = sortId.sort.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    axios.get(`https://628a811de5e5a9ad3225452e.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
      setTimeout(() => {
        setItems(res.data) 
        setIsLoading(false);
      }, 1000);
    })
  }, [categoryId, sortId, currentPage])


  const pizzas = items
    .filter(item => {
      if(item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })


    const onChangePage = (num) => {
      setCurrentPage(num)
    }


  return (
    <div class="content"> 
    <div class="container">
      <div class="content__top">
      <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
      <Sort value={sortId} onClickSort={(i) => setSortId(i)}/>
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
          {isLoading ? [...new Array(8)].map((_, index) => <Loader key={index}/>) 
            :pizzas.map((item, index) => (<Item 
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
    <Pagination onChangePage={(e) => onChangePage(e)}/>
  </div>
  )
}

export default HomePage;