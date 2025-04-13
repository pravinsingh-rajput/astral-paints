import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#0066b3] text-white flex items-center justify-between px-4 md:px-16 py-4">
      <div className="w-36 md:w-44">
        <Image
          src="/images/logo/Astral-Paints-Logo-OL-23.svg"
          alt="Astral Paints"
          width={180}
          height={60}
          priority
        />
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link href="#" className="hover:text-gray-200">
          About
        </Link>
        <Link href="#" className="hover:text-gray-200">
          Category
        </Link>
        <Link href="#" className="hover:text-gray-200">
          Services
        </Link>
        <Link href="#" className="hover:text-gray-200">
          Colours
        </Link>
        <Link href="#" className="hover:text-gray-200">
          Downloads
        </Link>
        <Link href="#" className="hover:text-gray-200">
          Become A Dealer
        </Link>
        <Link href="#" className="hover:text-gray-200">
          Blogs
        </Link>
        <Link href="#" className="hover:text-gray-200">
          Contact
        </Link>
      </div>
      <button className="bg-white text-[#0066b3] px-4 py-2 rounded-full text-sm font-medium">
        Enquire Now
      </button>
    </nav>
  );
};

export default Navbar;
