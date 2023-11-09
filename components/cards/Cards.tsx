"use client";
import React, { useEffect, useState } from "react";
import CardComponent from "./Card";
import { getProducts } from "@/utils/service/card.service";
import CourseCard from "./CourseCard";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const CardsHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  return (
    <div>
      {products?.length > 0 &&
        products.map((product: ProductProps) => (
          <CourseCard key={product.id}>
            <CourseCard.Header urlImage={product.image} name={product.title} />
            <CourseCard.Body title={product.title}>
              {product.description}
            </CourseCard.Body>
            <CourseCard.Footer price={product.price} />
          </CourseCard>
        ))}
    </div>
  );
};

export default CardsHome;
