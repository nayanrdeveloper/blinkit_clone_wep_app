import useFetchFeatures from "@/hooks/useFetchFeatures";
import Link from "next/link";
import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export const Features = () => {
  const { features, error, loading } = useFetchFeatures();
  return (
    <div className="px-4">
      <div className="space-y-2">
        {features &&
          features.map((feature) => {
            return (
              <div key={feature._id}>
                <div className="flex justify-between items-center">
                  <h6 className="text-xl font-semibold">{feature.title}</h6>
                  <p className="text-[#3E8420] cursor-pointer">
                    <Link href={`/feature/${feature._id}`}> See All </Link>
                  </p>
                </div>
                <div className="flex space-x-2 mt-3 overflow-x-scroll ">
                  {feature.products.map((product) => {
                    return <ProductCard product={product} key={product._id} />;
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
