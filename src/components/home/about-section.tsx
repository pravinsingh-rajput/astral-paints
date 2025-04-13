import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const AboutSection = () => {
  return (
    <section className="bg-white pt-0 mt-[-50px]">
      <div className="container mx-auto px-4 md:px-12 pt-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 mt-10">
            <SectionHeader
              subtitle={"About Astral Paints"}
              title={" Bringing Your Dreams To Life"}
              imageUrl={"/images/about/aboutus-underline.svg"}
            />
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Placerat elementum
              lobortis phasellus porttitor amet odio tempor. Ac molestie fames
              id urna dui posuere ultricies aliquam. Gravida et ac ac donec.
              Lacus est diam at in pharetra velit luctus id pellentesque.
            </p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Placerat elementum
              lobortis phasellus porttitor amet odio tempor. Ac molestie fames
              id urna dui posuere ultricies aliquam. Gravida et ac ac donec.
              Lacus est diam at in pharetra velit luctus id pellentesque.
            </p>
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-medium">
              Read More
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/about/dreamtolifebanner.png"
                alt="Interior Design"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 shadow-lg">
                  <FaPlay className="text-gray-700 w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
