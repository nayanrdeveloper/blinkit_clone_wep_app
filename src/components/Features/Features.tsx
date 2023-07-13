import useFetchFeatures from "@/hooks/useFetchFeatures";
import Image from "next/image";
import { MdOutlineAvTimer } from "react-icons/md";
import { Carousel } from 'flowbite-react';
import React from "react";

export const Features = () => {
  const { features, error, loading } = useFetchFeatures();
  return (
    <div className="px-4">
      <div className="space-y-2">
        {features &&
          features.map((feature) => {
            return (
              <div key={feature._id}>
                <h6 className="text-xl font-semibold">{feature.title}</h6>
                <div className="flex space-x-2 mt-3 overflow-x-scroll ">
                  {feature.products.map((product) => {
                    return (
                      <div
                        key={product._id}
                        className="border border-[#eeeeee] rounded-lg p-2 shadow-card"
                      >
                        <div className="relative h-40 w-40">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                          />
                        </div>
                        <div>
                          <div className="space-x-2 items-center bg-[#f8f8f8] px-2 py-1 flex w-24 rounded-lg">
                            {/* <MdOutlineAvTimer className="w-4 h-4" /> */}
                            <div className="relative w-4 h-4">
                              <Image src={"/15-mins.png"} alt={"timer"} fill />
                            </div>
                            <p className="text-[#363636]">15 mins</p>
                          </div>
                          <h5 className="h-14 text-[#1f1f1f] font-semibold">{`${product.name.slice(
                            0,
                            26
                          )}${product.name.length >= 26 ? "..." : ""}`}</h5>
                          <p className="text-[#828282]">
                            {product.weight} Pieces
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="">
                            <p>₹ 589</p>
                            <p className="text-[#828282] line-through text-sm">
                              ₹ 700
                            </p>
                          </div>
                          <div>
                            <button className="bg-white border border-[#308616] text-[#308616] px-3 py-1 rounded-md">
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};