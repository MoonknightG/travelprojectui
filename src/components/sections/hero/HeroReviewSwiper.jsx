"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";

const reviews = [
  {
    name: "Aman Sharma",
    text: "Best trip of my life. Everything was well managed!",
    image: "/user/user1.webp", // logo / avatar
    rating: 5,
  },
  {
    name: "Neha Verma",
    text: "Amazing experience, great people and beautiful places.",
    image: "/user/user2.webp",
    rating: 5,
  },
  {
    name: "Rohit Singh",
    text: "Highly recommend! Will travel again for sure.",
    image: "/user/user3.webp",
    rating: 5,
  },
  {
    name: "Pooja Mehta",
    text: "Safe, fun and unforgettable journey.",
    image: "/user/user4.webp",
    rating: 5,
  },
];

export default function HeroReviewSwiper() {
  return (
    <div className="hidden md:block">
      <Swiper
        direction="vertical"
        slidesPerView={2}
        spaceBetween={20}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-[420px]"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 border border-white/20">

              {/* ⭐ Stars */}
              <div className="flex gap-1 mb-3">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-sm"
                    />
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-white/90 leading-relaxed">
                “{review.text}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <p className="text-sm font-semibold text-white">
                  {review.name}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
