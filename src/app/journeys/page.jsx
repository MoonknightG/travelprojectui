"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { featuredJourneys } from "@/data/journeys";
import { bestTreks } from "@/data/bestTreks";

export default function JourneysPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 👉 URL se category uthao
  const category = searchParams.get("category");

  // 👉 View All ka master data (same as before)
  const combinedFeatured = [
    ...featuredJourneys.map((i) => ({
      ...i,
      type: "Journey",
      href: `/trips/${i.slug}`,
    })),
    ...bestTreks.map((i) => ({
      ...i,
      type: "Trek",
      href: `/trips/${i.slug}`,
    })),
  ];

  // 👉 CATEGORY FILTER (magic yahan hai 🔥)
  const filteredFeatured = category
    ? combinedFeatured.filter((item) =>
        item.category
          ?.toLowerCase()
          .includes(category.toLowerCase())
      )
    : combinedFeatured;

  const heroImages = [
    { src: "/journeys/himalayan-peaks.avif", alt: "Himalayan Peaks" },
    { src: "/journeys/valley-vista.jpg", alt: "Valley Vista" },
    { src: "/journeys/trek-adventure.jpg", alt: "Trek Adventure" },
    { src: "/journeys/forest-trail.jpg", alt: "Forest Trail" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-yellow-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* BACK */}
        <button
          onClick={() => router.back()}
          className="mb-10 inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition"
        >
          <ArrowLeft size={18} />
          Back to Experiences
        </button>

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-14">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold">
              Curated Journeys
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Explorer Journeys, Trek <br />
              <span className="text-amber-300">& Adventure India</span>
            </h1>

            <p className="text-slate-300 max-w-md leading-relaxed">
              Thoughtfully designed group journeys to the mountains,
              valleys and offbeat trails — crafted for comfort,
              safety and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {heroImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-40 rounded-3xl overflow-hidden shadow-xl border border-amber-800/30"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LIST */}
        <div>
          <p className="text-xs uppercase font-semibold text-amber-400 mb-8">
            {category ? `Showing: ${category}` : "Explore All Journeys"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredFeatured.map((item) => (
              <Link
                key={`${item.type}-${item.slug}`}
                href={item.href}
                className="group bg-gradient-to-br from-[#111827] to-[#020617] border border-amber-800/30 rounded-2xl overflow-hidden hover:shadow-amber-900/40 transition"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-900 text-xs px-3 py-1 rounded-full font-semibold">
                    {item.type}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>

                  {item.price && (
                    <p className="text-amber-300 font-semibold">
                      {item.price}
                    </p>
                  )}

                  {item.days && (
                    <p className="text-sm text-slate-300 mt-1">
                      {item.days}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filteredFeatured.length === 0 && (
            <p className="text-slate-400 mt-10">
              No journeys found for this category.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
