import React, { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";
import { ProductCard } from "./ProductCard";
import { SortBy } from "../filters/SortBy";
import { FilterBy } from "../filters/FilterBy";
import { getSortedData, getFilteredData } from "../filters/functions";
import { ToastContainer } from "react-toastify";
import { getProductsAPICall } from "../../apiCall";
import { Loader } from "../loader/Loader";

export const Products = () => {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);

  const { sortBy, includeOutOfStock, fastDeliveryOnly } = useData();

  useEffect(() => {
    setShowLoader(true);
    const getData = async () => {
      try {
        const response = await getProductsAPICall();
        setData(response.data.products);
      } catch (error) {
        setShowError(true);
      } finally {
        setShowLoader(false);
        setShowError(false);
      }
    };
    getData();
  }, []);

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(
    sortedData,
    includeOutOfStock,
    fastDeliveryOnly
  );

  return (
    <div className="App">
      <div>
        {showLoader && (
          <span>
            <Loader />
          </span>
        )}
      </div>
      <div>{showError && <span>Error Occured...</span>}</div>

      <div className="main-div-products">
        <div className="sideBar">
          <SortBy />
          <FilterBy />
        </div>
        <div className="container-products">
          {filteredData.map((item) => (
            <div key={item._id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
