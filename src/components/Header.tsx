"use client";
import Link from "next/link";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const showMenu = toggleMenu ? "hidden" : "flex";
  return (
    <header className=" py-4 px-12 w-full flex justify-center text-white bg-[#1B262C]/70 rounded-b-[40%] fixed ">
      <div className="flex justify-around items-center container mb-2">
        <Link href={"/"} className={`md:text-4xl text-2xl`}>
          Dark Weather
        </Link>
        <div className=" flex justify-center">
          <ul
            className={`${showMenu} bg-[#1B262C] lg:bg-[#1B262C]/0 flex lg:flex-row flex-col absolute lg:static top-22 gap-2 lg:gap-15 text-lg lg:p-0 p-5 text-center lg:w-fit rounded-4xl left-0 right-0 mx-auto w-[95%]`}
          >
            <li className="lg:hover:bg-[#2d404b]/0 hover:bg-[#2d404b] cursor-pointer lg:w-fit w-full lg:py-0 py-2 rounded-2xl">
              <Link href="/">Home</Link>
            </li>
            <li className="lg:hover:bg-[#2d404b]/0 hover:bg-[#2d404b] cursor-pointer lg:w-fit w-full lg:py-0 py-2 rounded-2xl">
              <Link href="/downloadApp">Download App</Link>
            </li>
            <li className="lg:hover:bg-[#2d404b]/0 hover:bg-[#2d404b] cursor-pointer lg:w-fit w-full lg:py-0 py-2 rounded-2xl">
              <Link href="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
        {toggleMenu ? (
          <HiOutlineMenu className={`block lg:hidden text-3xl cursor-pointer`} onClick={() => setToggleMenu((state) => !state)} />
        ) : (
          <FaXmark className={`block lg:hidden text-3xl cursor-pointer`} onClick={() => setToggleMenu((state) => !state)} />
        )}
        <Link href="/register" className="text-xl rounded-xl lg:flex hidden ">
          Sign up
        </Link>
      </div>
    </header>
  );
}
