import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#6b5b8e] relative min-h-screen  ">
      <div className="container mx-auto px-4 md:px-12 py-16 md:py-24 flex flex-col md:flex-row">
        <div className="md:w-1/2 z-10 relative">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Interior
            <br />
            Emulsions
          </h1>
          <p className="text-white mb-6">
            Excellent Fungal Resistance | Smooth Finish
          </p>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium">
            Read More
          </button>
        </div>
      </div>
      <Image
        src="/images/hero/homebanner.png"
        alt="Interior Design"
        fill
        className="object-cover z-0"
        priority
      />
    </section>
  );
};

export default HeroSection;
