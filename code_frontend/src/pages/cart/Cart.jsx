import React, { useContext } from 'react';
import './Cart.css'
import { Storecontext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { food_list, cartitem, removefromcart, gettotalcartamount, url } = useContext(Storecontext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return <div>
              <div className="cart-items-title cart-items-item">
                <img src={url + "/images/" + item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitem[item._id]}</p>
                <p>${item.price * cartitem[item._id]}</p>
                <p onClick={() => removefromcart(item._id)} className='cross'>x</p>

              </div>
              <hr />
            </div>
          }

        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${gettotalcartamount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <p><b>${gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 2}</b></p>

            </div>

          </div>
          <button onClick={() => { navigate('/order') }}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo-code' />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cart;
