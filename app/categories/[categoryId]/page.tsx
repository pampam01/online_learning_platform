"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  return (
    <div>
      <h1>helo</h1>
    </div>
  );
};

export default CategoryPage;
