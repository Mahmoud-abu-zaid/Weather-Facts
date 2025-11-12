"use client";
import Link from "next/link";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1B262C]/70 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <Link href="/" className="text-2xl md:text-3xl font-semibold tracking-wide">
          Dark <span className="text-[#00ADB5]">Weather</span>
        </Link>

        <nav className="hidden lg:flex gap-10 text-lg">
          <Link href="/" className="hover:text-[#00ADB5] transition-colors">
            Home
          </Link>
          <Link href="/downloadApp" className="hover:text-[#00ADB5] transition-colors">
            Download App
          </Link>
          <Link href="/contactus" className="hover:text-[#00ADB5] transition-colors">
            Contact Us
          </Link>
        </nav>

        <Link href="/register" className="hidden lg:inline-block bg-[#00ADB5] hover:bg-[#008C96] text-white px-4 py-2 rounded-xl text-sm font-medium transition">
          Sign Up
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-3xl focus:outline-none" aria-label="Toggle menu">
          {menuOpen ? <FaXmark /> : <HiOutlineMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1B262C]/90 backdrop-blur-xl flex flex-col items-center pb-4 text-lg animate-slideDown">
          <Link href="/" className="hover:text-[#00ADB5] w-full text-center py-2 hover:bg-[#172b36]">
            Home
          </Link>
          <Link href="/downloadApp" className="hover:text-[#00ADB5] w-full text-center py-2 hover:bg-[#172b36]">
            Download App
          </Link>
          <Link href="/contactus" className="hover:text-[#00ADB5] w-full text-center py-2 hover:bg-[#172b36] mb-3">
            Contact Us
          </Link>
          <Link href="/register" className="bg-[#00ADB5] hover:bg-[#008C96] px-4 py-2.5 rounded-xl text-sm font-medium">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
