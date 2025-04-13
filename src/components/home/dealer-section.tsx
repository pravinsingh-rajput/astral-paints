import Image from "next/image";
import Link from "next/link";

const DelearSection = () => {
  return (
    <section className="relative py-16 md:px-12">
   
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/delear/become-dealer-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

 
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="text-lg mb-2">Join the Success Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Become A Dealer</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi in
          ornare. Nec in tristique et ultrices sit ullamcorper massa tempor et.
        </p>
        <Link
          href="/become-dealer"
          className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-full inline-block transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default DelearSection;
