'use client';

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navLinks: NavLink[] = [
    // { href: "#features", label: "Features" },
    // { href: "#pricing", label: "Pricing" },
  ];

  // Close modal on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setShowModal(false);
    }
    if (showModal) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showModal]);

  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full pt-6 pb-4 px-4 md:px-16 lg:px-24 xl:px-40 text-sm">
        <Link href="/">
          <Image
            src="/Dermify.svg"
            alt="Dermify logo"
            width={130}
            height={36}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          {/* ✅ Get Started opens modal */}
          <button
  onClick={() => {
    console.log("GET STARTED CLICKED");
    setShowModal(true);
  }}
  className="px-7 py-2 rounded-full bg-[#e02067] text-white"
>
GET STARTED TEST 999

</button>


          <Link
            href="/"
            className="hidden md:block px-7 py-2 border border-gray-200 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
          >
            Login
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex"
          aria-label="Close menu"
        >
          X
        </button>
      </div>

      {showModal && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center">
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setShowModal(false)}
    />

    <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold">Get started with Dermify</h2>
      <p className="mt-2 text-sm text-gray-600">
        Launch a branded med spa app in minutes.
      </p>
    </div>
  </div>
)}

    </>
  );
}
