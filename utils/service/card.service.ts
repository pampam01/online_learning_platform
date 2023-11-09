import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const GetCategory = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  return response.data;
};
