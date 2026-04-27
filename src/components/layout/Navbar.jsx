"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openJourneys, setOpenJourneys] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const journeysRef = useRef(null);
  const profileRef = useRef(null);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (journeysRef.current && !journeysRef.current.contains(e.target)) {
        setOpenJourneys(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-lg" : "bg-transparent"}
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-rose-400"
          >
            TravelUI
          </Link>

          {/* ================= DESKTOP LINKS ================= */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white">

            <div className="relative" ref={journeysRef}>
              <button
                onClick={() => setOpenJourneys((p) => !p)}
                className="relative"
              >
                Journeys
              </button>

              {openJourneys && (
                <div className="absolute left-1/2 top-full mt-5 -translate-x-1/2 w-80 rounded-2xl bg-white shadow-2xl px-6 py-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li><Link href="/journeys?category=himalayan">Himalayan Treks</Link></li>
                    <li><Link href="/journeys?category=winter">Winter Trips</Link></li>
                    <li><Link href="/journeys?category=weekend">Weekend Getaways</Link></li>
                    <li><Link href="/journeys?category=international">International Trips</Link></li>
                    <li className="pt-4 border-t">
                      <Link href="/journeys" className="font-semibold">
                        View All Journeys →
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/backpack">Backpack</Link>
            <Link href="/biking">Biking</Link>
            <Link href="/about">About</Link>
          </div>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-3">

            {/* LOGIN */}
            <Link
              href="/login"
              className="px-4 py-2 rounded-full text-sm font-semibold bg-white text-black"
            >
              Login
            </Link>

            {/* PROFILE */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setOpenProfile((p) => !p)}
                className="w-9 h-9 rounded-full bg-black text-amber-300 flex items-center justify-center"
              >
                👤
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-4 w-56 rounded-2xl bg-white shadow-3xl overflow-hidden">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="/profile" className="block px-5 py-2">My Profile</Link></li>
                    <li><Link href="/bookings" className="block px-5 py-2">My Bookings</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* 🔥 MOBILE HAMBURGER */}
            <button
              onClick={() => setOpenMobile(true)}
              className="md:hidden w-9 h-9 rounded-full bg-black text-amber-300 flex items-center justify-center"
            >
              <Menu size={20} />
            </button>

          </div>
        </nav>
      </header>

      {/* ================= MOBILE SLIDE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition
          ${openMobile ? "visible" : "invisible"}
        `}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpenMobile(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity
            ${openMobile ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* DRAWER */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm
            bg-gradient-to-br from-[#0B0F1A] to-black
            p-6 transition-transform duration-300
            ${openMobile ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-amber-300">Menu</span>
            <button onClick={() => setOpenMobile(false)}>
              <X className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col space-y-5 text-white text-lg">
            <Link href="/journeys" onClick={() => setOpenMobile(false)}>Journeys</Link>
            <Link href="/backpack" onClick={() => setOpenMobile(false)}>Backpack</Link>
            <Link href="/biking" onClick={() => setOpenMobile(false)}>Biking</Link>
            <Link href="/about" onClick={() => setOpenMobile(false)}>About</Link>

            <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
              <Link
                href="/profile"
                onClick={() => setOpenMobile(false)}
              >
                My Profile
              </Link>

              <Link
                href="/bookings"
                onClick={() => setOpenMobile(false)}
              >
                My Bookings
              </Link>

              <Link
                href="/login"
                onClick={() => setOpenMobile(false)}
                className="text-amber-300 font-semibold"
              >
                Login →
              </Link>
            </div>

          </nav>
        </div>
      </div>
    </>
  );
}
