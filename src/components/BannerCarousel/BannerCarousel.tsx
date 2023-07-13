import bannerData from "@/constants/bannerdata";
import Image from "next/image";
import React from "react";

export const BannerCarousel = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex space-x-3 overflow-x-scroll">
        {bannerData.map((banner) => {
          return (
            <div key={banner.id} className="relative w-full h-44">
              <Image src={banner.image} alt={banner.name} fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};
