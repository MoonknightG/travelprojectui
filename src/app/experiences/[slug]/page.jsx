"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { memoriesForLife } from "@/data/memoriesforlife";
import { ArrowLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  MapPin,
  Compass,
  Clock,
  Utensils,
  Hotel,
  Car,
  Mountain
} from "lucide-react";


export default function ExperienceDetailPage() {
  const { slug } = useParams();
  const router = useRouter();  


  const experience = memoriesForLife.bottomVideos.find(
    (e) => e.slug === slug
  );

  if (!experience) {
    return (
      <div className="py-24 text-center text-gray-500">
        Experience not found
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">

        <button
          onClick={() => router.back()}
        className="mb-1 flex items-center gap-2 px-2 py-4 text-sm text-gray-500 hover:text-black transition"
        >
          <ArrowLeft size={16} />
          Back to Experiences
        </button>

        {/* ================= HERO GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">

          {/* 🔥 LEFT HERO SWIPER */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden h-[420px]">

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-full"
            >
              {/* SLIDE 1 — IMAGE */}
              <SwiperSlide>
                <Image
                  src={experience.image}
                  alt={experience.title}
                  width={1400}
                  height={900}
                  className="w-full h-[420px] object-cover"
                  priority
                />
              </SwiperSlide>

              {/* SLIDE 2 — YOUTUBE VIDEO */}
              {experience.youtubeId && (
                <SwiperSlide>
                  <div className="relative w-full h-[420px] bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${experience.youtubeId}?rel=0&playsinline=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </SwiperSlide>
              )}
            </Swiper>

          </div>

          {/* RIGHT GALLERY (UNCHANGED) */}
          <div className="grid grid-rows-3 gap-4 h-[420px]">

            {experience.gallery?.[0] && (
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={experience.gallery[0]}
                  alt=""
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {experience.gallery?.[1] && (
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={experience.gallery[1]}
                  alt=""
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="rounded-2xl overflow-hidden bg-black/40 relative flex items-center justify-center text-white font-semibold">
              +{experience.gallery?.length ?? 0} Photos
            </div>
          </div>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">
              {experience.title}
            </h1>

            <p className="text-gray-600 mb-6">
              {experience.location} • {experience.duration}
            </p>

            {/* INCLUSIONS  with logo */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Inclusions
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-sm font-medium">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  Meals
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-sm font-medium">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  Stays
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-sm font-medium">
                  <Car className="w-5 h-5 text-blue-600" />
                  Transfers
                </div>

                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 text-sm font-medium">
                  <Mountain className="w-5 h-5 text-blue-600" />
                  Activities
                </div>
              </div>
            </div>


            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-3">
                Experience Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-24">
            <p className="text-sm text-gray-500 mb-1">Starting From</p>
            <p className="text-3xl font-bold mb-4">{experience.price}</p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Book Now
            </button>

            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p>✔ Meals & Stays Included</p>
              <p>✔ Guided Experiences</p>
              <p>✔ Flexible Cancellation</p>
              <p>✔ 24/7 Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
