"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import {
  MapPin,
  Compass,
  Clock,
  Utensils,
  Hotel,
  Car,
  Mountain,
  ArrowLeft,
  Heart,
  Share2,
  Star,
  Users,
  TrendingUp
} from "lucide-react";
import { bestTreks } from "@/data/bestTreks";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BestTrekDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const trek = bestTreks.find((t) => t.slug === slug);

  if (!trek) {
    return (
      <div className="py-24 text-center text-gray-500 text-lg">
        Trek not found
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-50 to-white min-h-screen">
      {/* =================== HERO SECTION =================== */}
      <div className="relative h-[600px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom"
          }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-[600px]">
              <Image
                src={trek.image}
                alt={trek.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </SwiperSlide>

          {trek.gallery?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[600px]">
                <Image
                  src={img}
                  alt={`${trek.title} ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10" />

        {/* Navigation Arrows */}
        <button className="swiper-button-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition text-white">
          ←
        </button>
        <button className="swiper-button-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition text-white">
          →
        </button>

        {/* Back Button */}
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/"); // ya /best-treks
            }
          }}
          className="absolute top-19 left-9 z-30 flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back</span>
        </button>

        {/* Action Buttons */}
        <div className="absolute top-19 right-9 z-30 flex gap-3">
          <button className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition hover:scale-110">
            <Heart size={20} />
          </button>
          <button className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition hover:scale-110">
            <Share2 size={20} />
          </button>
        </div>

        {/* Hero Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
              <Mountain size={16} /> {trek.bestFor}
            </p>
            <h1 className="text-5xl font-bold mb-3">{trek.title}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{trek.rating}</span>
                <span className="text-white/70">({trek.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== MAIN CONTENT =================== */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickFact icon={Clock} label="Duration" value={trek.days} />
              <QuickFact icon={Mountain} label="Altitude" value={trek.altitude} />
              <QuickFact icon={TrendingUp} label="Difficulty" value={trek.difficulty} />
              <QuickFact icon={Compass} label="Best Season" value={trek.season} />
            </div>

            {/* Overview Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="text-blue-600" size={28} />
                Trek Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Experience the legendary {trek.title}, one of the world's most iconic trekking routes. This extraordinary journey takes you through pristine alpine meadows, ancient mountain passes, and breathtaking vistas that have captivated adventurers for generations. Every step reveals stunning natural beauty and cultural richness.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <IncludedItem icon={Hotel} title="Accommodation" desc="Premium mountain lodges & camps" />
                <IncludedItem icon={Utensils} title="Meals" desc="All breakfast, lunch & dinner included" />
                <IncludedItem icon={Car} title="Transport" desc="Airport & trek-end transfers included" />
                <IncludedItem icon={Users} title="Guide" desc="Expert certified trek leader" />
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <ul className="space-y-3">
                {[
                  "Panoramic views of snow-capped peaks",
                  "Ancient cultural sites and villages",
                  "Sunrise and sunset from mountain passes",
                  "Wildlife spotting opportunities",
                  "Photography-worthy landscapes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((day) => (
                  <div key={day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                        {day}
                      </div>
                      {day < 4 && <div className="w-1 h-16 bg-gradient-to-b from-amber-600 to-transparent mt-2" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Day {day}: Mountain Pass & Summit Views</h3>
                      <p className="text-gray-600 mt-1">Trek through pristine valleys with stunning panoramic views. Experience alpine meadows and meet local communities.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">

              {/* Price */}
              <div className="mb-6">
                <p className="text-gray-500 text-sm font-medium mb-1">STARTING FROM</p>
                <p className="text-4xl font-bold text-gray-900">{trek.price}</p>
                <p className="text-gray-500 text-xs mt-1">per person</p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col gap-4">
                <Link href="/book-trek">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-800 active:scale-95 transition transform mb-4">
                    Book Trek Now
                  </button>
                </Link>
                <Link href="/get-quote">

                  <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition mb-8">
                    Enquire Now
                  </button>
                </Link>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-8 border-t border-gray-200">
                <Feature icon="✔" text="Certified Trek Leaders" />
                <Feature icon="✔" text="Small Groups (Max 12)" />
                <Feature icon="✔" text="All Meals Included" />
                <Feature icon="✔" text="Travel Insurance" />
                <Feature icon="✔" text="24/7 Emergency Support" />
                <Feature icon="✔" text="Money-back Guarantee" />
              </div>

              {/* Contact */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm mb-2">Have questions?</p>
                <p className="font-bold text-blue-600">+1-800-TREK-NOW</p>
                <p className="text-gray-500 text-xs mt-1">Available 24/7</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function QuickFact({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 transition transform hover:scale-105 text-center">
      <Icon className="mx-auto text-blue-600 mb-2" size={24} />
      <p className="text-xs text-gray-500 font-semibold">{label}</p>
      <p className="font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function IncludedItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <Icon className="text-blue-600 flex-shrink-0 mt-1" size={24} />
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <span className="text-green-500 font-bold">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}