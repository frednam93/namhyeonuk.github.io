// Enhanced Home.tsx - Dark Charcoal Theme with Gradient Buttons
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-center min-h-screen bg-gray-900 text-gray-100">
      <img
        src="/cover.png"
        alt="Homepage Visual"
        className="w-64 h-64 object-cover rounded-full shadow-lg mb-8"
      />

      <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-center">Fred Hyeonuk Nam</h1>
      <p className="text-lg text-center text-gray-400 mb-10">
        Researcher · Musician · Guitar Luthier
      </p>

      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        <Link
          to="/about"
          className="w-full py-4 px-6 text-lg font-semibold text-white text-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-md hover:brightness-110 transition"
        >
          About
        </Link>
        <Link
          to="/research"
          className="w-full py-4 px-6 text-lg font-semibold text-white text-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 shadow-md hover:brightness-110 transition"
        >
          Research
        </Link>
        <Link
          to="/music"
          className="w-full py-4 px-6 text-lg font-semibold text-white text-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 shadow-md hover:brightness-110 transition"
        >
          Music
        </Link>
        <Link
          to="/guitars"
          className="w-full py-4 px-6 text-lg font-semibold text-white text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-400 shadow-md hover:brightness-110 transition"
        >
          Guitars
        </Link>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 Fred Hyeonuk Nam — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}