const calcTotal = ({ cart }) => {
  let total = [];
  total = cart.map((item) => item?.qty * item?.product?.price);
  total = total.reduce((acc, val) => acc + val, 0);
  return total;
};

export const CartTotal = (cart) => {
  const total = 0;
  return cart.length === 0 ? (
    <div className="card">
      <div>Cart Total: ₹{total}</div>
      <button className="btn btn-filled btn-checkout">Checkout</button>
    </div>
  ) : (
    <div className="card">
      <div>Cart Total: ₹{calcTotal(cart)}</div>
      <button className="btn btn-filled btn-checkout">Checkout</button>
    </div>
  );
};
