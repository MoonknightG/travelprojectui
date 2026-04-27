"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle,
  X,
  Plane,
  Globe,
  MapPin,
  Mountain,
  Sparkles
} from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [mounted, setMounted] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be 6+ characters";
    }
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password";
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
    
    // Track completed steps
    const filled = Object.values({...formData, [field]: value}).filter(v => v).length;
    setCompletedSteps(Math.min(5, filled));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        // Auto redirect to login after 3 seconds
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
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
      <div className="relative z-10 w-full max-w-xl">

        {/* 3D ROTATING BACKGROUND */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/10 blur-xl opacity-50 animate-pulse" style={{animationDuration: '4s'}} />

        {/* SUCCESS OVERLAY */}
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-sm">
              
              {/* SUCCESS CARD */}
              <div className="backdrop-blur-2xl bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-pink-600/30 border border-white/30 rounded-3xl p-8 shadow-2xl text-center space-y-6 animate-success-popup">
                
                {/* CHECKMARK CIRCLE */}
                <div className="flex justify-center">
                  <div className="relative w-24 h-24 animate-success-scale">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-50 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-white/30 backdrop-blur-md">
                      <svg className="w-12 h-12 text-white animate-checkmark-draw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-white animate-success-text" style={{animationDelay: '0.3s'}}>
                    Welcome Aboard!
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed animate-success-text" style={{animationDelay: '0.5s'}}>
                    Your adventure begins now. Check your email to verify your account.
                  </p>
                </div>

                {/* CLOSE BUTTON */}
                

                {/* REDIRECT COUNTDOWN */}
                <p className="text-xs text-white/60 animate-success-text" style={{animationDelay: '0.7s'}}>
                  Redirecting to login in 3 seconds...
                </p>

                {/* PARTICLES */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 rounded-full animate-particle"
                    style={{
                      left: `${50 + Math.cos(i * Math.PI / 6) * 40}%`,
                      top: `${50 + Math.sin(i * Math.PI / 6) * 40}%`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}

                {/* CONFETTI */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={`confetti-${i}`}
                    className="fixed w-1 h-1 animate-confetti"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-10px`,
                      backgroundColor: ['#10b981', '#06b6d4', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)],
                      animationDelay: `${Math.random() * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GLASS CARD - FORM */}
        {!showSuccess && (
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl relative overflow-hidden mt-18 mb-20">
            
            {/* CLOSE BUTTON - TOP RIGHT */}
            <Link
              href="/"
              className="absolute top-1 right-4 p-3 rounded-full bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-500/50 text-white/60 hover:text-red-400 transition hover:rotate-90 duration-300 z-20"
            >
              <X size={16} />
            </Link>

          {/* PROGRESS BAR */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white font-bold">Account Setup</h2>
              <span className="text-xs text-white/60">{completedSteps}/5</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-white/20">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
                style={{width: `${(completedSteps / 5) * 100}%`}}
              />
            </div>
          </div>

          {/* HEADER */}
          <div className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-full">
              <Sparkles size={14} className="text-blue-300" />
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Join Us Today</span>
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-white/60 text-sm">Start your adventure with us</p>
          </div>

          {/* FORM */}
          <div className="space-y-4">
            
            {/* FULL NAME */}
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-white/80 block">Full Name</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                errors.fullName ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 group-focus-within:border-blue-400/60 group-focus-within:bg-white/10'
              }`}>
                <User size={18} className={errors.fullName ? 'text-red-400' : 'text-blue-400'} />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Your Full Name"
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-400">✈️ {errors.fullName}</p>}
            </div>

            {/* EMAIL */}
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-white/80 block">Email Address</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                errors.email ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 group-focus-within:border-blue-400/60 group-focus-within:bg-white/10'
              }`}>
                <Mail size={18} className={errors.email ? 'text-red-400' : 'text-blue-400'} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="explorer@travels.com"
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                />
              </div>
              {errors.email && <p className="text-xs text-red-400">✈️ {errors.email}</p>}
            </div>

            {/* PHONE */}
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-white/80 block">Phone Number</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                errors.phone ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 group-focus-within:border-blue-400/60 group-focus-within:bg-white/10'
              }`}>
                <Phone size={18} className={errors.phone ? 'text-red-400' : 'text-blue-400'} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                />
              </div>
              {errors.phone && <p className="text-xs text-red-400">✈️ {errors.phone}</p>}
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
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
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

            {/* CONFIRM PASSWORD */}
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-white/80 block">Confirm Password</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                errors.confirmPassword ? 'bg-red-500/10 border-red-400/50' : 'bg-white/5 border-white/15 group-focus-within:border-purple-400/60 group-focus-within:bg-white/10'
              }`}>
                <Lock size={18} className={errors.confirmPassword ? 'text-red-400' : 'text-purple-400'} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-white/40 hover:text-white transition"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-400">✈️ {errors.confirmPassword}</p>}
            </div>

            {/* TERMS CHECKBOX */}
            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded border-blue-500/50 bg-white/5" />
              <p className="text-white/60 text-xs">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </Link>
              </p>
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
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                  </>
                )}
              </div>
            </button>
          </div>

          {/* LOGIN LINK */}
          <p className="text-center text-white/60 text-sm mt-6">
            Already have an account?{" "}
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

        @keyframes success-popup {
          0% {
            transform: scale(0) rotateZ(-30deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1) rotateZ(0deg);
            opacity: 1;
          }
        }
        .animate-success-popup {
          animation: success-popup 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes success-scale {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-success-scale {
          animation: success-scale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes checkmark-draw {
          0% {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
          }
          100% {
            stroke-dasharray: 50;
            stroke-dashoffset: 0;
          }
        }
        .animate-checkmark-draw {
          animation: checkmark-draw 0.6s ease-out 0.3s forwards;
        }

        @keyframes success-text {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-success-text {
          animation: success-text 0.6s ease-out forwards;
        }

        @keyframes particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx, 50px), var(--ty, 50px)) scale(0);
            opacity: 0;
          }
        }
        .animate-particle {
          animation: particle 0.8s ease-out forwards;
        }

        @keyframes confetti {
          0% {
            transform: translateY(-10px) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotateZ(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 2.5s ease-in forwards;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}