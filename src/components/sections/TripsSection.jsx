"use client";

import { useState, useMemo } from "react";
import TripsTopSwiper from "./TripsTopSwiper";
import FestivalBanner from "./FestivalBanner";
import TripsBottomSwiper from "./TripsBottomSwiper";
import { trips } from "@/data/trips";

const FILTERS = [
  "Xmas & New Year",
  "Backpacking Trips",
  "Himalayan Treks",
  "Best Sellers",
  "International Trips",
  "Biking",
  "Weekend Getaways",
];

export default function TripsSection() {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredTrips = useMemo(() => {
    if (activeFilters.length === 0) return trips;

    return trips.filter(
      (trip) =>
        activeFilters.includes(trip.category) ||
        trip.tags?.some((t) => activeFilters.includes(t))
    );
  }, [activeFilters]);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        {/* LEFT FILTER */}
        <div className="col-span-12 lg:col-span-3 bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold text-lg mb-4">
            Select from our tours
          </h3>

          {FILTERS.map((filter) => (
            <label
              key={filter}
              className="flex items-center gap-3 mb-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={activeFilters.includes(filter)}
                onChange={() => toggleFilter(filter)}
              />
              <span className="text-sm">{filter}</span>
            </label>
          ))}
        </div>

        {/* RIGHT */}
        <div className="col-span-12 lg:col-span-9 space-y-10">
          <TripsTopSwiper
            trips={filteredTrips.filter((t) => t.type === "top")}
          />

          <FestivalBanner />

          <TripsBottomSwiper
            trips={filteredTrips.filter((t) => t.type === "bottom")}
          />
        </div>
      </div>
    </section>
  );
}