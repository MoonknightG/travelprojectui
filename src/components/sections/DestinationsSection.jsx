"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import DestinationCard from "../cards/DestinationCard";
import { destinations } from "@/data/destination";

import "swiper/css";
import "swiper/css/navigation";

export default function DestinationsSection() {
  return (
    <section className="bg-white py-1">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-7">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Destinations
          </p>
          <h2 className="text-3xl font-semibold mt-2">
            Find The Perfect Escape
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {destinations.map((item) => (
            <SwiperSlide key={item.slug}>
              <Link href={`/destinations/${item.slug}`}>
                <div className="cursor-pointer">
                  <DestinationCard {...item} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
