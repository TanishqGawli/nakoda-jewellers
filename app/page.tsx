"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

  const occasions = [
    { name: "Wedding", img: "/wedding.jpg" },
    { name: "Gifting", img: "/gifting.jpg" },
    { name: "Daily Wear", img: "/daily.jpg" },
    { name: "Traditional", img: "/traditional.jpg" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 pt-24">

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] mt-16 md:mt-24">
        
        {/* LEFT CONTENT */}
        <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col justify-center px-6 md:px-16 text-white py-10">
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight gold-text fade-in">
            Elegance in Every Element,
            <br />
            Beauty in Every Moment
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-md fade-in delay-200">
            Celebrating Life's Most Precious Moments — One Timeless Piece at a Time.
          </p>

          <Link href="/menu">
            <button className="mt-5 px-5 py-2 bg-yellow-500 text-black text-sm md:text-base font-semibold rounded-full hover:scale-105 transition w-fit fade-in delay-400">
              Explore Collection
            </button>
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-auto">
          <Image
            src="/hero.jpg"
            alt="Bridal Jewellery"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* OUR COLLECTIONS */}
      <section className="bg-[#f9f7f4] py-16 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-gray-800">
            Our Collections
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Explore a range of jewellery across categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {items.map((item, index) => (
            <Link
              key={index}
              href={`/collections/${item.title.toLowerCase()}`}
            >
              <div className="flex items-center gap-4 bg-white rounded-full px-4 md:px-6 py-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 cursor-pointer">

                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gray-50">
                  <Image src={item.img} alt={item.title} width={30} height={30} />
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* SHOP BY OCCASION */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif gold-text">
            Shop by Occasion
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Find the perfect jewellery for every special moment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {occasions.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={300}
                className="w-full h-[180px] md:h-[300px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-sm md:text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVINE COLLECTION */}
      <section className="bg-[#f9f7f4] py-16 px-4 md:px-6 animate-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center max-w-6xl mx-auto">

          <div className="animate-left">
            <h2 className="text-2xl md:text-4xl font-serif gold-text mb-4 md:mb-6">
              Divine Collection
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
              Discover a perfect harmony of elegance and spirituality with our Divine Collection.
              Carefully curated to reflect celestial beauty and profound grace, each piece is designed
              to elevate your spirit and your style.
            </p>
          </div>

          <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg animate-right delay-200">
            <Image src="/divine.jpg" alt="Divine Jewellery" fill className="object-cover" />
          </div>

        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-white py-16 px-4 md:px-6 animate-section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="animate-left">
            <h2 className="text-2xl md:text-4xl font-serif gold-text mb-4 md:mb-6">
              About Us
            </h2>

            <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
              Crafting Moments That Last Forever
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              At Nakoda Jewellers, we believe that every piece of jewellery tells a story.Founded on 10th February 2000, our brand is built on quality, elegance, and trust. We blend tradition with modern design to offer carefully crafted collections for every style and occasion. With a focus on customer satisfaction and seamless mobile and tablet browsing, we ensure a smooth and enjoyable shopping experience anytime, anywhere.
            </p>
          </div>

          <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg animate-right delay-200">
            <Image src="/about.jpg" alt="Nakoda Jewellers" fill className="object-cover object-top" />
          </div>

        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-[#f9f7f4] py-16 px-4 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="animate-left">
            <h2 className="text-2xl md:text-4xl font-serif gold-text mb-4 md:mb-6">
              Our Founders
            </h2>

            <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
              Sohanlal Jain & Dinesh Jain
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
             Our journey was shaped by the vision and dedication of our founder, Sohanlal Jain, and co-founder, Dinesh Jain. With a passion for quality, trust, and timeless design, they laid the foundation of our brand on strong values and customer commitment. Their leadership continues to inspire us to deliver excellence in every piece we offer. Our website is designed to provide a smooth and seamless experience across mobile phones and tablets, making it easy for you to explore our collections anytime, anywhere.
            </p>
          </div>

          <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
            <div className="flex animate-slide">
              {[
                "/founders/f1.jpg",
                "/founders/f2.jpg",
                "/founders/f3.jpg",
                "/founders/f4.jpg",
              ].map((img, index) => (
                <div key={index} className="min-w-full h-[250px] md:h-[400px] relative">
                  <Image src={img} alt="Founder" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl md:text-4xl font-serif gold-text mb-4 md:mb-6">
            Visit Our Showroom
          </h2>

          <p className="text-gray-300 mb-8 text-sm md:text-base">
            We welcome you to explore our exclusive collections in person.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm md:text-base">+91 8106444207</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Location</h3>
              <a
                href="https://maps.app.goo.gl/UmtLRfUsYrtsoUsJ6?g_st=awb"
                target="_blank"
                className="text-gray-400 hover:text-white underline text-sm md:text-base"
              >
                View on Google Maps
              </a>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/918106444207"
                target="_blank"
                className="text-green-400 hover:text-green-300 text-sm md:text-base"
              >
                Chat with us
              </a>
            </div>
          </div>

          <p className="mt-10 text-gray-400 text-xs md:text-sm">
            Nakoda Jewellers, Geetha Nagar, Malkajgiri
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-5 text-center text-sm">
        <p>© 2026 Nakoda Jewellers • All Rights Reserved</p>
      </footer>

    </main>
  );
}