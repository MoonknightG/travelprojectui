"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import PackageCard from "../cards/PackageCard";
import { internationalPackages } from "@/data/international";

import "swiper/css";
import "swiper/css/navigation";

export default function InternationalPackages() {
  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-7">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Packages
          </p>
          <h2 className="text-3xl font-semibold">
            International Packages
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {internationalPackages.map((item) => (
            <SwiperSlide key={item.slug}>
              <Link href={`/international/${item.slug}`}>
                <div className="cursor-pointer">
                  <PackageCard {...item} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
