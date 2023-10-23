"use client";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {} from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="flex justify-between items-center py-4 px-6">
      {/* KIRI */}
      <div className="flex flex-row items-center">
        {/* logo */}
        <div className="text-lg font-bold cursor-pointer">Logo</div>
        {/* search-bar */}
        <div className="hidden xs:flex relative ml-6 ">
          <BiSearch className="absolute left-2 top-2" color="gray" />
          <input
            type="text"
            className="focus:outline focus:outline-blue-300 duration-200 h-8 flex items-center pr-2 pl-8 outline outline-1 outline-slate-500 border-gray-300 rounded-full text-sm "
            placeholder="cari sesuatu..."
          />
        </div>
        {/* links */}
        <ul className="hidden tablet:flex ml-2">
          <li>
            <Link href="/" className="py-2 px-4 hover:text-blue-800">
              Kategori
            </Link>
          </li>
          <li>
            <Link href="/" className="py-2 px-4 hover:text-blue-800">
              Program
            </Link>
          </li>
          <li>
            <Link href="/" className="py-2 px-4 hover:text-blue-800">
              Tentang kami
            </Link>
          </li>
        </ul>
      </div>
      {/* KANAN */}
      <div className="hidden tablet:flex gap-x-2">
        <button className="px-4 py-2 border border-black hover:bg-gray-100">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-900 text-white hover:bg-slate-800">
          Daftar
        </button>
      </div>
      {/* burger button */}
      <div
        onClick={() => setNav(!nav)}
        className="tablet:hidden cursor-pointer "
      >
        <AiOutlineMenu size={30} />
      </div>
      {/* small media sidebar */}
      {nav && (
        <div className="flex flex-col tablet:hidden absolute top-0 left-0 h-full w-[70%] bg-slate-300">
          <div className="flex flex-col items-start py-4 border-b-2 gap-y-3 px-4">
            <button className="text-blue-700">Login</button>
            <button className="text-blue-700">Daftar</button>
          </div>
          <ul className="flex flex-col px-4 gap-y-2 mt-4">
            <li className="flex items-center justify-between">
              <Link href="/" className="">
                Kategori
              </Link>
              <BsChevronRight size={15} />
            </li>
            <li className="flex items-center justify-between">
              <Link href="/" className="">
                Program
              </Link>
              <BsChevronRight size={15} />
            </li>
            <li>
              <Link href="/" className="">
                Tentang kami
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
