"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [mounted, setMounted] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";
    else if (message.length < 10) newErrors.message = "Message must be at least 10 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSuccess(false), 5000);
      }, 2000);
    }
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-12 relative overflow-hidden">
      
      {/* STARS BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
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

      {/* GLOW ORBS */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-full mb-4">
            <MessageSquare size={16} className="text-blue-300" />
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Get In Touch</span>
            <Globe size={16} className="text-cyan-300" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have questions about your next adventure? We're here to help! Get in touch with our team and let's make your travel dreams a reality.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* CONTACT INFO CARDS */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* EMAIL CARD */}
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Mail size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                  <p className="text-white/60 text-sm mb-2">Send us your message anytime</p>
                  <a href="mailto:support@travel.com" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    support@travel.com
                  </a>
                </div>
              </div>
            </div>

            {/* PHONE CARD */}
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Phone size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                  <p className="text-white/60 text-sm mb-2">Call us during business hours</p>
                  <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-cyan-500/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <MapPin size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                  <p className="text-white/60 text-sm">123 Travel Street<br/>Adventure City, AC 12345</p>
                </div>
              </div>
            </div>

            {/* HOURS CARD */}
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-pink-500/50 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <Clock size={24} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Hours</h3>
                  <p className="text-white/60 text-sm">Mon - Fri: 9AM - 6PM<br/>Sat - Sun: 10AM - 4PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              
              {/* CARD GLOW */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/20 rounded-3xl opacity-30 blur-lg -z-10" />

              {success && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-sm flex items-center gap-2">
                  <Send size={18} />
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <div className="space-y-5">
                
                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 block">Full Name</label>
                  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                    errors.name ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 focus-within:border-blue-400/60 focus-within:bg-white/10'
                  }`}>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({...errors, name: ""});
                      }}
                      placeholder="Your Name Please"
                      className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-400">✈️ {errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 block">Email Address</label>
                  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                    errors.email ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 focus-within:border-blue-400/60 focus-within:bg-white/10'
                  }`}>
                    <Mail size={18} className={errors.email ? 'text-red-400' : 'text-blue-400'} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({...errors, email: ""});
                      }}
                      placeholder="your@email.com"
                      className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400">✈️ {errors.email}</p>}
                </div>

                {/* SUBJECT */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 block">Subject</label>
                  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                    errors.subject ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 focus-within:border-purple-400/60 focus-within:bg-white/10'
                  }`}>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors({...errors, subject: ""});
                      }}
                      placeholder="How can we help?"
                      className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                    />
                  </div>
                  {errors.subject && <p className="text-xs text-red-400">✈️ {errors.subject}</p>}
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 block">Message</label>
                  <div className={`px-4 py-3 rounded-xl border transition ${
                    errors.message ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 focus-within:border-cyan-400/60 focus-within:bg-white/10'
                  }`}>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({...errors, message: ""});
                      }}
                      placeholder="Tell us more about your inquiry..."
                      rows="5"
                      className="w-full bg-transparent text-white placeholder-white/40 outline-none text-sm resize-none"
                    />
                  </div>
                  {errors.message && <p className="text-xs text-red-400">✈️ {errors.message}</p>}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold transition hover:scale-105 active:scale-95 disabled:opacity-70 relative overflow-hidden group mt-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700" />
                  <div className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 transition" />
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* SOCIAL LINKS */}
        <div className="text-center mb-12">
          <h3 className="text-white font-bold text-lg mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="p-3 bg-white/10 hover:bg-blue-500/20 border border-white/20 hover:border-blue-500/50 rounded-full text-blue-400 hover:text-blue-300 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-500/50 rounded-full text-cyan-400 hover:text-cyan-300 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-white/10 hover:bg-pink-500/20 border border-white/20 hover:border-pink-500/50 rounded-full text-pink-400 hover:text-pink-300 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-white/10 hover:bg-purple-500/20 border border-white/20 hover:border-purple-500/50 rounded-full text-purple-400 hover:text-purple-300 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-white/40 text-xs border-t border-white/10 pt-8">
          <p>© 2026 Travel Adventure. All rights reserved.</p>
        </div>
      </div>

      {/* ANIMATIONS */}
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