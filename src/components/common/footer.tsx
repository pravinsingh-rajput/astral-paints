import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer/fotterbg.png"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Group Company</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center items-center">
            <div className="w-32 h-16 relative">
              <Image
                src="/images/footer/astral-pipes.png"
                alt="Astral Pipes"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative">
              <Image
                src="/images/footer/astral-adhesives.png"
                alt="Astral Adhesives"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative">
              <Image
                src="/images/footer/bond-it.png"
                alt="Bond It USA & UK"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative">
              <Image
                src="/images/footer/astral-bathware.png"
                alt="Astral Bathware"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative">
              <Image
                src="/images/footer/gem-paints.png"
                alt="Gem Paints"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="w-48 h-24 relative mb-6">
              <Image
                src="/images/footer/astral-paints-logo.png"
                alt="Astral Paints"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                  <p>
                    #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
                    Bangalore - 560 058
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-3 flex-shrink-0" />
                  <p>+91 - 80 - 42552555</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-3 flex-shrink-0" />
                  <p>info@gem-paints.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-2">
                  Sign Up To Our Newsletter
                </h3>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-grow px-4 border text-white border-white border-r-0 py-2 rounded-l-md  focus:outline-none"
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-md transition duration-300">
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <h3 className="text-xl font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      About Astrals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Paint Journey
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Group Companies
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Interior Paints
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Exterior Paints
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Undercoats
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Painting Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Water Proofing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Wall Painting
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Water Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Painting
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Colour Shades
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Downloads</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Become A Dealer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-yellow-400 transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3 flex justify-end items-center space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="#" className="text-sm hover:text-yellow-400 transition">
              Terms & Conditions
            </Link>
          </div>
          <div className="text-sm">ALL RIGHTS RESERVED</div>
          <div>
            <Link href="#" className="text-sm hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
