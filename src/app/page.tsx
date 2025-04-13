import React from "react";
import BlogSection from "@/components/home/blog-section";
import DelearSection from "@/components/home/dealer-section";
import ColorSection from "@/components/home/color-section";
import ProductCategorySection from "@/components/home/product-section";
import ServicesSection from "@/components/home/services-section";
import Image from "next/image";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <div className="relative h-full pl-2.5">
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-[#E70000] via-[#FF9119] to-[#00C1DE]"></div>

        <AboutSection />
        <div className="absolute -top-[290px] left-0 w-full h-96">
          <Image
            src="/images/hero/homerainbowbanner.svg"
            alt="Rainbow Divider"
            fill
            className="object-cover"
            priority
          />
        </div>
        <ProductCategorySection />
        <ServicesSection />
        <ColorSection />
        <DelearSection />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
