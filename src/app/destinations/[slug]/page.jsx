import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Heart,
  Share2,
  ArrowRight,
  Sparkles,
  Award,
  Camera,
  Users,
  Shield,
  MessageCircle,
  Zap,
  Wifi,
  UtensilsCrossed,
  Home,
  Car
} from "lucide-react";
import { destinations } from "@/data/destination";

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;

  const destination = destinations.find(
    (d) => d.slug === slug
  );

  if (!destination) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Destination Not Found</h1>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Back to Destinations
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden py-12">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600/10 blur-3xl rounded-full" />
      </div>

      {/* STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-12">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <span>/</span>
          <Link href="/destinations" className="hover:text-cyan-400 transition">destinations</Link>
          <span>/</span>
          <span className="text-cyan-300">{destination.title}</span>
        </div>

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition mb-12 group"
        >
          <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* HERO IMAGE */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] group border border-white/10">
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              
              {/* BADGES */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full backdrop-blur-md">
                <Sparkles size={14} className="text-blue-400" />
                <p className="text-xs font-semibold text-blue-300">Popular Destination</p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="absolute top-6 right-6 flex gap-3">
                <button className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition hover:scale-110">
                  <Heart size={20} />
                </button>
                <button className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full transition hover:scale-110">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* TITLE & INFO */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-white">
                {destination.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star size={20} className="fill-amber-400 text-amber-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-slate-400">(342 reviews)</span>
                </div>
              </div>

              <p className="text-slate-300 text-lg">
                {destination.type} • Best time: <span className="text-cyan-300 font-semibold">{destination.bestTime}</span>
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <InfoCard label="Packages" value={`${destination.packages}+`} icon={MapPin} />
              <InfoCard label="Starting From" value={destination.price} icon={DollarSign} />
              <InfoCard label="Best Time" value={destination.bestTime} icon={Calendar} />
              <InfoCard label="Category" value={destination.type} icon={Award} />
            </div>

            {/* OVERVIEW */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MapPin className="text-blue-400" size={28} />
                About {destination.title}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {destination.title} is one of the most popular travel destinations, offering unforgettable experiences, scenic beauty, and curated travel packages suitable for all kinds of travelers. Discover the magic of this destination with our handpicked itineraries.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Visit</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Iconic landmarks & monuments",
                  "Local cuisine & dining",
                  "Cultural heritage sites",
                  "Shopping & entertainment",
                  "Natural beauty & parks",
                  "Photography opportunities"
                ].map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                    <span className="text-slate-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT'S INCLUDED - ENHANCED */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Zap className="text-amber-400" size={28} />
                What's Included
              </h2>
              
              {/* Original 4 items + New 4 items */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* PHOTOGRAPHY TOURS */}
                <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-amber-500/30 hover:bg-white/10 transition group">
                  <Camera className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-amber-300 transition">Photography Tours</h3>
                    <p className="text-sm text-slate-400 mt-1">Guided photo sessions at iconic spots</p>
                  </div>
                </div>

                {/* EXPERT GUIDES */}
                <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-amber-500/30 hover:bg-white/10 transition group">
                  <Users className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-amber-300 transition">Expert Guides</h3>
                    <p className="text-sm text-slate-400 mt-1">Professional & experienced tour guides</p>
                  </div>
                </div>

                {/* TRAVEL INSURANCE */}
                <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-amber-500/30 hover:bg-white/10 transition group">
                  <Shield className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-amber-300 transition">Travel Insurance</h3>
                    <p className="text-sm text-slate-400 mt-1">Comprehensive coverage included</p>
                  </div>
                </div>

                {/* 24/7 SUPPORT */}
                <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-amber-500/30 hover:bg-white/10 transition group">
                  <MessageCircle className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-amber-300 transition">24/7 Support</h3>
                    <p className="text-sm text-slate-400 mt-1">Round-the-clock customer support</p>
                  </div>
                </div>

                {/* PREMIUM ACCOMMODATION */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-400/50 hover:from-emerald-500/30 hover:to-teal-500/30 transition group shadow-lg shadow-emerald-500/10">
                  <Home className="text-emerald-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-emerald-300 transition">Premium Accommodation</h3>
                    <p className="text-sm text-slate-300 mt-1">5-star hotels & resorts with luxury amenities</p>
                  </div>
                </div>

                {/* HIGH-SPEED WiFi */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/50 hover:from-cyan-500/30 hover:to-blue-500/30 transition group shadow-lg shadow-cyan-500/10">
                  <Wifi className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-cyan-300 transition">High-Speed WiFi</h3>
                    <p className="text-sm text-slate-300 mt-1">Seamless connectivity at all accommodations</p>
                  </div>
                </div>

                {/* ALL MEALS INCLUDED */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-400/50 hover:from-orange-500/30 hover:to-red-500/30 transition group shadow-lg shadow-orange-500/10">
                  <UtensilsCrossed className="text-orange-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-orange-300 transition">All Meals Included</h3>
                    <p className="text-sm text-slate-300 mt-1">Breakfast, lunch & dinner included daily</p>
                  </div>
                </div>

                {/* TRANSPORT & TRANSFERS */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/50 hover:from-purple-500/30 hover:to-pink-500/30 transition group shadow-lg shadow-purple-500/10">
                  <Car className="text-purple-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-purple-300 transition">Transport & Transfers</h3>
                    <p className="text-sm text-slate-300 mt-1">Airport & trek-end transfers included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-gradient-to-br from-blue-600/30 to-purple-600/20 border border-blue-500/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 space-y-6">

              {/* PRICE */}
              <div>
                <p className="text-sm text-slate-400 font-semibold mb-2 uppercase tracking-wider">Starting From</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {destination.price}
                </p>
                <p className="text-xs text-slate-500 mt-2">Per Person • All Inclusive</p>
              </div>

              {/* CTA BUTTONS */}
              <div className="space-y-4">
                <style>{`
                  @keyframes glowSweep {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100%); }
                  }
                  .glow-sweep:active .glow-bar {
                    animation: glowSweep 0.5s ease-out;
                  }
                `}</style>

                <Link href="/book-trip" className="glow-sweep relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 overflow-hidden block">
                  <span className="relative z-10">View Packages</span>
                  <ArrowRight size={20} className="relative z-10" />
                  <span className="glow-bar absolute inset-0 bg-white/40 pointer-events-none" />
                </Link>

                <Link href="/get-quote" className="glow-sweep relative w-full border-2 border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 px-6 py-3 rounded-2xl font-semibold transition bg-blue-500/5 hover:bg-blue-500/10 overflow-hidden block">
                  <span className="relative z-10">Get Free Quote</span>
                  <span className="glow-bar absolute inset-0 bg-white/40 pointer-events-none" />
                </Link>
              </div>

              {/* FEATURES */}
              <div className="space-y-4 pt-6 border-t border-blue-500/30">
                <Feature icon="✓" text="Handpicked Packages" />
                <Feature icon="✓" text="Trusted Local Partners" />
                <Feature icon="✓" text="Flexible Itineraries" />
                <Feature icon="✓" text="24/7 Travel Support" />
              </div>

              {/* CONTACT */}
              <div className="pt-6 border-t border-blue-500/30 text-center">
                <p className="text-sm text-slate-400 mb-3">Need Help?</p>
                <a href="tel:+1800" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition">
                  +1-800-TRAVEL
                </a>
                <p className="text-xs text-slate-500 mt-2">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle var(--animation-duration, 3s) infinite;
        }
      `}</style>
    </section>
  );
}

function InfoCard({ label, value, icon: Icon }) {
  return (
    <div className="bg-white/10 rounded-xl p-4 shadow-md hover:shadow-lg border border-white/10 transition transform hover:scale-105 text-center group">
      <Icon className="mx-auto text-blue-400 mb-2 group-hover:scale-110 transition" size={24} />
      <p className="text-xs text-slate-400 font-semibold">{label}</p>
      <p className="font-bold text-white mt-1">{value}</p>
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <span className="text-green-400 font-bold">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}