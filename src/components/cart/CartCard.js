import { useUserActions } from "../../utilities";

export const CartCard = ({ item }) => {
  const { removeFromCartCB, incQtyCB, decQtyCB } = useUserActions();

  return (
    <div className="card ">
      <div className="thumbnail ">
        <img
          className="card-img"
          src={item?.product?.imageURL}
          alt="product"
        />
      </div>
      <div>
        <h3>{item?.product?.name}</h3>
        <h3>₹{item?.product?.price}</h3>
        <button className="btn btn-outline" onClick={() => incQtyCB(item)}>
          +
        </button>
        <span>{item?.qty}</span>
        <button
          className={
            item?.qty > 1 ? "btn btn-outline" : "btn btn-outline btn-disabled"
          }
          onClick={() => decQtyCB(item)}
          disabled={item?.qty <= 1 ? true : false}
        >
          -
        </button>
        <span>Sub-Total: ₹{item?.qty * item?.product?.price}</span>
        <div>
          <button
            className="btn btn-filled"
            onClick={() => removeFromCartCB(item)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};
