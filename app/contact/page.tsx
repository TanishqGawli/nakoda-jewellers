export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-800">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Visit Our Showroom 📍
      </h1>

      {/* Shop Details */}
      <div className="text-center mb-10 space-y-2">
        <p className="text-xl font-semibold">
          Nakoda Jewellers
        </p>

        <p>Hyderabad, Telangana</p>

        <p>📞 +91 8106444207</p>
        <p>✉️ nakodajewellers@gmail.com</p>

        <p className="mt-4 font-medium">
          🕒 Open: 10:00 AM – 9:00 PM (All Days)
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {/* Call Button */}
        <a
          href="tel:+918106444207"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:scale-105 transition"
        >
          Call Now 📞
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918106444207?text=Hi%20I%20visited%20your%20website%20Nakoda%20Jewellers"
          target="_blank"
          className="px-6 py-3 bg-green-500 text-white rounded-full shadow hover:scale-105 transition"
        >
          WhatsApp 💬
        </a>

        {/* Directions Button */}
        <a
          href="https://maps.app.goo.gl/UmtLRfUsYrtsoUsJ6?g_st=awb"
          target="_blank"
          className="px-6 py-3 bg-black text-white rounded-full shadow hover:scale-105 transition"
        >
          Get Directions 📍
        </a>

      </div>

      {/* Google Map */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </main>
  );
}