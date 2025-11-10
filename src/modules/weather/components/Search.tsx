"use client";
import { useState } from "react";

interface SearchProps {
  onSearch: (city: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
  };
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-[350px] flex items-center gap-4 bg-linear-to-r from-[#182329] to-[#2b3e49] p-2 rounded">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="text-white text-lg outline-0 font-light w-full"
        placeholder="Search Here"
      />
      <button type="submit" className="text-white">Search</button>
    </form>
  );
}
