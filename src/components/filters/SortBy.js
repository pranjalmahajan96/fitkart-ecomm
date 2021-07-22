import { useData } from "../../hooks/useData";

export const SortBy = () => {
  const { dispatch } = useData();
  return (
    <fieldset className="container">
      <legend>SORT BY</legend>
      <label>
        <input
          id="lowToHIgh"
          name="sortBy"
          type="radio"
          onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
        />
        Low To High
      </label>
      <label>
        <input
          id="highToLow"
          name="sortBy"
          type="radio"
          onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
        />
        High To Low
      </label>
    </fieldset>
  );
};
