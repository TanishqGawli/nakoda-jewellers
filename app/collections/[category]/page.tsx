"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  // ✅ ALL CATEGORY IMAGES
  const data: any = {
    necklaces: [
      "/necklaces/n1.jpg",
      "/necklaces/n2.jpg",
      "/necklaces/n3.jpg",
      "/necklaces/n4.jpg",
    ],
    chains: [
      "/chains/c1.jpg",
      "/chains/c2.jpg",
      "/chains/c3.jpg",
      "/chains/c4.jpg",
    ],
    rings: [
      "/rings/r1.jpg",
      "/rings/r2.jpg",
      "/rings/r3.jpg",
      "/rings/r4.jpg",
    ],
    bangles: [
      "/bangles/b1.jpg",
      "/bangles/b2.jpg",
      "/bangles/b3.jpg",
      "/bangles/b4.jpg",
    ],
    haarams: [
      "/haarams/h1.jpg",
      "/haarams/h2.jpg",
      "/haarams/h3.jpg",
      "/haarams/h4.jpg",
    ],
    drops: [
      "/drops/d1.jpg",
      "/drops/d2.jpg",
      "/drops/d3.jpg",
      "/drops/d4.jpg",
    ],
  };

  const images = data[category] || [];

  return (
    <main className="min-h-screen bg-white pt-32 px-6">

      <h1 className="text-4xl font-serif text-center gold-text mb-12 capitalize">
        {category} Collection
      </h1>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {images.map((img: string, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={img}
              alt={category}
              width={300}
              height={300}
              className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

    </main>
  );
}