import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  Trash2,
  Mail,
  Phone,
  AlertCircle,
  Users,
  Cookie,
  Globe,
  FileText,
  TrendingUp
} from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction & Commitment",
      icon: Shield,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      content: [
        "Your privacy is important to us. We are committed to protecting your personal information and ensuring you have a positive experience on our website.",
        "This Privacy Policy explains how we collect, use, disclose, and otherwise handle your personal information in connection with our travel services.",
        "This policy applies to all visitors, users, and others who access or use our website, mobile app, or travel services.",
        "By accessing and using our services, you acknowledge that you have read and understood this Privacy Policy.",
        "We comply with all applicable data protection laws and regulations including GDPR and CCPA."
      ]
    },
    {
      id: "collection",
      title: "Information We Collect",
      icon: Database,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      content: [
        "Personal Information: Name, email address, phone number, date of birth, passport details, emergency contact information.",
        "Travel Information: Travel dates, destination preferences, special requests, dietary restrictions, accessibility requirements.",
        "Payment Information: Credit/debit card details, billing address, transaction history (processed securely via third-party payment gateways).",
        "Technical Information: IP address, browser type, operating system, pages visited, time spent on website, referring URLs.",
        "Device Information: Device type, unique device identifiers, location data (only with your permission).",
        "Communication Preferences: Email preferences, marketing opt-in/opt-out status, communication frequency preferences."
      ]
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: TrendingUp,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      content: [
        "Process Bookings: Confirming reservations, processing payments, arranging accommodations and transportation.",
        "Customer Service: Responding to inquiries, providing support, handling complaints, and resolving issues.",
        "Communication: Sending booking confirmations, travel itineraries, reminders, and important updates.",
        "Personalization: Customizing your experience, recommending relevant travel packages based on preferences.",
        "Marketing: Sending promotional offers, newsletters, and travel deals (only with your consent).",
        "Improvement: Analyzing usage patterns to improve our website, services, and user experience.",
        "Legal Compliance: Meeting legal obligations, preventing fraud, ensuring security, and protecting rights."
      ]
    },
    {
      id: "disclosure",
      title: "Information Sharing & Disclosure",
      icon: Share2,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      content: [
        "Service Providers: We share information with hotels, airlines, tour operators, and visa processing agencies needed to fulfill your booking.",
        "Payment Processors: Payment information is shared with secure third-party payment gateways (PCI DSS compliant).",
        "Travel Insurance: Information necessary for insurance claims is shared with insurance partners.",
        "Legal Authorities: We may disclose information when required by law or to protect our legal rights.",
        "Business Transfers: In case of merger, acquisition, or sale of assets, your information may be transferred.",
        "Your Consent: We share information only when you explicitly consent to such sharing.",
        "No Sale: We do NOT sell your personal data to third parties for marketing purposes."
      ]
    },
    {
      id: "security",
      title: "Data Security & Protection",
      icon: Lock,
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
      content: [
        "Encryption: All sensitive data is encrypted using SSL/TLS protocols during transmission.",
        "Secure Servers: Your information is stored on secure, password-protected servers with restricted access.",
        "Access Control: Only authorized personnel with legitimate business needs can access your information.",
        "Regular Audits: We conduct regular security audits and penetration testing to identify vulnerabilities.",
        "Data Retention: We retain personal information only as long as necessary for the stated purposes.",
        "Incident Response: In case of data breach, we will notify affected individuals within 30 days.",
        "Employee Training: Our staff receives regular training on data protection and privacy practices."
      ]
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: Cookie,
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/30",
      content: [
        "Essential Cookies: Required for site functionality (login, booking, security) - cannot be disabled.",
        "Analytical Cookies: Track user behavior and website performance to improve user experience.",
        "Marketing Cookies: Enable targeted advertising and track campaign effectiveness.",
        "Cookie Control: You can control cookie preferences through your browser settings at any time.",
        "Third-party Cookies: Third-party services (Google Analytics, Facebook Pixel) may set cookies on our site.",
        "Persistent Tracking: We do not track you across websites without your explicit consent.",
        "Opt-out Options: You can opt-out of non-essential cookies while still using our website normally."
      ]
    },
    {
      id: "rights",
      title: "Your Privacy Rights",
      icon: Eye,
      color: "from-cyan-500/20 to-sky-500/20",
      borderColor: "border-cyan-500/30",
      content: [
        "Right to Access: You have the right to request and obtain a copy of your personal information.",
        "Right to Correction: You can request correction of inaccurate or incomplete information.",
        "Right to Deletion: You can request deletion of your personal information (subject to legal obligations).",
        "Right to Restrict: You can restrict how we use your information for specific purposes.",
        "Right to Portability: You can request your information in a portable format for transfer to another service.",
        "Right to Withdraw Consent: You can withdraw consent for marketing communications at any time.",
        "Right to Complain: You have the right to file a complaint with data protection authorities."
      ]
    },
    {
      id: "children",
      title: "Children's Privacy",
      icon: Users,
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30",
      content: [
        "Age Restriction: Our services are not intended for children under 18 years of age.",
        "Parental Consent: If a minor uses our services, we require parental consent for data collection.",
        "No Targeted Marketing: We do not knowingly send marketing communications to children.",
        "Safe Environment: We implement safeguards to protect children's information if collected.",
        "Parental Controls: Parents can request deletion of their child's account and information.",
        "Age Verification: We may verify age using government-issued ID for travel bookings.",
        "Educational Purpose: Any information about children is used solely for travel arrangement purposes."
      ]
    },
    {
      id: "international",
      title: "International Data Transfers",
      icon: Globe,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30",
      content: [
        "Data Transfers: Your information may be transferred to countries outside your home country.",
        "Adequacy Measures: We ensure adequate safeguards when transferring data internationally.",
        "Standard Clauses: We use EU Standard Contractual Clauses for GDPR-compliant transfers.",
        "Privacy Shields: We comply with applicable international privacy frameworks and agreements.",
        "Recipient Countries: Data may be transferred to India, USA, and other countries for processing.",
        "Your Consent: By using our services, you consent to international data transfers as described.",
        "Rights Protection: Your privacy rights are protected regardless of transfer location."
      ]
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: Trash2,
      color: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30",
      content: [
        "Active Users: We retain data of active users for the duration of their account and relationship with us.",
        "Inactive Accounts: Inactive accounts are retained for 3 years before deletion (unless required by law).",
        "Booking Records: Travel booking information is retained for 7 years for accounting and legal purposes.",
        "Marketing Data: We retain marketing preferences until you unsubscribe or delete your account.",
        "Payment Records: Credit card information is NOT stored after transaction completion.",
        "Cookies: Session cookies are deleted when you close your browser; persistent cookies expire per settings.",
        "Backup: Deleted data may exist in backups for 90 days before permanent deletion."
      ]
    },
    {
      id: "updates",
      title: "Updates to This Policy",
      icon: FileText,
      color: "from-lime-500/20 to-green-500/20",
      borderColor: "border-lime-500/30",
      content: [
        "Regular Review: We review and update this privacy policy periodically to reflect changes in our practices.",
        "Legal Changes: Updates may be necessary to comply with new laws and regulations.",
        "Notification: Significant changes will be communicated via email or prominent notice on our website.",
        "Continued Use: Your continued use of our services after updates constitutes acceptance of new terms.",
        "Effective Date: The date of the latest update is shown at the bottom of this policy.",
        "Version History: Previous versions of this policy are available upon request.",
        "Your Responsibility: It is your responsibility to review this policy periodically for changes."
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
          <span className="text-cyan-300">Privacy Policy</span>
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
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We take your privacy seriously. Learn how we collect, use, protect, and manage your personal information.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last Updated: January 2026</p>
        </div>

        {/* SECURITY NOTICE */}
        <div className="mb-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 rounded-2xl p-6 flex gap-4">
          <Shield className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-emerald-300 mb-2">Your Privacy is Protected</h3>
            <p className="text-slate-200">
              We employ industry-standard security measures and comply with international data protection regulations. Your trust is our priority.
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
          {sections.map((section) => {
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
            <MessageCircle className="text-blue-400" size={28} />
            Privacy Inquiries & Data Requests
          </h2>
          <p className="text-slate-300 mb-6">
            If you have questions about our privacy practices or wish to exercise your privacy rights, please contact our Data Protection Officer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="mailto:privacy@travelcompany.com" className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-blue-500/30 hover:bg-white/10 transition group">
              <Mail className="text-blue-400 group-hover:scale-110 transition" size={28} />
              <div>
                <p className="text-sm text-slate-400 mb-1">Email Us</p>
                <p className="text-lg font-semibold text-white">privacy@travel.com</p>
                <p className="text-xs text-slate-500 mt-1">Within 24 hours response time</p>
              </div>
            </a>

            <a href="tel:+18005555555" className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-blue-500/30 hover:bg-white/10 transition group">
              <Phone className="text-blue-400 group-hover:scale-110 transition" size={28} />
              <div>
                <p className="text-sm text-slate-400 mb-1">Call Us</p>
                <p className="text-lg font-semibold text-white">+1-800-PRIVACY</p>
                <p className="text-xs text-slate-500 mt-1">Available 24/7</p>
              </div>
            </a>
          </div>
        </div>

        {/* COMPLIANCE NOTICE */}
        <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <Lock className="mx-auto text-indigo-400 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-white mb-4">GDPR & CCPA Compliant</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our privacy practices comply with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other international data protection standards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition transform hover:scale-105"
            >
              <span>Back to Home</span>
              <ArrowRight size={20} />
            </Link>
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

const MessageCircle = ({ size = 24, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);