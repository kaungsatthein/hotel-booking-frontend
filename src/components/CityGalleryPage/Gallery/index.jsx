"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./gallery.module.css";
import { Button } from "../../ui/button";

const cities = [
  {
    id: 1,
    name: "Yangon",
    slug: "yangon",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1683568983870-ce2e4506fcb1",
  },
  {
    id: 2,
    name: "Mandalay",
    slug: "mandalay",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1590498418987-aa4e1e0d2b94",
  },
  {
    id: 3,
    name: "Bago",
    slug: "bago",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1658321008864-06f162d926ce",
  },
  {
    id: 4,
    name: "Magway",
    slug: "magway",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1746929449328-7b7df9a3b6ec",
  },
  {
    id: 5,
    name: "Sagaing",
    slug: "sagaing",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1718138199651-431cae141943",
  },
  {
    id: 6,
    name: "Ayeyarwady",
    slug: "ayeyarwady",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1643443350392-d0b6b861c4ea",
  },
  {
    id: 7,
    name: "Tanintharyi",
    slug: "tanintharyi",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
  },
  {
    id: 8,
    name: "Kachin",
    slug: "kachin",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1694866605330-1a9180a5860d",
  },
  {
    id: 9,
    name: "Kayah",
    slug: "kayah",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1697957164068-ca4c7362222d",
  },
  {
    id: 10,
    name: "Kayin",
    slug: "Kayin",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1551006402-1e61f22ef0b7",
  },
  {
    id: 11,
    name: "Chin",
    slug: "chin",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1660319465591-f73aa4c7a1f1",
  },
  {
    id: 12,
    name: "Mon",
    slug: "mon",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1650708904958-2d0752c0463d",
  },
  {
    id: 13,
    name: "Rakhine",
    slug: "rakhine",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1662154477069-c8c0a5361a4c",
  },
  {
    id: 14,
    name: "Shan",
    slug: "shan",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1546060411-ffbf593d6a15",
  },
];

const getAspectRatio = (aspect) => {
  switch (aspect) {
    case "portrait":
      return "aspect-[3/4]";
    case "landscape":
      return "aspect-[4/3]";
    case "square":
      return "aspect-square";
    case "wide":
      return "aspect-[16/9]";
    default:
      return "aspect-[4/3]";
  }
};

const Gallery = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className={`px-16 py-6 relative ${
        !showAll ? "max-h-screen overflow-hidden" : ""
      }`}
    >
      <div className="columns-4 space-y-4 gap-4">
        {cities.map((city, index) => (
          <Link
            key={city.id}
            href={`/cities/${city.slug}`}
            className="block break-inside-avoid mb-4"
            onMouseEnter={() => setHoveredCity(city.id)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <div
              className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${styles.fadeInUp}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`relative overflow-hidden ${getAspectRatio(
                  city.aspect
                )}`}
              >
                <Image
                  src={city.src}
                  alt={`Beautiful view of ${city.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* City name overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                    hoveredCity === city.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-lg">
                    {city.name}
                  </h3>
                  <div className="w-12 h-1 bg-white rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                </div>

                {/* Floating city name */}
                <div
                  className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 transform transition-all duration-300 ${
                    hoveredCity === city.id
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0"
                  }`}
                >
                  {city.name}
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      {!showAll && (
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end justify-center pb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(true)}
            className="bg-background hover:bg-background/50 cursor-pointer"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
