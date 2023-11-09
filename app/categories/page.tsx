"use client";

import React, { useEffect, useState } from "react";

import { GetCategory } from "@/utils/service/card.service";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GetCategory().then((res) => {
      setCategories(res);
    });
  }, []);

  return <div>{categories}</div>;
};

export default CategoriesPage;
