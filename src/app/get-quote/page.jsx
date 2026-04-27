"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  Shield,
  Sparkles,
  MapPin,
  Star,
  Globe,
  Trophy,
  Phone,
  CheckCircle,
  Calendar,
  Users,
  DollarSign,
  MessageCircle
} from "lucide-react";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    duration: "",
    numberOfTravelers: "",
    budget: "",
    specialRequests: "",
    preferredContact: "email"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        destination: "",
        travelDate: "",
        duration: "",
        numberOfTravelers: "",
        budget: "",
        specialRequests: "",
        preferredContact: "email"
      });
    }, 3000);
  };

  const destinations = [
    "Himalayan Adventure",
    "Winter Getaway",
    "Kashmir Trek",
    "Manali & Rohtang",
    "Spiti Valley",
    "Northeast Expedition",
    "Rajasthan Royal",
    "Goa Beach Retreat"
  ];

  const durations = [
    "2-3 Days",
    "4-5 Days",
    "6-7 Days",
    "8-10 Days",
    "10+ Days"
  ];

  const budgets = [
    "Below $500",
    "$500 - $1000",
    "$1000 - $2000",
    "$2000 - $5000",
    "$5000+"
  ];

  return (
    <div className="min-h-screen text-slate-100 relative overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <main className="relative z-10 w-full py-16">
        <section className="max-w-7xl mx-auto px-6">

          {/* BACK TO HOME BUTTON */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 hover:from-blue-600 hover:to-cyan-600 border border-blue-500/50 text-white rounded-full font-semibold transition transform hover:scale-105 backdrop-blur-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* HERO HEADER - CENTER ALIGNED */}
          <div className="flex flex-col items-center gap-6 mb-16 text-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Globe className="text-white" size={32} />
            </div>
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Travel<span className="text-blue-400">Hub</span>
            </span>

            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold backdrop-blur-md">
              <Sparkles size={14} />
              Premium Travel Planning Service
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
              Get Your <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Perfect Quote</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Share your travel dreams with us, and our expert advisors will create a personalized itinerary tailored just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">

            {/* FORM SECTION */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-600/30 to-teal-600/20 backdrop-blur-xl border border-emerald-500/30 shadow-2xl text-center">
                  <CheckCircle size={64} className="mx-auto text-emerald-400 mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">Quote Request Submitted!</h2>
                  <p className="text-slate-300 mb-6">
                    Thank you! Our travel experts will contact you within 24 hours with a personalized quote.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-2xl font-semibold transition transform hover:scale-105 shadow-lg"
                  >
                    Back to Home
                    <Send size={20} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-2xl space-y-6">

                  <h2 className="text-2xl font-bold text-white mb-8">Tell Us About Your Journey</h2>

                  {/* NAME & EMAIL */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition"
                      />
                    </div>
                  </div>

                  {/* PHONE & CONTACT */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1-800-TRAVEL"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Preferred Contact *</label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition appearance-none cursor-pointer"
                      >
                        <option value="email" className="bg-slate-900">Email</option>
                        <option value="phone" className="bg-slate-900">Phone</option>
                        <option value="both" className="bg-slate-900">Both</option>
                      </select>
                    </div>
                  </div>

                  {/* DESTINATION & DATE */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Destination *</label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">Select a destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest} className="bg-slate-900">{dest}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Preferred Travel Date *</label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition"
                      />
                    </div>
                  </div>

                  {/* DURATION & TRAVELERS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Trip Duration *</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">Select duration</option>
                        {durations.map((dur) => (
                          <option key={dur} value={dur} className="bg-slate-900">{dur}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Number of Travelers *</label>
                      <input
                        type="number"
                        name="numberOfTravelers"
                        value={formData.numberOfTravelers}
                        onChange={handleChange}
                        required
                        min="1"
                        max="50"
                        placeholder="2"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition"
                      />
                    </div>
                  </div>

                  {/* BUDGET */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Budget Per Person *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-900">Select your budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget} className="bg-slate-900">{budget}</option>
                      ))}
                    </select>
                  </div>

                  {/* SPECIAL REQUESTS */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Special Requests & Preferences</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Any dietary restrictions, accessibility needs, specific activities, or special occasions? Let us know!"
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition resize-none"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 mt-8"
                  >
                    <Send size={20} />
                    Get Free Quote Now
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    We respect your privacy. Your information will only be used to send you a personalized quote.
                  </p>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">

              {/* TRUST CARD */}
              <div className="p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition duration-500">
                  <Shield size={80} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">Why Trust Us?</h3>
                <div className="space-y-6">
                  <FeatureItem 
                    icon={<Trophy className="text-blue-400" size={18} />}
                    title="Award Winning"
                    desc="Best Travel Agency 2024"
                  />
                  <FeatureItem 
                    icon={<Shield className="text-emerald-500" size={18} />}
                    title="Safe & Secure"
                    desc="Verified stays & 24/7 support"
                  />
                  <FeatureItem 
                    icon={<Star className="text-yellow-500" size={18} />}
                    title="Personalized"
                    desc="Unique itineraries for you"
                  />
                </div>
              </div>

              {/* TOP DESTINATIONS */}
              <div className="space-y-4 px-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Popular Destinations</h4>
                <DestinationCard 
                  name="Himalayas" 
                  tagline="Mountain Paradise"
                  img="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400"
                />
                <DestinationCard 
                  name="Kashmir" 
                  
                  tagline="Heaven On Earth"
                  img="https://www.gokitetours.com/wp-content/uploads/2024/12/Top-8-things-to-do-Kashmir-in-winters-for-an-Incredible-experience.webp"
                />
              </div>

              {/* QUICK CONTACT */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-600 shadow-2xl shadow-blue-600/20 flex flex-col items-center text-center gap-4 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Talk to an Expert</h4>
                  <p className="text-blue-100/80 text-xs">Our concierge is ready to help you.</p>
                </div>
                <a href="tel:+919876543210" className="w-full py-4 bg-white text-blue-600 rounded-2xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2">
                  +91 98765-connect
                </a>
              </div>

            </div>

          </div>
        </section>
      </main>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-center">
    <div className="w-10 h-10 rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-white text-sm">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);

const DestinationCard = ({ name, tagline, img }) => (
  <div className="group relative h-28 rounded-[1.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
    <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 opacity-60 group-hover:opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent group-hover:from-slate-900 transition-all"></div>
    <div className="absolute bottom-4 left-5">
      <h5 className="font-bold text-white group-hover:text-blue-300 transition">{name}</h5>
      <p className="text-[10px] text-slate-300 uppercase tracking-widest">{tagline}</p>
    </div>
    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
      <MapPin size={14} className="text-white" />
    </div>
  </div>
);