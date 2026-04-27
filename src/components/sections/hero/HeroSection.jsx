import HeroLeft from "./HeroLeft";
import HeroReviewSwiper from "./HeroReviewSwiper";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/bgg/hero-bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <HeroLeft />
        <HeroReviewSwiper />
      </div>

    </section>
  );
}
