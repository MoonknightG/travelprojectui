"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TripsTopSwiper({ trips }) {
  if (!trips.length) {
    return (
      <p className="text-center text-gray-500">
        No trips found.
      </p>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3500 }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {trips.map((trip) => (
        <SwiperSlide key={trip.id}>
          <Link href={`/trips/${trip.slug}`}>
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition">

              <Image
                src={trip.image}
                alt={trip.title}
                width={600}
                height={400}
                className="object-cover w-full h-[260px] group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs">{trip.days}</p>
                <h3 className="font-semibold text-lg">
                  {trip.title}
                </h3>

                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold">{trip.price}</p>
                  <span className="bg-white text-black text-xs px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
                    View Details
                  </span>
                </div>
              </div>

            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
