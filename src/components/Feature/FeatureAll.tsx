import useFetchFeatures from "@/hooks/useFetchFeatures";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductCard } from "../ProductCard/ProductCard";

const FeatureAll = () => {
  const { loading, error, fetchFeatureById } = useFetchFeatures();
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    const fetchSingleFeature = async () => {
      if (typeof id === "string") {
        const feature = await fetchFeatureById(id);
        console.log(feature);
        setProducts(feature.products);
      }
    };

    fetchSingleFeature();
  }, [id]);

  return (
    <div className="px-3 py-3">
      <div className="grid grid-cols-4 gap-x-4 gap-y-3">
        {products && products.map((product: any) => {
            console.log(product);
            
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default FeatureAll;
