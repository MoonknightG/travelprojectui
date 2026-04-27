import HeroSection from "@/components/sections/hero/HeroSection";
import TripsSection from "@/components/sections/TripsSection"; // 👈 MISSING THA

import BestTreksSection from "@/components/sections/BestTreksSection";
import FestivalBanner from "@/components/sections/FestivalBanner";
import BackpackingSection from "@/components/sections/BackpackingSection";
import DestinationsSection from "@/components/sections/DestinationsSection";

import InternationalPackages from "@/components/sections/InternationalPackages";
import ReviewsSection from "@/components/sections/ReviewsSection";

import WhyChooseUs from "@/components/sections/WhyChooseUs";
import MemoriesForLife from "@/components/sections/MemoriesForLife";
import BlogsSection from "@/components/sections/BlogsSection";

import FaqSection from "@/components/sections/FaqSection";
import RecognitionsSection from "@/components/sections/RecognitionsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";



export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TripsSection />   {/* 👈 YE ADD KARNA ZAROORI HAI */}

      <BestTreksSection />
      <FestivalBanner />
      <BackpackingSection />
      <DestinationsSection />
      <InternationalPackages />
      <ReviewsSection /> 
      <WhyChooseUs /> 
      <MemoriesForLife />  
      <BlogsSection />
      <FaqSection />
      <RecognitionsSection />
      <NewsletterSection />
    </>
  );
}
