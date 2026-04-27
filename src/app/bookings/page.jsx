"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export default function BookingsPage() {
  // 🔥 dummy bookings (baad me API se replace ho jayega)
  const bookings = [
    {
      id: 1,
      title: "Kedarkantha Trek",
      date: "12 Jan – 17 Jan 2026",
      location: "Uttarakhand",
      price: "₹9,500",
      image: "/tripsss/kedarkantha.webp",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Spiti Valley Bike Ride",
      date: "05 Sep – 12 Sep 2025",
      location: "Himachal Pradesh",
      price: "₹38,000",
      image: "/tripsss/spiti-bike.webp",
      status: "Completed",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white py-24">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-yellow-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* BACK */}
        <Link
          href="/profile"
          className="mb-10 inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition"
        >
          <ArrowLeft size={18} />
          Back to Profile
        </Link>

        {/* HEADER */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-3">
            My Bookings
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Your Travel <span className="text-amber-300">Journeys</span>
          </h1>
          <p className="text-slate-300 mt-4 max-w-xl">
            View all your upcoming and past adventures booked with TravelUI.
          </p>
        </div>

        {/* BOOKINGS LIST */}
        {bookings.length === 0 ? (
          <div className="text-center text-slate-400 py-24">
            You haven’t booked any trips yet.
          </div>
        ) : (
          <div className="space-y-8">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-[#111827] to-[#020617] border border-amber-800/30 rounded-3xl shadow-xl overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-56 md:h-full">
                  <Image
                    src={booking.image}
                    alt={booking.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="md:col-span-2 p-8 flex flex-col justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold text-amber-300 mb-2">
                      {booking.title}
                    </h3>

                    <div className="flex flex-wrap gap-6 text-sm text-slate-300 mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar size={22} />
                        {booking.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} />
                        {booking.location}
                      </span>
                    </div>

                    <p className="text-slate-400">
                      Booking Amount:
                      <span className="text-amber-400 font-semibold ml-2">
                        {booking.price}
                      </span>
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-6">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-semibold
                        ${
                          booking.status === "Upcoming"
                            ? "bg-amber-400 text-black"
                            : "bg-emerald-500 text-black"
                        }
                      `}
                    >
                      {booking.status}
                    </span>

                    <Link
                      href="/"
                      className="text-sm text-amber-300 hover:text-amber-200 transition"
                    >
                      View Details →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
