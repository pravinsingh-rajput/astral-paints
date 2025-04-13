import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Wall Painting",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/service/wallpainting.png",
      bgColor: "bg-yellow-300",
      link: "/service/wall-painting",
    },
    {
      id: 2,
      title: "Water Solution",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/service/watersolution.png",
      bgColor: "bg-pink-300",
      link: "/service/water-solution",
    },
    {
      id: 3,
      title: "Painting",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/service/painting.png",
      bgColor: "bg-green-300",
      link: "/service/painting",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeader
          subtitle={"Services"}
          title={"Make Your Life Comfortable"}
          imageUrl={"/images/service/makeyourlifeconfortable-title-shade.svg"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden rounded-lg shadow-md group"
            >
              <div className="relative h-64">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`${service.bgColor} p-6`}>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full inline-block transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
