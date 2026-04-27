"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { featuredJourneys } from "@/data/journeys";
import { bestTreks } from "@/data/bestTreks";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Share2,
  Star,
  MapPin,
  Clock,
  Users,
  Camera,
  Compass,
  Zap,
  Shield,
  MessageCircle
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function TripDetailPage() {
  const params = useParams();
  const router = useRouter();

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const decodedSlug = decodeURIComponent(slug).toLowerCase();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ DONO DATA SOURCES SE DHUNDO
  const allTrips = [
    ...featuredJourneys,
    ...bestTreks
  ];

  // ✅ SLUG MATCH KARO (case-insensitive)
  const trip = allTrips.find((t) => t.slug.toLowerCase() === decodedSlug);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400 bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black">
        <div className="text-center">
          <MapPin size={48} className="mx-auto mb-4 text-slate-500" />
          <p className="text-xl">Trip not found</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white">

      {/* ANIMATED GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/15 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-600/15 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-700/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">

        {/* =================== HERO SECTION =================== */}
        <div className="relative h-[650px] overflow-hidden group">
          {mounted && (
            <Swiper
              modules={[Navigation, Pagination, EffectFade]}
              effect="fade"
              navigation={{
                nextEl: ".swiper-button-next-hero",
                prevEl: ".swiper-button-prev-hero",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-hero"
              }}
              className="w-full h-full"
            >
              <SwiperSlide>
                <div className="relative w-full h-[650px]">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
              </SwiperSlide>
            </Swiper>
          )}

          {/* Custom Pagination */}
          <div className="swiper-pagination-hero absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10" />

          {/* Navigation Arrows */}
          <button className="swiper-button-prev-hero absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition text-white hover:scale-110">
            ←
          </button>
          <button className="swiper-button-next-hero absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition text-white hover:scale-110">
            →
          </button>

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="absolute top-19 left-9 z-30 inline-flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-blue-300 hover:text-blue-200 rounded-full transition group"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back</span>
          </button>

          {/* Action Buttons */}
          <div className="absolute top-19 right-9 z-30 flex gap-3">
            <button className="p-3 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white rounded-full transition hover:scale-110 hover:text-blue-400">
              <Heart size={20} />
            </button>
            <button className="p-3 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white rounded-full transition hover:scale-110 hover:text-blue-400">
              <Share2 size={20} />
            </button>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 text-white p-8 z-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {trip.category || "Premium"}
                </span>
                <span className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {trip.type || "Experience"}
                </span>
              </div>
              <h1 className="text-6xl font-bold mb-4 leading-tight">
                {trip.title}
              </h1>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Star size={20} className="fill-blue-400 text-blue-400" />
                  <span className="font-semibold text-lg">4.9</span>
                  <span className="text-slate-300">(284 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users size={18} />
                  <span>2,340+ Travelers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================== MAIN CONTENT =================== */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-8">

              {/* Quick Facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <QuickFact icon={Clock} label="Duration" value={trip.days} />
                <QuickFact icon={MapPin} label="Category" value={trip.category} />
                <QuickFact icon={Compass} label="Type" value={trip.type} />
                <QuickFact icon={Zap} label="Experience" value="Expert" />
              </div>

              {/* Trip Overview */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] border border-blue-800/30 rounded-2xl p-8 shadow-xl hover:border-blue-700/50 transition">
                <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                  <MapPin size={28} />
                  Trip Overview
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {trip.title} is a premium travel experience crafted for explorers and adventurers looking for unforgettable journeys. This exclusive trip combines luxury, adventure, and authentic cultural experiences to create memories that last a lifetime.
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-700/40 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Star className="text-blue-400" size={28} />
                  Trip Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Stunning landscapes & photography spots",
                    "Luxury accommodations & fine dining",
                    "Expert local guides & curated experiences",
                    "Exclusive access to premium attractions",
                    "Small group experience (max 12 people)",
                    "Hassle-free travel with full support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] border border-blue-800/30 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="text-blue-400" size={28} />
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <IncludedItem icon={Camera} title="Photography Tours" desc="Guided photo sessions at iconic spots" />
                  <IncludedItem icon={Users} title="Expert Guides" desc="Professional & experienced tour guides" />
                  <IncludedItem icon={Shield} title="Travel Insurance" desc="Comprehensive coverage included" />
                  <IncludedItem icon={MessageCircle} title="24/7 Support" desc="Round-the-clock customer support" />
                </div>
              </div>

              {/* Premium Accommodations */}
              <div className="bg-gradient-to-br from-[#111827] to-blue-950/30 border border-blue-700/40 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="text-emerald-400" size={28} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Premium Accommodations
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-600/40 hover:bg-white/10 transition">
                    <h3 className="font-bold text-emerald-300 mb-2 text-lg">5-Star Luxury Hotels</h3>
                    <p className="text-slate-400 text-sm">World-class amenities, spa facilities, premium dining, and breathtaking views. Hand-picked properties with impeccable service.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-600/40 hover:bg-white/10 transition">
                    <h3 className="font-bold text-emerald-300 mb-2 text-lg">Exclusive Private Villas</h3>
                    <p className="text-slate-400 text-sm">Luxury private villas with infinity pools, private gardens, personal butler service, and state-of-the-art facilities.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-600/40 hover:bg-white/10 transition">
                    <h3 className="font-bold text-emerald-300 mb-2 text-lg">Fine Dining Restaurants</h3>
                    <p className="text-slate-400 text-sm">Michelin-star chefs, authentic local cuisine, international dishes, and curated wine selections. All meals included in package.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-600/40 hover:bg-white/10 transition">
                    <h3 className="font-bold text-emerald-300 mb-2 text-lg">All-Inclusive Amenities</h3>
                    <p className="text-slate-400 text-sm">Room service, housekeeping, concierge, fitness center, swimming pool, jacuzzi, wellness spa, and 24/7 entertainment options.</p>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] border border-amber-800/30 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Clock className="text-blue-400" size={28} />
                  Itinerary
                </h2>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((day) => (
                    <div key={day} className="flex gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                          {day}
                        </div>
                        {day < 4 && <div className="w-1 h-16 bg-gradient-to-b from-amber-600 to-transparent mt-2" />}
                      </div>
                      <div className="pt-1">
                        <h3 className="font-bold text-lg text-amber-300 mb-2">
                          Day {day}: {day === 1 ? "Arrival & Welcome" : day === 2 ? "Exploration" : day === 3 ? "Adventure" : "Departure"}
                        </h3>
                        <p className="text-slate-400">
                          {day === 1 ? "Arrive at your destination, meet your guide, and enjoy a welcome dinner with panoramic views."
                          : day === 2 ? "Explore local attractions, visit cultural sites, and experience authentic cuisine."
                          : day === 3 ? "Adventure activities, thrilling experiences, and unforgettable moments with fellow travelers."
                          : "Final morning exploration, exchange contacts, and depart with lasting memories."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 bg-gradient-to-br from-[#111827] to-[#020617] border border-amber-800/30 rounded-2xl shadow-2xl p-8 space-y-6">

                {/* Price Section */}
                <div>
                  <p className="text-sm text-slate-400 font-semibold mb-2 uppercase tracking-wider">
                    Starting From
                  </p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {trip.price}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Per Person • All Inclusive</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-5">
                  <style>{`
                    @keyframes glowSweep {
                      from { transform: translateX(-100%); }
                      to { transform: translateX(100%); }
                    }
                    .glow-sweep:active .glow-bar {
                      animation: glowSweep 0.5s ease-out;
                    }
                  `}</style>
                  
                  <Link href="/book-trip" className="glow-sweep relative w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg text-center transition hover:scale-105 active:scale-95 shadow-lg overflow-hidden cursor-pointer block">
                    <span className="relative z-10">Book Trip Now</span>
                    <span className="glow-bar absolute inset-0 bg-white/40 pointer-events-none" />
                  </Link>

                  <Link href="/get-quote" className="glow-sweep relative w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-center transition hover:scale-105 active:scale-95 shadow-lg overflow-hidden cursor-pointer block">
                    <span className="relative z-10">Get Free Quote</span>
                    <span className="glow-bar absolute inset-0 bg-white/40 pointer-events-none" />
                  </Link>
                </div>

                {/* Features */}
                <div className="space-y-4 pt-6 border-t border-amber-800/30">
                  <Feature icon="✓" text="Best Price Guarantee" />
                  <Feature icon="✓" text="Flexible Dates" />
                  <Feature icon="✓" text="Group Discounts" />
                  <Feature icon="✓" text="Free Cancellation" />
                  <Feature icon="✓" text="Expert Travel Advisors" />
                  <Feature icon="✓" text="24/7 Customer Care" />
                </div>

                {/* Contact */}
                <div className="pt-6 border-t border-amber-800/30 text-center">
                  <p className="text-sm text-slate-500 mb-3">Questions? Contact us</p>
                  <a href="tel:+1800900" className="text-xl font-bold text-amber-400 hover:text-amber-300 transition">
                    +1-800-TRIPS-NOW
                  </a>
                  <p className="text-xs text-slate-500 mt-2">Available 24/7</p>
                </div>

                {/* Trusted Badge */}
                <div className="bg-amber-500/10 border border-amber-700/40 rounded-xl p-4 text-center">
                  <p className="text-xs text-amber-300 font-semibold mb-2">TRUSTED BY</p>
                  <p className="text-sm font-bold text-slate-300">50,000+ Happy Travelers</p>
                </div>

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
    <div className="bg-gradient-to-br from-[#111827] to-[#020617] border border-amber-800/30 rounded-xl p-4 text-center shadow-lg hover:border-amber-700/50 transition group">
      <Icon className="mx-auto text-amber-400 mb-3 group-hover:scale-110 transition" size={24} />
      <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
        {label}
      </p>
      <p className="font-bold text-amber-300 mt-2 text-lg">
        {value}
      </p>
    </div>
  );
}

function IncludedItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <Icon className="text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition" size={24} />
      <div>
        <h3 className="font-bold text-slate-200 group-hover:text-amber-300 transition">{title}</h3>
        <p className="text-slate-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-slate-300 hover:text-amber-300 transition">
      <span className="text-amber-400 font-bold">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}