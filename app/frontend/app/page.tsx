import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import MetricsBanner from "@/components/landing/MetricsBanner";
import Features from "@/components/landing/Features";
import Categories from "@/components/landing/Categories";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="w-full pt-20 min-h-screen">
        <Hero />
        <MetricsBanner />
        <Features />
        <Categories />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
