"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight, Plane, Globe, MapPin, Mountain, Sparkles, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateEmail = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateEmail()) {
      setError("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
      }, 1500);
    }
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-4 relative overflow-hidden">
      
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

      {/* FLOATING ICONS */}
      <div className="absolute top-20 left-10 text-5xl animate-float opacity-10" style={{animationDuration: '4s'}}>
        <Plane size={48} className="text-blue-400" />
      </div>
      <div className="absolute bottom-32 right-10 text-4xl animate-float opacity-10" style={{animationDuration: '5s', animationDelay: '1s'}}>
        <Globe size={56} className="text-cyan-400" />
      </div>
      <div className="absolute top-1/3 right-12 text-3xl animate-float opacity-10" style={{animationDuration: '6s', animationDelay: '0.5s'}}>
        <MapPin size={40} className="text-purple-400" />
      </div>
      <div className="absolute bottom-1/4 left-12 text-3xl animate-float opacity-10" style={{animationDuration: '5.5s', animationDelay: '1.5s'}}>
        <Mountain size={44} className="text-blue-300" />
      </div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-md">

        {/* GLASS CARD */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* CARD GLOW */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/20 rounded-3xl opacity-30 blur-lg -z-10" />

          {/* BACK BUTTON */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition mb-6 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition" />
            Back to Login
          </Link>

          {/* HEADER */}
          <div className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-full mb-4">
              <Sparkles size={14} className="text-blue-300" />
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Reset Password</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Forgot Password?
            </h1>
            <p className="text-white/60 text-sm">
              No worries! Enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* SUCCESS STATE */}
          {isSent ? (
            <div className="space-y-6">
              <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-6 text-center space-y-3">
                <div className="flex justify-center">
                  <CheckCircle size={48} className="text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Email Sent!</h2>
                <p className="text-green-200 text-sm">
                  Check your email for a link to reset your password. It may take a few minutes to arrive.
                </p>
              </div>

              <p className="text-center text-white/60 text-sm">
                Didn't receive the email?{" "}
                <button
                  onClick={() => setIsSent(false)}
                  className="text-blue-400 hover:text-blue-300 font-bold transition"
                >
                  Try again
                </button>
              </p>

              <Link
                href="/login"
                className="block text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition hover:scale-105 active:scale-95"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* EMAIL FIELD */}
              <div className="space-y-2 group">
                <label className="text-sm font-medium text-white/80 block">Email Address</label>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                  error ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 group-focus-within:border-blue-400/60 group-focus-within:bg-white/10'
                }`}>
                  <Mail size={18} className={error ? 'text-red-400' : 'text-blue-400'} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="explorer@travels.com"
                    className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                  />
                </div>
                {error && <p className="text-xs text-red-400">✈️ {error}</p>}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold transition hover:scale-105 active:scale-95 disabled:opacity-70 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700" />
                <div className="relative flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending link...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                    </>
                  )}
                </div>
              </button>

              {/* BACK TO LOGIN */}
              <p className="text-center text-white/60 text-sm">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="text-blue-400 hover:text-blue-300 font-bold transition"
                >
                  Login
                </Link>
              </p>
            </div>
          )}
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}