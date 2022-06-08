import {Link} from 'react-router-dom'
import CartItem from './CartItem'
import {useDispatch, useSelector} from "react-redux";
import {clearItems} from '../store/cartSlice'

import client from './assets/client.png'

const Cart = () => {
  const items = useSelector(state => state.cartReducer.cartItems)
  const price = useSelector(state => state.cartReducer.totalPrice)
  const totalCount = useSelector(state => state.cartReducer.totalCount)

  const dispatch = useDispatch();

  return (
    <>
    {(items.length) ? 
      <div class="content">
      <div class="container container--cart">
        <div class="cart">
          <div class="cart__top">
            <h2 class="content__title">Корзина</h2>
            <div class="cart__clear">
              <span onClick={() => dispatch(clearItems())}>Очистить корзину</span>
            </div>
          </div>
          <div class="content__cartitems ">
            {items.map((obj, index) => (
              <CartItem 
                key={index} 
                title={obj.title} 
                price={obj.price} 
                sizes={obj.sizes} 
                id={obj.id}
                type={obj.type}
              />
            ))} 
          </div>
          <div class="cart__bottom">
            <div class="cart__bottom-details">
              <span> Всего пицц: <b>{totalCount} шт.</b> </span>
              <span> Сумма заказа: <b>{price} ₽</b> </span>
            </div>
            <div class="cart__bottom-buttons">
              <Link to={"/"} class="button button--outline button--add go-back-btn">
               
                <span>Вернуться назад</span>
              </Link>
              <div class="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    : <div class="content">
    <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>Корзина пустая <icon>😕</icon></h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.<br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={client} alt="Empty cart" />
        <Link to={"/"} class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  </div> 
    }
    </>
  
  )
}

export default Cart;