"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  Sparkles,
  TrendingUp
} from "lucide-react";

const smallBlogs = [
  {
    title: "Why JustWravel Is the Perfect Choice for Your All-Girls Trip | Safe & Fun Group Travel",
    image: "/blogs/blog1.jpg",
    date: "30 Jul",
    readTime: 6,
    category: "Travel Tips",
  },
  {
    title: "JustWravel Celebrates 8 Years with Economic Times' Best Adventure Tour Operator Award",
    image: "/blogs/blog2.jpg",
    date: "10 Dec",
    readTime: 5,
    category: "News",
  },
  {
    title: "Book Now Pay Later with JustWravel | Travel Now, Pay in EMIs",
    image: "/blogs/blog3.jpg",
    date: "25 Jun",
    readTime: 5,
    category: "Offers",
  },
];

const featuredBlog = {
  title: "Best Winter Treks in India You Must Try in 2025-26",
  image: "/blogs/featured.jpg",
  date: "8 Oct",
  readTime: 11,
  category: "Adventure",
  description: "Pack your thermals folks — winter's here, and the Himalayas are calling louder than ever! Explore the best winter treks in India with expert guides and unforgettable experiences.",
};

export default function BlogsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white overflow-hidden py-7">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
            <BookOpen size={16} className="text-blue-400" />
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest">
              Stories & Insights
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Travel <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover insider tips, adventure stories, and travel inspiration from our community of wanderers
          </p>
        </div>

        {/* BLOGS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* LEFT: SMALL BLOGS */}
          <div className="lg:col-span-1 space-y-6">
            {smallBlogs.map((blog, i) => (
              <BlogSmallCard key={i} {...blog} index={i} />
            ))}
          </div>

          {/* RIGHT: FEATURED BLOG */}
          <div className="lg:col-span-2">
            <BlogFeaturedCard {...featuredBlog} />
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 mx-auto">
            <span>Explore All Stories</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </section>
  );
}

/* ========== SMALL BLOG CARD ========== */
function BlogSmallCard({ title, image, date, readTime, category, index }) {
  return (
    <article
      className="group bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400/60 transition hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-purple-600/30 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-4 p-4">
        
        {/* IMAGE */}
        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          
          {/* CATEGORY & META */}
          <div className="space-y-2">
            <span className="inline-block px-2 py-1 bg-blue-600/30 text-blue-300 text-xs font-semibold rounded">
              {category}
            </span>
            <h3 className="font-semibold text-sm text-white line-clamp-2 group-hover:text-blue-300 transition">
              {title}
            </h3>
          </div>

          {/* DATE & READ TIME */}
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime} min</span>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}

/* ========== FEATURED BLOG CARD ========== */
function BlogFeaturedCard({ title, image, date, readTime, category, description }) {
  return (
    <article className="group h-full bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-blue-500/40 rounded-3xl overflow-hidden hover:border-blue-400/80 transition cursor-pointer">
      
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* FEATURED BADGE */}
        <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-blue-600/50 border border-blue-400/50 rounded-full backdrop-blur-md">
          <TrendingUp size={16} className="text-blue-300" />
          <span className="text-sm font-bold text-blue-300">Featured</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8 space-y-4">
        
        {/* CATEGORY & META */}
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-blue-600/40 text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider">
            {category}
          </span>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              {readTime} min read
            </div>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition leading-tight">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-300 text-base leading-relaxed">
          {description}
        </p>

        {/* CTA BUTTON */}
        <div className="pt-4">
          <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition transform hover:scale-105 active:scale-95">
            <span>Read Story</span>
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition" />
          </button>
        </div>

      </div>

    </article>
  );
}