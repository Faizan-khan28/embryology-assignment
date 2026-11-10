
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "#courses" },
    { name: "Gallery", href: "#gallery" },
    { name: "Training Centre", href: "/centres" },
    { name: "Faculty", href: "#faculty" },
    { name: "Updates", href: "#updates" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "/enquiry" },
  ];

  return (
    <nav className="fixed top-12.75 left-0 z-40 w-full">

      
      <div
        className={`mx-auto flex h-[50px] items-center justify-between bg-white px-5 shadow-lg transition-all duration-300 md:h-[90px] ${
          scrolled
            ? "mt-0 w-full rounded-none lg:px-[7%]"
            : "mt-[18px] w-[92%] max-w-[1650px] rounded-2xl border border-[#dce1ed] lg:px-10"
        }`}
      >

        
        <Link href="/" className="shrink-0">
          <img
            src="/images/navlogo.webp"
            alt="SEART Logo"
            className="h-[55px] w-[190px] object-contain md:h-[65px] md:w-[235px]"
          />
        </Link>

        
        <div className="hidden items-center gap-5 xl:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative whitespace-nowrap text-[16px] font-medium transition hover:text-[#29378e] ${
                pathname === link.href
                  ? "text-[#29378e] after:absolute after:-bottom-4 after:left-0 after:h-[3px] after:w-full after:bg-[#29378e]"
                  : "text-[#202a3c]"
              }`}
            >
              {link.name}

              {link.name === "Courses" && (
                  <span className="ml-2">⌄</span>
              )}

            </Link>
          ))}

        </div>

        
        <Link
          href="/enquiry"
          className="hidden items-center gap-3 rounded-xl bg-[#29378e] px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-[#19266e] lg:flex"
        >
          Enroll Now <span className="text-md">→</span>
        </Link>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#29378e] xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      
      {menuOpen && (
        <div className="mx-auto w-full bg-white px-6 py-4 shadow-xl xl:hidden">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gray-100 py-3 text-base font-medium text-gray-800"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/enquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-lg bg-[#29378e] px-5 py-3 text-center font-semibold text-white"
          >
            Enroll Now →
          </Link>

        </div>
      )}

    </nav>
  );
}
