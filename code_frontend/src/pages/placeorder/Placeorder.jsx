import React, { useContext } from 'react';
import './Placeorder.css'
import { Storecontext } from '../../context/Storecontext';

const Placeorder = () => {

  const { gettotalcartamount } = useContext(Storecontext)
  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
          <p className="title">
            Delivery Information
          </p>
          <div className="multi-fields">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='street' />

          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>

        <div className="place-order-right">
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
            <button >PROCEED TO PAYMENT</button>
          </div>

        </div>
      </form>


    </div>
  );
}

export default Placeorder;
