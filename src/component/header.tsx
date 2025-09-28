"use client";

import { useState } from "react";
import Image from "next/image";
import NavLink from "@/component/NavLink";

const navLinks = [
  { label: "Home", href: "/", icon: "/images/icons/nav_icon1.svg" },
  { label: "About", href: "/about", icon: "/images/icons/nav_icon2.svg" },
  { label: "Services", href: "/services", icon: "/images/icons/nav_icon3.svg" },
  { label: "Contact", href: "/contact", icon: "/images/icons/nav_icon4.svg" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar only for mobile */}
      <div className="sm:hidden flex items-center justify-between bg-gray-900 text-white px-4 py-3">
        <Image src="/images/logo/logo.svg" alt="Logo" width={40} height={40} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <Image
            src={isOpen ? "/images/icons/close.svg" : "/images/icons/menu.svg"}
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Sidebar (always visible on sm+, toggle on mobile) */}
      <aside
        className={`bg-gray-900 text-white flex flex-col py-10 min-h-screen rounded-r-4xl transform transition-transform duration-300 fixed top-0 left-0 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static sm:w-auto`}
      >
        <div className="mb-32 flex items-center justify-center px-9">
          <Image
            src="/images/logo/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        </div>

        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="group relative items-center gap-3 hover:text-blue-400 mr-5 pr-2 flex justify-end bg-transparent hover:bg-[rgb(52,153,255,0.24)] hover:rounded-r-2xl transition-all duration-300"
            >
              <div className="group-hover:left-0 h-full w-2 bg-[#7557FF] absolute left-[-2rem] rounded-r-lg transition-all duration-300"></div>
              <Image
                src={link.icon}
                alt={`${link.label} icon`}
                width={20}
                height={20}
                className="w-13 h-13"
              />
              {/* <span>{link.label}</span> */}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile when menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 sm:hidden z-40"
        />
      )}
    </>
  );
}
