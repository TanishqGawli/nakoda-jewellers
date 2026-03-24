"use client";

import Image from "next/image";

export default function Collections() {
  const items = [
    {
      title: "Chains",
      desc: "Classic and timeless chains for every occasion.",
      img: "/icons/chain.png",
    },
    {
      title: "Rings",
      desc: "Elegant gold rings crafted to symbolize beauty, love, and everyday luxury.",
      img: "/icons/ring.png",
    },
    {
      title: "Bangles",
      desc: "Elegant bangles for a timeless look.",
      img: "/icons/bangles.png",
    },
    {
      title: "Necklaces",
      desc: "Beautiful necklaces that add charm to any outfit.",
      img: "/icons/necklace.png",
    },
    {
      title: "Haarams",
      desc: "Exquisite Haaram sets that captivate every gaze.",
      img: "/icons/haaram.png",
    },
    {
      title: "Drops",
      desc: "Traditional drops for a festive touch.",
      img: "/icons/drops.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9f7f4] py-20 px-6 pt-40">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif text-gray-800">
          Our Collections
        </h1>
        <p className="mt-3 text-gray-500">
          Explore a range of jewellery across categories.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white rounded-full px-6 py-5 shadow-md hover:shadow-xl transition duration-300"
          >

            {/* ICON */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
              <Image
                src={item.img}
                alt={item.title}
                width={40}
                height={40}
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}