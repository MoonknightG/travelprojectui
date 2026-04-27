"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TrekCard from "./TrekCard";
import { backpackingTrips } from "@/data/backpacking";

import "swiper/css";
import "swiper/css/navigation";

export default function BackpackingSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/backpacking">
            <h2 className="text-2xl font-semibold hover:text-blue-600 cursor-pointer transition">
              Backpacking Tour
            </h2>
          </Link>

          <Link
            href="/backpacking"
            className="text-sm text-blue-600 hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {backpackingTrips.map((trip) => (
            <SwiperSlide key={trip.id}>
              <Link href={`/backpacking/${trip.slug}`}>
                <div className="cursor-pointer">
                  <TrekCard
                    title={trip.title}
                    price={trip.price}
                    image={trip.image}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
