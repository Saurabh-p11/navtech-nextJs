"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/navtech-final-logo.png";
import indiaFlag from "@/public/india-flag.png";
import globeIcon from "@/public/global-icon.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isIndia = pathname.startsWith("/gb");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close drawer when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
      }
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

  const handleToggle = (target: "global" | "india") => {
    setShowDropdown(false);
    if (target === "global") router.push("/gb");
    else router.push("/in");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const navItems = [
    { href: "#services", label: "SERVICES", targetId: "services" },
    {
      href: "#servicesSection",
      label: "INDUSTRIES",
      targetId: "servicesSection",
    },
    { href: "#foundersMessage", label: "TEAM", targetId: "foundersMessage" },
    { href: "#ourClients", label: "CLIENTS", targetId: "ourClients" },
    { href: "#contact", label: "CONTACT", targetId: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-4 bg-white shadow-sm transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-9xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <a href="/gb#hero" onClick={(e) => handleNavClick(e, "hero")}>
              <Image src={logo} alt="Logo" width={180} height={50} />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 text-sm font-medium">
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-gray-700 hover:text-teal-600 active:text-teal-600"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#servicesSection"
                onClick={(e) => handleNavClick(e, "servicesSection")}
                className="text-gray-700 hover:text-teal-600 active:text-teal-600"
              >
                INDUSTRIES
              </a>
            </li>
            <li>
              <a
                href="#foundersMessage"
                onClick={(e) => handleNavClick(e, "foundersMessage")}
                className="text-gray-700 hover:text-teal-600 active:text-teal-600"
              >
                TEAM
              </a>
            </li>
            <li>
              <a
                href="#ourClients"
                onClick={(e) => handleNavClick(e, "ourClients")}
                className="text-gray-700 hover:text-teal-600 active:text-teal-600"
              >
                CLIENTS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-gray-700 hover:text-teal-600 active:text-teal-600"
              >
                CONTACT
              </a>
            </li>
            <li>
              <a href="https://x.com/navaratantech" target="_blank">
                <FaXTwitter className="text-gray-700 hover:text-teal-600 active:text-teal-600 text-lg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/nav-technologies/posts/?feedView=all"
                target="_blank"
              >
                <FaLinkedinIn className="text-gray-700 hover:text-teal-600 active:text-teal-600 text-lg" />
              </a>
            </li>
            <li>
              <div className="relative">
                <button
                  className="text-sm text-gray-700 font-medium flex items-center gap-2 hover:text-teal-600 cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <Image
                    src={isIndia ? globeIcon : indiaFlag}
                    alt={isIndia ? "Global" : " India"}
                    width={30}
                    height={30}
                    className=""
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
                          onClick={() => handleToggle("india")}
                          className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 cursor-pointer"
                        >
                          <Image
                            src={indiaFlag}
                            alt="India"
                            width={16}
                            height={16}
                            className=""
                          />{" "}
                          India
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleToggle("global")}
                          className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 cursor-pointer"
                        >
                          <Image
                            src={globeIcon}
                            alt="Global"
                            width={16}
                            height={16}
                          />{" "}
                          Global
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleDrawer}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${
                  isDrawerOpen ? "rotate-90" : ""
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isDrawerOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <a
              href="/gb#hero"
              onClick={(e) => {
                handleNavClick(e, "hero");
                closeDrawer();
              }}
            >
              <Image src={logo} alt="Logo" width={140} height={40} />
            </a>
            <button
              onClick={closeDrawer}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.targetId);
                    closeDrawer();
                  }}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 transform hover:translate-x-1"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isDrawerOpen
                      ? "slideInRight 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Links in Mobile */}
            <div className="mt-8 px-4">
              <div className="flex items-center gap-4 mb-6">
                <a
                  href="https://x.com/navaratantech"
                  target="_blank"
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaXTwitter className="text-gray-700 hover:text-teal-600 text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/nav-technologies/posts/?feedView=all"
                  target="_blank"
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaLinkedinIn className="text-gray-700 hover:text-teal-600 text-xl" />
                </a>
              </div>

              {/* Country Selector in Mobile */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-500 mb-3 font-medium">
                  SELECT REGION
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      handleToggle("india");
                      closeDrawer();
                    }}
                    className={`flex items-center gap-3 px-4 py-3 w-full text-left text-gray-600  rounded-lg transition-colors duration-200 ${
                      !isIndia
                        ? "bg-teal-50 text-teal-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Image src={indiaFlag} alt="India" width={20} height={20} />
                    <span className="text-sm font-medium">India</span>
                  </button>
                  <button
                    onClick={() => {
                      handleToggle("global");
                      closeDrawer();
                    }}
                    className={`flex items-center gap-3 px-4 py-3 w-full text-left text-gray-600  rounded-lg transition-colors duration-200 ${
                      isIndia ? "bg-teal-50 text-teal-600" : "hover:bg-gray-100"
                    }`}
                  >
                    <Image
                      src={globeIcon}
                      alt="Global"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium">Global</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center text-xs text-gray-500">
              © 2024 NavTech. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
