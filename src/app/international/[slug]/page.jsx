import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Heart,
  Share2,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Shield,
  MessageCircle,
  Zap,
  Plane,
  Hotel,
  Camera,
  Utensils,
  MapPinCheck,
  Clock,
  CreditCard,
  CheckCircle,
  FileText,
  Briefcase,
  Phone,
  Mail
} from "lucide-react";
import { internationalPackages } from "@/data/international";

export default async function InternationalDetailPage({ params }) {
  const { slug } = await params;

  const pkg = internationalPackages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Package Not Found</h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Back to Home
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
          <Link href="/international" className="hover:text-cyan-400 transition">International</Link>
          <span>/</span>
          <span className="text-cyan-300">{pkg.title}</span>
        </div>

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition mb-8 group"
        >
          <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition" />
          Back to International
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* HERO IMAGE */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] group border border-white/10">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              
              {/* BADGES */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full backdrop-blur-md">
                <Globe size={14} className="text-blue-400" />
                <p className="text-xs font-semibold text-blue-300">International Destination</p>
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
                {pkg.title} Tour Package
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star size={20} className="fill-amber-400 text-amber-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-slate-400">(1,250+ reviews)</span>
                </div>
              </div>

              <p className="text-slate-300 text-lg">
                International Travel • <span className="text-cyan-300 font-semibold">{pkg.packages}+ Packages Available</span>
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <InfoCard label="Destination" value={pkg.title} icon={MapPin} />
              <InfoCard label="Packages" value={`${pkg.packages}+`} icon={Briefcase} />
              <InfoCard label="Starting From" value={pkg.price} icon={DollarSign} />
              <InfoCard label="Travel Type" value="International" icon={Globe} />
            </div>

            {/* OVERVIEW */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe className="text-blue-400" size={28} />
                About {pkg.title}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Experience the wonders of {pkg.title} with our premium international tour packages. Enjoy world-class accommodations, guided sightseeing at iconic landmarks, authentic cuisine experiences, and seamless travel planning with 24/7 expert support throughout your journey.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose This Package</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "USA Visa Assistance & Guidance",
                  "Luxury 4-5 Star Hotels",
                  "Premium Car Transfers",
                  "Professional English-Speaking Guides",
                  "Authentic Local Experiences",
                  "Travel Insurance Included"
                ].map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PACKAGE INCLUSIONS */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Zap className="text-amber-400" size={28} />
                What's Included in Your Package
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* FLIGHT */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl border border-indigo-400/50 hover:from-indigo-500/30 hover:to-blue-500/30 transition group shadow-lg shadow-indigo-500/10">
                  <Plane className="text-indigo-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-indigo-300 transition">International Flights</h3>
                    <p className="text-sm text-slate-300 mt-1">Round-trip flights with reputable airlines</p>
                  </div>
                </div>

                {/* HOTEL */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-400/50 hover:from-emerald-500/30 hover:to-teal-500/30 transition group shadow-lg shadow-emerald-500/10">
                  <Hotel className="text-emerald-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-emerald-300 transition">Premium Accommodation</h3>
                    <p className="text-sm text-slate-300 mt-1">4-5 star luxury hotels with amenities</p>
                  </div>
                </div>

                {/* MEALS */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-400/50 hover:from-orange-500/30 hover:to-red-500/30 transition group shadow-lg shadow-orange-500/10">
                  <Utensils className="text-orange-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-orange-300 transition">Meals & Dining</h3>
                    <p className="text-sm text-slate-300 mt-1">Breakfast daily & select dinners included</p>
                  </div>
                </div>

                {/* SIGHTSEEING */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl border border-pink-400/50 hover:from-pink-500/30 hover:to-rose-500/30 transition group shadow-lg shadow-pink-500/10">
                  <Camera className="text-pink-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-pink-300 transition">Guided Sightseeing</h3>
                    <p className="text-sm text-slate-300 mt-1">Professional guides at all major attractions</p>
                  </div>
                </div>

                {/* VISA ASSISTANCE */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl border border-purple-400/50 hover:from-purple-500/30 hover:to-violet-500/30 transition group shadow-lg shadow-purple-500/10">
                  <FileText className="text-purple-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-purple-300 transition">Visa Assistance</h3>
                    <p className="text-sm text-slate-300 mt-1">Complete visa documentation support</p>
                  </div>
                </div>

                {/* TRANSFERS */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-cyan-500/20 to-sky-500/20 rounded-xl border border-cyan-400/50 hover:from-cyan-500/30 hover:to-sky-500/30 transition group shadow-lg shadow-cyan-500/10">
                  <MapPinCheck className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-cyan-300 transition">Airport Transfers</h3>
                    <p className="text-sm text-slate-300 mt-1">Luxury car pickups & drop-offs included</p>
                  </div>
                </div>

                {/* TRAVEL INSURANCE */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-xl border border-red-400/50 hover:from-red-500/30 hover:to-amber-500/30 transition group shadow-lg shadow-red-500/10">
                  <Shield className="text-red-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-red-300 transition">Travel Insurance</h3>
                    <p className="text-sm text-slate-300 mt-1">Comprehensive international coverage</p>
                  </div>
                </div>

                {/* 24/7 SUPPORT */}
                <div className="flex gap-4 p-6 bg-gradient-to-br from-lime-500/20 to-green-500/20 rounded-xl border border-lime-400/50 hover:from-lime-500/30 hover:to-green-500/30 transition group shadow-lg shadow-lime-500/10">
                  <MessageCircle className="text-lime-400 flex-shrink-0 group-hover:scale-110 transition" size={28} />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-lime-300 transition">24/7 Support</h3>
                    <p className="text-sm text-slate-300 mt-1">Round-the-clock international assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOUR DURATION & ITINERARY */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="text-blue-400" size={28} />
                Tour Duration & Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Calendar className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Flexible Duration</h3>
                    <p className="text-slate-300 mt-1">Available from 5 to 14 days - customize your trip length</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Small Group Tours</h3>
                    <p className="text-slate-300 mt-1">Limited group sizes (8-15 people) for personalized experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Certified Guides</h3>
                    <p className="text-slate-300 mt-1">Award-winning guides with extensive destination knowledge</p>
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
                  {pkg.price}
                </p>
                <p className="text-xs text-slate-500 mt-2">Per Person • All Inclusive</p>
              </div>

              {/* CTA BUTTONS */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2">
                <span>Book Now</span>
                <ArrowRight size={20} />
              </button>

              <button className="w-full border-2 border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 px-6 py-3 rounded-2xl font-semibold transition bg-blue-500/5 hover:bg-blue-500/10">
                Get Free Quote
              </button>

              {/* QUICK INFO */}
              <div className="space-y-4 pt-6 border-t border-blue-500/30">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">Visa Assistance Included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">Handpicked Hotels</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">Sightseeing Included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">24/7 International Support</span>
                </div>
              </div>

              {/* PAYMENT INFO */}
              <div className="pt-6 border-t border-blue-500/30 bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard size={18} className="text-amber-400" />
                  <p className="text-sm font-semibold text-white">Easy Payment Options</p>
                </div>
                <p className="text-xs text-slate-400">Installment plans available. 0% EMI options offered</p>
              </div>

              {/* CONTACT */}
              <div className="pt-6 border-t border-blue-500/30 space-y-3">
                <p className="text-sm text-slate-400 font-semibold">Contact Us</p>
                
                <a href="tel:+18005555555" className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition">
                  <Phone size={18} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Call Us</p>
                    <p className="text-sm font-semibold text-white">+1-800-TRAVEL-1</p>
                  </div>
                </a>

                <a href="mailto:bookings@travelcompany.com" className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition">
                  <Mail size={18} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-sm font-semibold text-white">bookings@travel.com</p>
                  </div>
                </a>
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