import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Scale,
  Shield,
  Clock,
  DollarSign,
  User,
  Heart,
  MapPin,
  Phone,
  Mail,
  FileText,
  CreditCard
} from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "general",
      title: "General Terms & Conditions",
      icon: Scale,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      content: [
        "These terms and conditions (\"Agreement\") constitute the entire agreement between you and our travel company regarding your use of our services.",
        "By booking any travel package, you agree to be bound by these terms and all applicable laws and regulations.",
        "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.",
        "Your continued use of our services following the posting of modified terms means you accept and agree to the changes."
      ]
    },
    {
      id: "booking",
      title: "Booking & Reservation Policy",
      icon: FileText,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      content: [
        "All bookings must be made through our official website or authorized travel agents.",
        "A valid government-issued ID is required for all travelers (passport for international travel).",
        "Minimum payment of 25% is required at the time of booking to confirm your reservation.",
        "Final payment must be completed 30 days before your travel date.",
        "Booking confirmation will be sent to your registered email address within 24 hours."
      ]
    },
    {
      id: "cancellation",
      title: "Cancellation & Refund Policy",
      icon: DollarSign,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      content: [
        "Cancellations made 60+ days before travel: 100% refund of paid amount",
        "Cancellations made 30-59 days before travel: 75% refund of paid amount",
        "Cancellations made 15-29 days before travel: 50% refund of paid amount",
        "Cancellations made less than 15 days before travel: No refund applicable",
        "Refunds will be processed within 14-21 business days to your original payment method"
      ]
    },
    {
      id: "payment",
      title: "Payment Terms & Methods",
      icon: CreditCard,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      content: [
        "We accept credit cards, debit cards, net banking, and digital wallets.",
        "All prices are in USD unless otherwise specified on the booking page.",
        "Prices are subject to change without notice, but confirmed bookings are locked at booking price.",
        "Payment must be made in full before 30 days prior to travel date.",
        "We are not responsible for any bank charges or currency conversion fees imposed by your financial institution."
      ]
    },
    {
      id: "travel-documents",
      title: "Travel Documents & Visa",
      icon: MapPin,
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
      content: [
        "It is your responsibility to ensure your passport is valid for at least 6 months beyond your travel dates.",
        "We provide visa assistance but cannot guarantee visa approval. Visa approval depends on embassy decisions.",
        "All visa-related rejections are subject to our \"No Refund\" policy.",
        "You must obtain comprehensive travel insurance before departure.",
        "We recommend travel insurance that covers trip cancellation, medical emergencies, and evacuation."
      ]
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Shield,
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/30",
      content: [
        "Our company acts as an agent for hotels, airlines, and tour operators and is not responsible for their actions or omissions.",
        "We are not liable for delays, cancellations, or disruptions caused by airlines, weather, or government actions.",
        "We are not responsible for loss, theft, or damage to personal belongings during travel.",
        "Our liability is limited to the total amount paid for the travel package.",
        "We cannot be held responsible for injury, illness, or accidents that occur during travel activities."
      ]
    },
    {
      id: "health-safety",
      title: "Health, Safety & Insurance",
      icon: Heart,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30",
      content: [
        "Travel insurance is mandatory for all international packages and highly recommended for domestic travel.",
        "You are responsible for obtaining all required vaccinations for your destination.",
        "Pre-existing medical conditions must be disclosed during booking.",
        "We reserve the right to refuse service to anyone who poses a health or safety risk.",
        "Emergency medical evacuation costs not covered by insurance are your responsibility."
      ]
    },
    {
      id: "conduct",
      title: "Traveler Conduct & Behavior",
      icon: User,
      color: "from-cyan-500/20 to-sky-500/20",
      borderColor: "border-cyan-500/30",
      content: [
        "All travelers must comply with local laws and regulations at all times.",
        "Prohibited behavior includes illegal activities, substance abuse, and harassment of fellow travelers.",
        "We reserve the right to terminate services and deny refunds for misconduct or rule violations.",
        "Travelers engaging in illegal activities may be reported to local authorities.",
        "Travelers must respect cultural norms and local customs of the destination."
      ]
    },
    {
      id: "modifications",
      title: "Itinerary Changes & Modifications",
      icon: Clock,
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30",
      content: [
        "We reserve the right to modify itineraries due to unforeseen circumstances (weather, road conditions, etc.).",
        "Changes made 30+ days before travel: Free rescheduling to different dates",
        "Changes made less than 30 days before travel: Rescheduling fee of 10% of package cost applies",
        "Alternative arrangements of equal or better value will be provided whenever possible.",
        "Weather-related changes are not eligible for compensation as they are beyond our control."
      ]
    }
  ];

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

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-12">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <span>/</span>
          <span className="text-cyan-300">Terms & Conditions</span>
        </div>

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition mb-12 group"
        >
          <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition" />
          Back to Home
        </Link>

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Please read our terms and conditions carefully before booking your travel package with us. By making a booking, you agree to all terms outlined below.
          </p>
        </div>

        {/* IMPORTANT NOTICE */}
        <div className="mb-12 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 rounded-2xl p-6 flex gap-4">
          <AlertCircle className="text-amber-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-amber-300 mb-2">Important Notice</h3>
            <p className="text-slate-200">
              These terms and conditions are binding on all travelers. By proceeding with your booking, you acknowledge that you have read, understood, and agree to be bound by all terms stated herein. If you do not agree with any part of these terms, please do not proceed with the booking.
            </p>
          </div>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="mb-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FileText className="text-blue-400" size={28} />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition group"
                >
                  <Icon className="text-blue-400 group-hover:scale-110 transition" size={20} />
                  <span className="text-slate-300 group-hover:text-white transition">{section.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* SECTIONS */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className={`bg-gradient-to-br ${section.color} border ${section.borderColor} rounded-2xl p-8 scroll-mt-24`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <Icon className="text-white flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {section.title}
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-400" />
                  </div>
                </div>

                <div className="space-y-4">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                      <p className="text-slate-200 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTACT SECTION */}
        <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/20 border border-blue-500/40 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Phone className="text-blue-400" size={28} />
            Need Clarification?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="tel:+18005555555" className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-blue-500/30 hover:bg-white/10 transition group">
              <Phone className="text-blue-400 group-hover:scale-110 transition" size={28} />
              <div>
                <p className="text-sm text-slate-400 mb-1">Call Us</p>
                <p className="text-lg font-semibold text-white">+1-800-TRAVEL-1</p>
                <p className="text-xs text-slate-500 mt-1">Available 24/7</p>
              </div>
            </a>

            <a href="mailto:support@travelcompany.com" className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-blue-500/30 hover:bg-white/10 transition group">
              <Mail className="text-blue-400 group-hover:scale-110 transition" size={28} />
              <div>
                <p className="text-sm text-slate-400 mb-1">Email Us</p>
                <p className="text-lg font-semibold text-white">support@travel.com</p>
                <p className="text-xs text-slate-500 mt-1">Response within 24 hours</p>
              </div>
            </a>
          </div>
        </div>

        {/* ACCEPTANCE */}
        <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <CheckCircle className="mx-auto text-emerald-400 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            By clicking \"Agree & Book\" during the checkout process, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions outlined above. Your booking confirmation serves as acceptance of these terms.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition transform hover:scale-105"
          >
            <span>Back to Home</span>
            <ArrowRight size={20} />
          </Link>
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