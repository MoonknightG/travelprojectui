"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ReviewCard from "../cards/ReviewCard";

import "swiper/css";

const reviews = [
  {
    name: "Zahida",
    text:
      "I'm writing this review after two fantastic solo travel excursions with JustWravel. Everything was perfectly managed.",
    image: "/reviews/zahida.jpg",
  },
  {
    name: "Rishi",
    text:
      "Recently I've been with JustWravel backpacking trip. Safety, comfort and planning were top notch.",
    image: "/reviews/rishi.jpg",
  },
  {
    name: "Manu",
    text:
      "Thank you JustWravel for organizing such a wonderful Bhutan trip. Execution was flawless.",
    image: "/reviews/manu.jpg",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-7">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-sm uppercase tracking-widest text-gray-400">
          Reviews
        </p>
        <h2 className="text-3xl font-semibold mb-8">
          What Our Clients Say About Us
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
