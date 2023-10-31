"use client";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import useMenuRef from "@/app/hooks/useMenuRef";
import Modal from "./Modal";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [categoryContent, setCategoryContent] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  let navbarRef = useMenuRef(setNav);
  return (
    <nav>
      {/* container */}
      <div className="flex justify-between items-center px-6 py-4 tablet:py-0 shadow-[0_2px_6px_-1px_rgb(0_0_0_/_0.2)]">
        <Modal isOpen={openModal} setIsOpen={setOpenModal} />
        {/* KIRI */}

        <div className="flex flex-row items-center">
          {/* logo */}
          <div className="text-lg font-bold cursor-pointer">OpenEdu</div>
          {/* search-bar */}
          <div className="hidden xs:flex relative mx-2 sm:mx-0 sm:ml-6">
            <BiSearch className="absolute left-2 top-2" color="gray" />
            <input
              type="text"
              className="focus:outline focus:outline-blue-500 duration-200 h-8 flex items-center pr-2 pl-8 outline outline-1 outline-slate-500 border-gray-300 rounded-full text-sm "
              placeholder="cari sesuatu..."
            />
          </div>
          {/* links */}
          <ul className="hidden relative tablet:flex ml-2">
            <li className="relative group/categories py-5">
              <Link href="/" className="px-4 hover:text-blue-800">
                Kategori
              </Link>
              {/* navigation content */}
              <div className="hidden group-hover/categories:flex flex-row text-sm left-0 top-16 bg-white border absolute">
                {/* navigation categories */}
                <ul className="py-2 px-3 flex flex-col gap-y-4 w-60">
                  <li
                    className={`flex justify-between items-center hover:text-blue-800 cursor-pointer ${
                      categoryContent && "text-blue-800"
                    }`}
                    onMouseEnter={() => setCategoryContent(true)}
                  >
                    <p>Programming</p>
                    <BsChevronRight size={15} />
                  </li>
                  <li className="flex justify-between items-center hover:text-blue-800 cursor-pointer">
                    <p>Design</p>
                    <BsChevronRight size={15} />
                  </li>
                  <li className="flex justify-between items-center hover:text-blue-800 cursor-pointer">
                    <p>Bisnis dan Finansial</p>
                    <BsChevronRight size={15} />
                  </li>
                  <li className="flex justify-between items-center hover:text-blue-800 cursor-pointer">
                    <p>Psikologi</p>
                    <BsChevronRight size={15} />
                  </li>
                </ul>
                {/* contents inside navigation categories */}
                <ul
                  className={`py-2 px-3 flex-col gap-y-4 w-60 border-l ${
                    categoryContent ? "flex" : "hidden"
                  }`}
                >
                  <li className="flex justify-between items-center hover:text-blue-800 cursor-pointer">
                    <p>Pengembangan Web</p>
                  </li>
                  <li className="flex justify-between items-center hover:text-blue-800 cursor-pointer">
                    <p>Pengembangan Android</p>
                  </li>
                  <li className="flex justify-between items-center hover:text-blue-800 cursor-pointer">
                    <p>Pengembangan Game</p>
                  </li>
                  <li className="flex justify-between items-center hover:text-blue-800 cursor-pointer">
                    <p>Robotik</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="py-5">
              <Link href="/" className="px-4 hover:text-blue-800">
                Program
              </Link>
            </li>
            <li className="py-5">
              <Link href="/" className="px-4 hover:text-blue-800">
                Tentang kami
              </Link>
            </li>
          </ul>
        </div>
        {/* KANAN */}
        <div className="hidden tablet:flex gap-x-2">
          <button
            className="px-4 py-2 border border-black hover:bg-gray-100"
            onClick={() => setOpenModal(true)}
          >
            Login
          </button>

          <button className="px-4 py-2 bg-blue-900 text-white hover:bg-slate-800">
            Daftar
          </button>
        </div>
        {/* burger button */}
        <div
          onClick={() => setNav(!nav)}
          className={`tablet:hidden cursor-pointer ${nav && "hidden"}`}
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>
      {/* small media sidebar */}
      <div
        className={`flex flex-col tablet:hidden absolute transform origin-left top-0 duration-500 ease-in-out h-full w-[70%] z-50 bg-slate-100 ${
          nav ? " left-0" : "overflow-hidden left-[-650px]"
        }`}
        ref={navbarRef}
      >
        <div className="flex flex-col items-start py-4 border-b-2 gap-y-3 px-4 relative">
          <button className="text-blue-700" onClick={() => setOpenModal(true)}>
            Login
          </button>
          <button className="text-blue-700">Daftar</button>
          <div
            className="absolute -right-16 border rounded-full p-2 bg-slate-300 cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            <AiOutlineClose size={30} color="gray" />
          </div>
        </div>
        <ul className="flex flex-col px-4 gap-y-2 mt-4">
          <li className="flex items-center justify-between">
            <Link href="/">Kategori</Link>
            <BsChevronRight size={15} />
          </li>
          <li className="flex items-center justify-between">
            <Link href="/">Program</Link>
            <BsChevronRight size={15} />
          </li>
          <li>
            <Link href="/">Tentang kami</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
