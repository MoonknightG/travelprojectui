"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import Link from "next/link";


const faqs = [
  {
    q: "What does JustWravel Mean?",
    a: "JustWravel is a social travel community that focuses on curated group trips, meaningful experiences and safe adventures. We believe travel is not just about destinations, it's about the people you meet and memories you create together.",
    icon: MessageCircle
  },
  {
    q: "Who are the Travelers of JustWravel?",
    a: "Our travelers are solo travelers, backpackers, working professionals, students and adventure enthusiasts from across India. We welcome everyone from first-time travelers to seasoned explorers who share our passion for adventure.",
    icon: HelpCircle
  },
  {
    q: "What are the Destinations that JustWravel covers?",
    a: "We cover domestic and international destinations including Himalayas, Northeast India, Europe, Southeast Asia, Middle East and more. With 50+ destinations and counting, we're always exploring new places.",
    icon: HelpCircle
  },
  {
    q: "How experienced are JustWravel's Trip Captains?",
    a: "All our trip captains are professionally trained, experienced and certified to ensure safety and smooth experiences. They undergo rigorous training and have an average experience of 8+ years in the travel industry.",
    icon: HelpCircle
  },
  {
    q: "What safety measures do you have in place?",
    a: "We prioritize safety with comprehensive travel insurance, experienced guides, emergency protocols, 24/7 support, and regular safety briefings. Your safety is our top priority.",
    icon: HelpCircle
  },
  {
    q: "Can I customize my trip itinerary?",
    a: "Absolutely! We offer 100% customizable itineraries tailored to your preferences, budget, and interests. Our travel experts work with you to create your perfect journey.",
    icon: HelpCircle
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white overflow-hidden py-5">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-9">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-6">
            <Sparkles size={16} className="text-cyan-400" />
            <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">
              Questions?
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Find answers to common questions about our travel experiences, safety measures, and booking process
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-4 mb-12">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-md text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our travel experts are here to help! Reach out to us anytime and we'll be happy to answer all your questions.
          </p>
          <button className="group inline-flex items-center gap-2 px-7 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl font-bold transition transform hover:scale-105 active:scale-95 shadow-lg">
            <Link href="/contact">
            <span>Contact Us Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </Link>
          </button>
        </div>

      </div>
    </section>
  );
}

/* ========== FAQ ITEM ========== */
function FaqItem({ item, index, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group bg-gradient-to-br border rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
        isOpen
          ? "border-cyan-400/60 bg-gradient-to-br from-cyan-600/30 to-blue-600/20"
          : "border-cyan-500/20 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 hover:border-cyan-500/40 hover:from-cyan-600/20 hover:to-blue-600/15"
      }`}
    >
      {/* HEADER */}
      <div className="px-6 md:px-8 py-5 flex justify-between items-start gap-4">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition ${
            isOpen
              ? "bg-cyan-600/50 text-cyan-200"
              : "bg-cyan-600/20 text-cyan-300 group-hover:bg-cyan-600/40"
          }`}>
            <HelpCircle size={20} />
          </div>
          <h3 className={`font-bold text-base md:text-lg leading-tight transition ${
            isOpen ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
          }`}>
            {item.q}
          </h3>
        </div>

        <ChevronDown
          className={`flex-shrink-0 text-cyan-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={22}
        />
      </div>

      {/* ANSWER - ANIMATED */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 md:px-8 pb-6 pt-0 border-t border-cyan-500/20">
          <p className="text-slate-300 leading-relaxed text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}