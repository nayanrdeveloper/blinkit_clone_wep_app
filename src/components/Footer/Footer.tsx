import {
  categoriesData,
  footerUsefulLinks,
  socialMedias,
} from "@/constants/footerdata";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="px-4 py-2 mt-10">
      {/* Footer Column */}
      <div className="grid grid-cols-2">
        <div>
          <h5 className="font-semibold text-xl">Useful Links</h5>
          <div className="grid grid-cols-3 mt-3">
            {footerUsefulLinks.map((column, columnIndex) => {
              return (
                <div key={columnIndex} className="text-[#666] space-y-2">
                  {column.map((link, linkIndex) => (
                    <div key={linkIndex}>{link.title}</div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <h5 className="font-semibold text-xl">Categories</h5>
            <div className="grid grid-cols-3 mt-3">
              {categoriesData.map((column, columnIndex) => {
                return (
                  <div key={columnIndex} className="text-[#666] space-y-2">
                    {column.map((link, linkIndex) => (
                      <div key={linkIndex}>{link.title}</div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Socia links, download app */}
      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="w-96 text-[#666]">
            © Blink Commerce Private Limited (formerly known as Grofers India
            Private Limited), 2016-2023
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="text-[#666] font-semibold">Download App</p>
          <div className="relative w-36 h-12">
            <Image
              src={"/android_download.png"}
              alt={"Android Download"}
              fill
            />
          </div>
          <div className="relative w-36 h-12">
            <Image src={"/ios_download.png"} alt={"Android Download"} fill />
          </div>
        </div>
        <div className="flex space-x-4">
          {socialMedias.map((socialMedia) => {
            const Icon = socialMedia.icon;
            return (
              <div key={socialMedia.id}>
                <Icon className="w-8 h-8 text-[#1F1F1F]" />
              </div>
            );
          })}
        </div>
      </div>
      {/* Bottom Note */}
      <div className="mt-5">
        <p className="text-[#666]">
          &quot;Blinkit&quot; is owned and managed by &quot;Blink Commerce
          Private Limited&quot; (formerly known as Grofers India Private
          Limited) and is not related, linked or interconnected in whatsoever
          manner or nature, to “GROFFR.COM” which is a real estate services
          business operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </div>
  );
};
