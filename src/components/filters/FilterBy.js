import { useData } from "../../hooks/useData";

export const FilterBy = () => {
  const { dispatch, includeOutOfStock, fastDeliveryOnly } = useData();
  return (
    <fieldset>
      <legend>Filters</legend>
      <label>
        <input
          type="checkbox"
          name="outOfStock"
          checked={includeOutOfStock}
          onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
        />
        Include Out Of Stock
      </label>
      <label>
        <input
          type="checkbox"
          name="fastDelivery"
          checked={fastDeliveryOnly}
          onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
        />
        Show Fast Delivery Only
      </label>
    </fieldset>
  );
};
