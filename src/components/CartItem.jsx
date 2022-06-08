import {useDispatch, useSelector} from "react-redux";
import {addToCart,removeItem, removeCount} from '../store/cartSlice'

import {ReactComponent as Remove} from './assets/remove.svg'




const CartItem = ({title, price , sizes, id, type}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cartReducer.cartItems.find(item => item.id == id))
  const addedCount = cartItem ? cartItem.count : 0;
  const totalPrice = cartItem.count > 1 ? price * cartItem.count : price;
  
  const addCount = () => {
    dispatch(addToCart({
      id,
    }))
  }
  const minusCount = () => {
    console.log(cartItem);
    if(cartItem.count > 1) {
      dispatch(removeCount(id))
    } else {
      dispatch(removeItem(id))
    }
  }
  return (
    <div class="cart__item">
  <div class="cart__item-img">
    <img
      class="pizza-block__image"
      src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
      alt="Pizza"
    />
  </div>
  <div class="cart__item-info">
    <h3>{title}</h3>
    <p>{type} тесто, {sizes} см.</p>
  </div>
  <div class="cart__item-count">
    <div class="button button--outline button--circle cart__item-count-minus" onClick={() => minusCount()}>
      -
    </div>
    {addedCount > 0 && <b>{addedCount}</b>}
    <div class="button button--outline button--circle cart__item-count-plus" onClick={() => addCount()}>
      +
    </div>
  </div>
  <div class="cart__item-price">
    <b>{totalPrice} р.</b>
  </div>
  <div class="cart__item-remove">
    <div class="button button--outline button--circle" onClick={() => dispatch(removeItem(id))}>
      <Remove />
    </div>
  </div>
</div>
  )
}

export default CartItem;