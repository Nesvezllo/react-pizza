import React,{useEffect} from 'react'
import * as axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import qs from "qs"
import {useNavigate} from "react-router-dom"

import Categories from './Categories'
import Item from './Item'
import Sort from './Sort'
import Loader from './Loader'
import Pagination from './Pagination/Pagination'

import {setCategory, setSortValue} from '../store/filterSlice'


const HomePage = ({searchValue, }) => {

  const [items, setItems] = React.useState([]);
  const [isLoading,setIsLoading] = React.useState(true) ;
  const [currentPage, setCurrentPage] = React.useState(1);

  const categoryId = useSelector(state => state.filterReducer.categoryId);
  const sortValue = useSelector(state => state.filterReducer.sort);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeCategory = (i) => {
    dispatch(setCategory(i))
  }
  const onChangeSort = (value) => {
    dispatch(setSortValue(value))
  }



  useEffect(() => {
    setIsLoading(true)
    const order = sortValue.sort.includes('-') ? 'asd': 'desc';
    const sortBy = sortValue.sort.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    axios.get(`https://628a811de5e5a9ad3225452e.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
      setTimeout(() => {
        setItems(res.data) 
        setIsLoading(false);
      }, 500);
    })
  }, [categoryId, sortValue, currentPage])

  useEffect(() => {
      const queryString = qs.stringify({
        sortValue: sortValue.sort,
        categoryId,
        currentPage,
      })
      navigate(`?${queryString}`)
      console.log(queryString);
  }, [categoryId, sortValue.sort, currentPage])


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
      <Categories value={categoryId} onClickCategory={(i) => onChangeCategory(i)}/>
      <Sort value={sortValue} onClickSort={(i) => onChangeSort(i)}/>
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
              item={item} 
            />
          ))}
      </div>
    </div>
    <Pagination onChangePage={(e) => onChangePage(e)}/>
  </div>
  )
}

export default HomePage;