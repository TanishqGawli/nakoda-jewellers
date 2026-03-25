"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showInvestment, setShowInvestment] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Gold", sub: ["Chains", "Rings", "Bangles", "Necklaces"] },
    { name: "Diamond", sub: ["Rings", "Earrings", "Necklaces"] },
    { name: "Platinum", sub: ["Couple Rings", "Bands"] },
    { name: "Coins", sub: ["Gold Coins", "Silver Coins"] },
    { name: "Bridal", sub: ["Haarams", "Sets", "Temple Jewellery"] },
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
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 md:px-12 py-3">

          {/* LEFT - LOGO */}
          <div className="flex items-center gap-3">
            <svg
              width={scrolled ? "40" : "50"}
              height={scrolled ? "40" : "50"}
              viewBox="0 0 100 100"
              className="transition-all duration-500"
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="#c5a047" strokeWidth="2" />
              <text x="50" y="65" textAnchor="middle" fill="#c5a047" fontSize="40" fontWeight="bold">
                NJ
              </text>
            </svg>

            <h1 className="text-sm md:text-base font-serif tracking-[0.2em] text-[#3e3324] whitespace-nowrap">
              NAKODA JEWELLERS
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-[#5a4a36]">
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white shadow-xl rounded-xl p-4 border">
                      {item.sub.map((sub) => (
                        <Link key={sub} href="#" className="block py-1 hover:text-[#c5a047]">
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* INVESTMENT (UNCHANGED) */}
            <span
              className="hidden md:block cursor-pointer text-sm text-[#5a4a36] hover:text-[#c5a047]"
              onClick={() => setShowInvestment(true)}
            >
              ₹ Investment
            </span>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4">

            {menuItems.map((item) => (
              <div key={item.name}>
                <div
                  className="font-medium cursor-pointer"
                  onClick={() =>
                    setActiveMenu(activeMenu === item.name ? null : item.name)
                  }
                >
                  {item.name}
                </div>

                {activeMenu === item.name && (
                  <div className="ml-4 mt-2 space-y-1 text-sm">
                    {item.sub.map((sub) => (
                      <Link key={sub} href="#" className="block">
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* INVESTMENT MOBILE */}
            <div
              className="pt-3 border-t cursor-pointer"
              onClick={() => setShowInvestment(true)}
            >
              ₹ Investment
            </div>
          </div>
        )}
      </nav>

      {/* 💎 INVESTMENT POPUP (UNCHANGED) */}
      {showInvestment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-[90%] shadow-2xl relative">
            <button
              onClick={() => setShowInvestment(false)}
              className="absolute top-3 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-serif mb-4 text-center">
              Investment Plan
            </h2>

            <p className="text-sm text-center">
              Our exclusive investment plan at Nakoda Jewellers is thoughtfully designed to make your jewellery dreams more accessible and rewarding. Customers can begin their journey with a minimum monthly contribution of just ₹1000 and continue investing for 12 months.

As a token of our appreciation, we add a 1-month bonus, making your total value equivalent to 13 months of investment.

At the end of the tenure, the accumulated amount can be used to purchase jewellery from our store.

Every customer who enrolls receives a surprise giftfrom Nakoda Jewellers.
            </p>
          </div>
        </div>
      )}
    </>
  );
}