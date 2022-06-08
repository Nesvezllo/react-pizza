import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from '../store/cartSlice'

const Item = ({title, price, sizes, img, item, id}) => {

  const [itemCount, setItemCount] = React.useState(0);
  const [sizeCount, setSizeCount] = React.useState(0);
  const [typeCount, setTypeCount] = React.useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cartReducer.cartItems.find(item => item.id == id))
  const typeNames = ["Тонкое", "Традиционнное"]
  
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const obj = {
      id,
      title,
      price,
      img,
      type: typeNames[typeCount],
      sizes: sizes[sizeCount],
    }
    dispatch(addToCart(obj))
  }


  return (
    <div class="pizza-block">
      <img
        class="pizza-block__image"
        src={img}
        alt="Pizza"
      />
  <h4 class="pizza-block__title">{title}</h4>
  <div class="pizza-block__selector">
    <ul>
      {typeNames.map((name, index) => (
        <li className={typeCount == index && "active"}
        onClick={() => setTypeCount(index)}
        >{name}</li>
      ))}
    </ul>
    <ul>
      {sizes.map((size, index) => 
          <li className={sizeCount == index && "active"} onClick={() => setSizeCount(index)}>{size} см.</li>
        )}
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от {price} ₽</div>
    <div class="button button--outline button--add" onClick={() => onClickAdd()}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      {addedCount > 0 && <i>{addedCount}</i>}
    </div>
  </div>
</div>
  )
}

export default Item;