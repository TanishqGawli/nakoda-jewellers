"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showInvestment, setShowInvestment] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Gold",
      sub: ["Chains", "Rings", "Bangles", "Necklaces"],
    },
    {
      name: "Diamond",
      sub: ["Rings", "Earrings", "Necklaces"],
    },
    {
      name: "Platinum",
      sub: ["Couple Rings", "Bands"],
    },
    {
      name: "Coins",
      sub: ["Gold Coins", "Silver Coins"],
    },
    {
      name: "Bridal",
      sub: ["Haarams", "Sets", "Temple Jewellery"],
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f5f1eb]/90 backdrop-blur-xl shadow-md"
            : "bg-[#f5f1eb]/70 backdrop-blur-lg"
        } border-b border-[#e5dccf]`}
      >
        {/* TOP SECTION */}
        <div className="grid grid-cols-3 items-center px-4 md:px-12 py-2">

          {/* LEFT */}
          <div></div>

          {/* CENTER LOGO */}
          <div className="flex flex-col items-center">
            <svg
              width={scrolled ? "40" : "50"}
              height={scrolled ? "40" : "50"}
              viewBox="0 0 100 100"
              className="transition-all duration-500 hover:scale-110"
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="#c5a047" strokeWidth="2" />
              <text x="50" y="65" textAnchor="middle" fill="#c5a047" fontSize="40" fontWeight="bold">
                NJ
              </text>
            </svg>

            <h1 className="text-sm md:text-base font-serif tracking-[0.25em] text-[#3e3324]">
              NAKODA JEWELLERS
            </h1>
          </div>

          {/* RIGHT - INVESTMENT */}
          <div className="flex justify-end text-sm text-[#5a4a36] relative">
            <span
              className="cursor-pointer hover:text-[#c5a047] transition font-medium"
              onClick={() => setShowInvestment(true)}
            >
              ₹ Investment
            </span>
          </div>
        </div>

        {/* MENU */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-3 text-xs md:text-sm uppercase tracking-wide text-[#5a4a36]">

            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className="cursor-pointer hover:text-[#c5a047] transition">
                  {item.name}
                </span>

                {activeMenu === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/95 backdrop-blur-xl shadow-xl rounded-xl p-6 border border-gray-200 dropdown-animate">
                    <div className="grid gap-3 text-gray-700">
                      {item.sub.map((sub) => (
                        <Link
                          key={sub}
                          href="#"
                          className="hover:text-[#c5a047] transition"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </nav>

      {/* 💎 INVESTMENT POPUP */}
      {showInvestment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 max-w-lg w-[90%] shadow-2xl relative animate-fadeDown">

            {/* CLOSE */}
            <button
              onClick={() => setShowInvestment(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-2xl font-serif gold-text mb-4 text-center">
              Investment Plan
            </h2>

            {/* CONTENT */}
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Our exclusive investment plan at Nakoda Jewellers is thoughtfully designed 
              to make your jewellery dreams more accessible and rewarding. Customers can 
              begin their journey with a minimum monthly contribution of just ₹1000 and 
              continue investing for 12 months.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-3 text-center">
              As a token of our appreciation, we add a <span className="font-semibold">1-month bonus</span>, 
              making your total value equivalent to 13 months of investment.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-3 text-center">
              At the end of the tenure, the accumulated amount can be used to purchase 
              jewellery from our store.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-3 text-center">
              Every customer who enrolls receives a <span className="font-semibold">surprise gift</span> 
              from Nakoda Jewellers.
            </p>

          </div>
        </div>
      )}
    </>
  );
}