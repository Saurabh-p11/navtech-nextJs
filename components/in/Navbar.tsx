"use client";

import Image from "next/image";
import logo from "@/public/navtech-final-logo.png";
import indiaFlag from "@/public/india-flag.png";
import globeIcon from "@/public/global-icon.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isIndia = pathname.startsWith("/in") ? false : true;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setLastScrollY(scrollTop);
      setIsScrolled(scrollTop > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    if (isDrawerOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const handleToggle = (target: "in" | "gb") => {
    setShowDropdown(false);
    setIsDrawerOpen(false);
    router.push(`/${target}`);
  };

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#features", label: "FEATURES" },
    { href: "#why-erpnext", label: "WHY ERPNEXT" },
    {
      href: "https://frappe.io/stories",
      label: "CASE STUDIES",
      external: true,
    },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div
        className={`bg-white lg:rounded-full shadow-md max-w-7xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "mt-0" : "lg:mt-2"
        }`}
      >
        <Link href="/">
          <Image src={logo} alt="Logo" width={140} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 items-center text-gray-800 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-teal-600"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a href={item.href} className="hover:text-teal-600">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="tel:+917788990990"
                className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-teal-700"
              >
                <IoCallOutline />
                CALL NOW
              </a>
            </li>
            <li>
              <div className="relative">
                <button
                  className="text-sm text-gray-700 font-medium flex items-center gap-2 hover:text-teal-600 cursor-pointer"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  <Image
                    src={isIndia ? globeIcon : indiaFlag}
                    alt={isIndia ? "Global" : "India"}
                    width={30}
                    height={30}
                  />
                  {showDropdown ? (
                    <FaChevronUp className="text-xs" />
                  ) : (
                    <FaChevronDown className="text-xs" />
                  )}
                </button>
                {showDropdown && (
                  <div className="absolute top-full mt-2 bg-white border shadow w-32 z-50">
                    <ul className="text-sm text-gray-800">
                      <li>
                        <button
                          onClick={() => handleToggle("in")}
                          className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                          <Image
                            src={indiaFlag}
                            alt="India"
                            width={16}
                            height={16}
                          />
                          India
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleToggle("gb")}
                          className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                          <Image
                            src={globeIcon}
                            alt="Global"
                            width={16}
                            height={16}
                          />
                          Global
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:+917788990990"
            className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            <IoCallOutline />
            Call Now
          </a>
          <button
            onClick={() => setIsDrawerOpen((prev) => !prev)}
            className="text-2xl font-bold text-gray-600 hover:text-teal-600 mb-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image src={logo} alt="Logo" width={100} height={40} />
          <button
            className="text-xl font-bold text-black hover:text-teal-600"
            onClick={() => setIsDrawerOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="p-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsDrawerOpen(false)}
              className="block text-gray-700 hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}
          <hr />
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-3 font-medium">
              Select Region
            </p>
            <button
              onClick={() => handleToggle("in")}
              className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-colors duration-200 ${
                !isIndia ? "bg-teal-50 text-teal-600" : "hover:bg-gray-100"
              }`}
            >
              <Image src={indiaFlag} alt="India" width={20} height={20} />
              India
            </button>
            <button
              onClick={() => handleToggle("gb")}
              className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-colors duration-200 ${
                isIndia ? "bg-teal-50 text-teal-600" : "hover:bg-gray-100"
              }`}
            >
              <Image src={globeIcon} alt="Global" width={20} height={20} />
              Global
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
