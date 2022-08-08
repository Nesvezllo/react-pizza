import React from "react";
import {useDispatch, useSelector} from "react-redux";

const Categories = ({value, onClickCategory}) => {

  const categories = ["Все" , "Мясные" , "Вегетарианская", "Гриль", "Острые", "Закрытые"]

  return (
    <div class="categories">
    <ul>
      {categories.map((category, i) => (
        <li className={value == i && "active"} onClick={() => onClickCategory(i)}>{category}</li>
      ))}
    </ul>
  </div>
  )
}

export default Categories;