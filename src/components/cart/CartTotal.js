import { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "../../hooks/useData";
import { useNavigate } from "react-router-dom";

const calcTotal = ({ cart }) => {
  const {setTotal} = useData();
  let totalAmt = [];
  totalAmt = cart.map((item) => item?.qty * item?.product?.price);
  totalAmt = totalAmt.reduce((acc, val) => acc + val, 0);
  setTotal(totalAmt);
  return totalAmt;
};

export const CartTotal = (cart) => {
  const navigate = useNavigate();
  const {total} = useData();

  const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

useEffect(() => {
  loadScript('https://checkout.razorpay.com/v1/checkout.js');
});

function payRazorpay() {
  console.log("pay!")
  displayRazorpay();
}

async function displayRazorpay() {
  const { data } = await axios.post(`https://FitKartAPI.pranjalmahajan.repl.co/orders/new`, {
      total
  });

  const options = {
      key: 'rzp_test_tYEQjq3P5lM1Rl',
      currency: 'INR',
      amount: total,
      name: 'Fitkart',
      description: 'Fitkartt',
      order_id: data.id,
      handler: function (response) {
      console.log(response.razorpay_payment_id);
      console.log(response.razorpay_order_id);
      },
      prefill: {
          email: "test@gmail.com",
          contact: ''
      }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  if (data.success === true) {
      navigate('/orders');
      // const { cart } = await axios.post(`${MAIN_URL}/payment/delete`);
      // setItemsInCart(cart);
  }
}

  return cart.length === 0 ? (
    <div className="card">
      <div>Cart Total: ₹{total}</div>
      <button className="btn btn-filled btn-checkout">Checkout</button>
    </div>
  ) : (
    <div className="card">
      <div>Cart Total: ₹{calcTotal(cart)}</div>
      <button className="btn btn-filled btn-checkout" onClick={() => {
        console.log("checkout clicked")
        console.log({total})
        payRazorpay()
        console.log("checkout clicked 1")
        }}>
          Checkout</button>
    </div>
  );
};
