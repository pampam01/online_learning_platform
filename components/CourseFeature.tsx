import { cn } from "@/lib/utils";
import React from "react";

const CourseFeature = ({ className }: { className?: string }) => {
  return (
    <div className={cn(`flex flex-col ${className}`)}>
      <div className="border border-black/30 dark:border-secondary rounded-md p-4 flex-1">
        <h1 className="font-bold md:text-xl text-base">Deskripsi :</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          distinctio, cupiditate exercitationem eum ad asperiores molestias esse
          at beatae totam quaerat voluptates explicabo laboriosam commodi fugit
          ea aliquam ducimus a amet saepe. Illum sit officia pariatur, quas
          dolores corrupti libero velit eaque autem voluptate ullam
          perspiciatis, laudantium quasi culpa. Voluptate soluta, quis laborum
          vitae distinctio et architecto iste enim. Consequatur soluta ea autem
          odio quibusdam et earum saepe ducimus, vitae ab distinctio ipsa
          tenetur, itaque quas porro sed iste optio nihil tempore ratione neque
          consequuntur, sunt non. Sapiente natus mollitia similique corporis
          tenetur enim corrupti, repudiandae nostrum autem impedit amet eligendi
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-x-2 gap-y-2 text-sm md:text-base leading-6 justify-between mt-2">
        <div className="border border-black/30 dark:border-secondary rounded-md p-4 flex-1 pl-8">
          <h1 className="font-bold md:text-xl text-base">✅Persyaratan :</h1>
          <ul className="list-disc list-outside">
            <li>Memiliki pengetahuan dasar komputer</li>
            <li>Memiliki keinginan yang kuat dalam belajar programming web</li>
          </ul>
        </div>
        <div className="border border-black/30 dark:border-secondary rounded-md p-4 flex-1 pl-8">
          <h1 className="font-bold md:text-xl text-base">🎯Indikator :</h1>
          <ul className="list-disc list-outside">
            <li>Memiliki pengetahuan dasar komputer</li>
            <li>Memiliki keinginan yang kuat dalam belajar programming web</li>
            <li>Memiliki keinginan yang kuat dalam belajar programming web</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseFeature;
