import { useUserActions } from "../../utilities";

export const CartCard = ({ item }) => {
  const { removeFromCartCB, incQtyCB, decQtyCB } = useUserActions();

  return (
    <div className="card ">
      <div className="thumbnail ">
        <img
          className="card-img"
          src={item?.product_id?.imageURL}
          alt="product"
        />
      </div>
      <div>
        <h3>{item?.product_id?.name}</h3>
        <h3>₹{item?.product_id?.price}</h3>
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
        <span>Sub-Total: ₹{item?.qty * item?.product_id?.price}</span>
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
