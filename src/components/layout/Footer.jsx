import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] text-white/80 mt-2">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white">TravelUI</h3>
          <p className="mt-4 text-sm leading-relaxed">
            Curated group adventures, handcrafted journeys and unforgettable
            travel experiences across the globe.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">Careers</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* TRIPS (ONLY CATEGORIES) */}
        <div>
          <h4 className="text-white font-semibold mb-4">Trips</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="journeys?category=himalayan" className="hover:text-white">
                Himalayan Treks
              </Link>
            </li>
            <li>
              <Link href="journeys?category=winter" className="hover:text-white">
                Winter Trips
              </Link>
            </li>
            <li>
              <Link href="journeys?category=weekend" className="hover:text-white">
                Weekend Getaways
              </Link>
            </li>
            <li>
              <Link href="journeys?category=international" className="hover:text-white">
                International Trips
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faqs" className="hover:text-white">FAQs</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} TravelUI. All rights reserved.
      </div>
    </footer>
  );
}
