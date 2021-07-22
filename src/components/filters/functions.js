export function getSortedData(data, sortBy) {
  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
    return data.sort((a, b) => a.price - b.price);
  }

  if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
    return data.sort((a, b) => b.price - a.price);
  }
  return data;
}

export function getFilteredData(data, includeOutOfStock, fastDeliveryOnly) {
  return data
    .filter(({ fastDelivery }) => (fastDeliveryOnly ? fastDelivery : true))
    .filter(({ stock }) => (includeOutOfStock ? true : stock === "instock"));
}
