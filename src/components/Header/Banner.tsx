import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-52 cursor-pointer">
        <Image src={'/paan_banner.jpg'} alt={'Paan banner'} fill />
      </div>
    </div>
  );
};
