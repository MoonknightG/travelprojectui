"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Lock, X, ArrowRight, Eye, EyeOff, Plane, Globe, MapPin, Compass, Mountain, Palmtree } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert("Welcome aboard! 🎉");
      }, 2000);
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
        
        {/* CLOSE BUTTON */}
        <div className="flex justify-end mb-2 mt-12">
          <Link
            href="/"
            className=" p-2 rounded-full bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-500/50 text-white/60 hover:text-red-400 transition hover:rotate-90 duration-300"
          >
            <X size={20} />
          </Link>
        </div>

        {/* GLASS CARD */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* CARD GLOW */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/20 rounded-3xl opacity-30 blur-lg -z-10" />

          {/* HEADER */}
          <div className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-full">
              <Plane size={14} className="text-blue-300" />
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Welcome Traveler</span>
              <Globe size={14} className="text-cyan-300" />
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Your Journey Awaits
            </h1>
            <p className="text-white/60 text-sm">Sign in to explore amazing destinations</p>
          </div>

          {/* FORM FIELDS */}
          <div className="space-y-5">
            
            {/* EMAIL */}
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-white/80 block">Email Address</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                errors.email ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 group-focus-within:border-blue-400/60 group-focus-within:bg-white/10'
              }`}>
                <Mail size={18} className={errors.email ? 'text-red-400' : 'text-blue-400'} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: ""});
                  }}
                  placeholder="explorer@travels.com"
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                />
              </div>
              {errors.email && <p className="text-xs text-red-400">✈️ {errors.email}</p>}
            </div>

            {/* PASSWORD */}
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-white/80 block">Password</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                errors.password ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 group-focus-within:border-purple-400/60 group-focus-within:bg-white/10'
              }`}>
                <Lock size={18} className={errors.password ? 'text-red-400' : 'text-purple-400'} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({...errors, password: ""});
                  }}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white/40 hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-400">✈️ {errors.password}</p>}
            </div>

            {/* REMEMBER & FORGOT */}
            <div className="flex items-center justify-between text-sm pt-2">
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer group hover:text-blue-300 transition">
                <div className="w-4 h-4 rounded border-2 border-blue-500/50 bg-white/5 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition" />
                <span className="font-medium">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-slate-400 hover:text-blue-400 transition font-bold"
              >
                Forgot password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
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
                    <span>Starting adventure...</span>
                  </>
                ) : (
                  <>
                    <span>Login & Explore</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                  </>
                )}
              </div>
            </button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-xs text-white/40 uppercase">OR</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* SOCIAL LOGIN */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 text-white/80 text-sm font-medium transition hover:scale-105 flex items-center justify-center gap-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="py-3 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 text-white/80 text-sm font-medium transition hover:scale-105 flex items-center justify-center gap-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 13.5c-.91 0-1.64.25-2.14.75.92-1.31 1.48-2.33 1.48-3.34C16.39 8.5 15.08 7 13.15 7c-1.17 0-2.13.57-2.84 1.31-.71-.74-1.67-1.31-2.84-1.31-1.93 0-3.24 1.5-3.24 3.41 0 1.01.56 2.03 1.48 3.34-.5-.5-1.23-.75-2.14-.75-1.56 0-2.8 1.29-2.8 2.86 0 1.56 1.24 2.86 2.8 2.86 1.05 0 2.01-.48 2.64-1.27.84.93 2.06 1.5 3.44 1.5s2.6-.57 3.44-1.5c.63.79 1.59 1.27 2.64 1.27 1.56 0 2.8-1.29 2.8-2.86 0-1.57-1.24-2.86-2.8-2.86z" fill="white"/>
              </svg>
              Apple
            </button>
          </div>

          {/* SIGNUP LINK */}
          <p className="text-center text-white/60 text-sm mt-6">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-400 hover:text-blue-300 font-bold transition"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs text-slate-600 mt-6">
          By logging in, you agree to our{" "}
          <Link
            href="/terms"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Privacy Policy
          </Link>
        </p>
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