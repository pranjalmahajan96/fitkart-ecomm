import { createContext, useReducer, useState } from "react";
import { dataReducer } from "../reducer/reducer";

const initialState = {
  itemsInCart: [],
  itemsInWishlist: [],
  sortBy: null,
  fastDeliveryOnly: false,
  includeOutOfStock: true
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [total, setTotal] = useState(0);

  return (
    <>
      <DataContext.Provider
        value={{
          itemsInCart: state.itemsInCart,
          itemsInWishlist: state.itemsInWishlist,
          dispatch,
          sortBy: state.sortBy,
          fastDeliveryOnly: state.fastDeliveryOnly,
          includeOutOfStock: state.includeOutOfStock,
          total, setTotal
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};
