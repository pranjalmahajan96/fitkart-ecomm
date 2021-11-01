import { useContext } from "react";
import { DataContext } from "../contexts/productData";

export const useData = () => {
  return useContext(DataContext);
};
