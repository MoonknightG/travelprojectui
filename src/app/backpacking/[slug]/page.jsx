"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { 
  MapPin,
  Compass,
  Clock,
  DollarSign,
  Users,
  Backpack,
  ArrowLeft,
  Heart,
  Share2,
  Star,
  Tent,
  TrendingUp,
  Globe,
  Camera
} from "lucide-react";
import { backpackingTrips } from "@/data/backpacking";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BackpackingDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const trip = backpackingTrips.find((t) => t.slug === slug);

  if (!trip) {
    return (
      <div className="py-24 text-center text-gray-500 text-lg">
        Backpacking trip not found
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
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </SwiperSlide>

          {trip.gallery?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[600px]">
                <Image
                  src={img}
                  alt={`${trip.title} ${idx + 1}`}
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
          onClick={() => router.back()}
          className="absolute top-20 left-6 z-30 flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back</span>
        </button>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 z-30 flex gap-3">
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
            <p className="text-sm font-semibold text-orange-300 mb-2 flex items-center gap-2">
              <Backpack size={16} /> Adventure Awaits
            </p>
            <h1 className="text-5xl font-bold mb-3">{trip.title}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{trip.rating || "4.8"}</span>
                <span className="text-white/70">({trip.reviews || "156"} reviews)</span>
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
              <QuickFact icon={Clock} label="Duration" value={trip.days} />
              <QuickFact icon={TrendingUp} label="Difficulty" value={trip.difficulty} />
              <QuickFact icon={Compass} label="Best Season" value={trip.season} />
              <QuickFact icon={Globe} label="Countries" value={trip.countries || "2-3"} />
            </div>

            {/* Trip Overview Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="text-orange-600" size={28} />
                Trip Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Embark on the unforgettable {trip.title} journey. This is a curated backpacking experience designed for travelers who crave authentic exploration, vibrant cultures, breathtaking landscapes, and connections with fellow adventurers. Every moment is crafted to create lasting memories and stories to tell.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <IncludedItem icon={Tent} title="Budget Stays" desc="Hostels, guesthouses & local hotels" />
                <IncludedItem icon={Users} title="Local Guides" desc="Expert travel guides & local experts" />
                <IncludedItem icon={MapPin} title="Activities" desc="City tours, hikes & cultural experiences" />
                <IncludedItem icon={Camera} title="Group Bonding" desc="Social events & group meals included" />
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
              <h2 className="text-2xl font-bold mb-4">Trip Highlights</h2>
              <ul className="space-y-3">
                {[
                  "Meet adventurers from around the world",
                  "Experience authentic local culture & cuisine",
                  "Hidden gems & off-the-beaten-path locations",
                  "Photography opportunities at every turn",
                  "Flexible itinerary with free time for exploration",
                  "Budget-friendly with all essentials covered"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div key={day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {day}
                      </div>
                      {day < 5 && <div className="w-0.5 h-12 bg-gray-300 mt-2" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        Day {day}: {day === 1 ? "Arrival & City Tour" : day === 2 ? "Exploration & Hiking" : day === 3 ? "Cultural Immersion" : day === 4 ? "Adventure Activities" : "Departure"}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {day === 1 ? "Meet your group, explore the city, enjoy welcome dinner with fellow travelers." 
                        : day === 2 ? "Hike through scenic trails, visit waterfalls, enjoy sunset views." 
                        : day === 3 ? "Visit local markets, cook with locals, experience authentic traditions." 
                        : day === 4 ? "Water sports, adventure activities, evening campfire & bonfire." 
                        : "Final day goodbyes, exchange contacts, carry memories forever."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Backpacking Trips?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <WhyItem title="Affordable" desc="Budget-friendly pricing without compromising on experience" />
                <WhyItem title="Safe & Secure" desc="Experienced guides and 24/7 support for your peace of mind" />
                <WhyItem title="Community" desc="Meet like-minded travelers and make lifelong friends" />
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">

              {/* Price */}
              <div className="mb-6">
                <p className="text-gray-500 text-sm font-medium mb-1">STARTING FROM</p>
                <p className="text-4xl font-bold text-gray-900">{trip.price}</p>
                <p className="text-gray-500 text-xs mt-1">per person (all-inclusive)</p>
              </div>

              {/* CTA Buttons */}
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
                <Feature icon="✔" text="Small Group (8-15 people)" />
                <Feature icon="✔" text="No Hidden Costs" />
                <Feature icon="✔" text="Flexible Cancellation" />
                <Feature icon="✔" text="Travel Insurance" />
                <Feature icon="✔" text="24/7 Emergency Support" />
                <Feature icon="✔" text="Meet New Friends" />
              </div>

              {/* Contact */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm mb-2">Questions?</p>
                <p className="font-bold text-orange-600">+1-800-BACKPACK</p>
                <p className="text-gray-500 text-xs mt-1">24/7 Support</p>
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
      <Icon className="mx-auto text-orange-600 mb-2" size={24} />
      <p className="text-xs text-gray-500 font-semibold">{label}</p>
      <p className="font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function IncludedItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <Icon className="text-orange-600 flex-shrink-0 mt-1" size={24} />
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function WhyItem({ title, desc }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <Star className="text-orange-600" size={24} />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
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