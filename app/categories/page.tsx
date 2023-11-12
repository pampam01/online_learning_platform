"use client";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { GetCategory } from "@/utils/service/card.service";
import Categories from "@/components/Categories";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      GetCategory()
        .then((res) => {
          setCategories(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          Kategori
        </h1>
        <span className="mt-2 inline-block">
          Temukan lebih banyak kategori dan perluas pengetahuan Anda
        </span>
      </div>
      {isLoading ? (
        <SkeletonDemo isActive={isLoading} />
      ) : (
        <Categories categories={categories} active={handleClick} />
      )}
    </article>
  );
};

export default CategoriesPage;

export function SkeletonDemo({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;
  return (
    <div className="flex items-center space-x-4 w-full h-full">
      <Skeleton className="h-80 w-80 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-32 w-[800px]" />
        <Skeleton className="h-32 w-[800px]" />
      </div>
    </div>
  );
}
