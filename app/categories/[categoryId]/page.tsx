"use client";
import { useParams } from "next/navigation";

import { ServiceData } from "@/constants/slider";
import CardComponent from "@/components/cards/Card";
import { dummyData } from "@/app/api/dummy";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dummyData({ params: categoryId }).then((res) => {
      setProducts(res);
    });
  }, []);
  console.log(products);
  return (
    <div className="flex justify-center flex-wrap gap-2 my-8">
      {ServiceData.map((item) => (
        <CardComponent key={item.title}>
          <CardComponent.Header images={item.backgroundImage} />
          <CardComponent.Body
            title={item.title}
            icon={item.icon}
            author="pampam"
            graduate="s1 manajemen"
          >
            {item.content}
          </CardComponent.Body>
          <CardComponent.Footer price={1000} />
        </CardComponent>
      ))}
    </div>
  );
};

export default CategoryPage;
