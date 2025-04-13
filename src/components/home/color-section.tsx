"use client";

import Link from "next/link";
import SectionHeader from "../common/SectionHeader";

type ColorCard = {
  id: number;
  name: string;
  code: string;
  hexCode: string;
};

const ColorSection = () => {
  const colors: ColorCard[] = [
    {
      id: 1,
      name: "Cream",
      code: "AP-101",
      hexCode: "#F8E3B5",
    },
    {
      id: 2,
      name: "Blush Pink",
      code: "AP-102",
      hexCode: "#F8C4C4",
    },
    {
      id: 3,
      name: "Sky Blue",
      code: "AP-103",
      hexCode: "#00B8D4",
    },
    {
      id: 4,
      name: "Royal Blue",
      code: "AP-104",
      hexCode: "#1565C0",
    },
    {
      id: 5,
      name: "Burgundy",
      code: "AP-105",
      hexCode: "#800000",
    },
    {
      id: 6,
      name: "Golden Yellow",
      code: "AP-106",
      hexCode: "#FFC107",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <SectionHeader
              subtitle={"Colours"}
              title={"Popular Colours"}
              imageUrl={"/images/colours/popular-colour-title-shade.svg"}
            />
          </div>

          <Link
            href="/colors"
            className="text-green-600 hover:text-green-700 border border-green-600 hover:border-green-700 px-4 py-2 rounded-full transition-colors duration-300"
          >
            Explore More
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {colors.map((color) => (
            <div key={color.id} className="relative group">
              <div className="transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:bg-white group-hover:rounded-xl group-hover:shadow-lg group-hover:p-3">
                <div className="text-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold text-gray-800">
                    Astral Paints
                  </p>
                </div>

                <div
                  className="w-full aspect-square border border-gray-200 group-hover:rounded-md"
                  style={{ backgroundColor: color.hexCode }}
                ></div>

                <div className="mt-2 text-center">
                  <p className="font-medium">{color.name}</p>
                  <p className="text-sm text-gray-500">{color.code}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
