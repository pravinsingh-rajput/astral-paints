import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";

const ProductCategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "Interior Paints",
      image: "/images/products/interiorpaints.jpg",
      link: "/products/interior-paints",
      featured: true,
    },
    {
      id: 2,
      title: "Exterior Paints",
      image: "/images/products/exteriorpaints.jpg",
      link: "/products/exterior-paints",
    },
    {
      id: 3,
      title: "Undercoats",
      image: "/images/products/undercoats.jpg",
      link: "/products/undercoats",
    },
    {
      id: 4,
      title: "Water Proofing",
      image: "/images/products/waterproofing.jpg",
      link: "/products/water-proofing",
    },
    {
      id: 5,
      title: "Painting Tools",
      image: "/images/products/paintinghtools.jpg",
      link: "/products/painting-tools",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeader
          subtitle={"Category"}
          title={"Wide Range Of Colours"}
          imageUrl={"/images/products/range-of-colour-shade-title.png"}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
        
          <div className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-lg group">
            <Image
              src="/images/products/interiorpaints.jpg"
              alt="Interior Paints"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  Interior Paints
                </h3>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Link
                  href="/products/interior-paints"
                  className="group inline-block"
                >
                  <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-opacity-90">
                    Read More
                    <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

         
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.slice(1).map((category) => (
              <div
                key={category.id}
                className="relative overflow-hidden rounded-lg group"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {category.title}
                    </h3>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Link href={category.link} className="group inline-block">
                      <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-opacity-90">
                        Read More
                        <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;
