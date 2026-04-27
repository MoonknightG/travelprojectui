"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { backpackingTrips } from "@/data/backpacking";

export default function BackpackPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white py-24">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-yellow-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* BACK */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-3 text-sm text-amber-300 hover:text-amber-200 transition"
        >
          <ArrowLeft size={18} />
          Back to Experiences
        </Link>

        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-14">

          {/* LEFT */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold">
              Backpacking Trips
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Backpack Through <br />
              <span className="text-amber-300">
                India’s Hidden Gems
              </span>
            </h1>

            <p className="text-slate-300 max-w-md leading-relaxed">
              Premium backpacking journeys crafted for explorers who
              seek culture, landscapes and authentic local experiences
              — without compromising comfort.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-amber-800/30">
            <Image
              src="/tripsss/himachal.jpg"
              alt="Backpacking India"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* ================= LIST ================= */}
        <div>
          <p className="text-xs uppercase font-semibold text-amber-400 mb-8">
            Explore Backpacking Trips
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {backpackingTrips.map((trip) => (
              <Link
                key={trip.slug}
                href={`/backpacking/${trip.slug}`}
                className="group bg-gradient-to-br from-[#111827] to-[#020617] border border-amber-800/30 rounded-2xl overflow-hidden hover:shadow-amber-900/40 transition"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-amber-200 mb-2 group-hover:text-amber-300 transition">
                    {trip.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                    {trip.days && (
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {trip.days}
                      </span>
                    )}
                    {trip.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {trip.location}
                      </span>
                    )}
                  </div>

                  {trip.price && (
                    <p className="font-semibold text-amber-400">
                      {trip.price}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {backpackingTrips.length === 0 && (
            <p className="text-slate-400 mt-10">
              No backpacking trips available right now.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
