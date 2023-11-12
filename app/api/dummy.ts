import axios from "axios";

export const dummyData = async ({ params }: { params: any }) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${params}`
  );
  return response.data;
};
