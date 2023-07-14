import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductType, SubCategoryType } from "@/types";
import useFetchSubCategory from "@/hooks/useFetchSubCategories";
import useFetchProducts from "@/hooks/useFetchProducts";

const CategoryWiseProduct = () => {
  const router = useRouter();
  const { _id } = router.query;
  console.log(_id);

  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { fetchSubCategoryByCategory, loading, error } = useFetchSubCategory();
  const {
    fetchProductBySubCategory,
    loading: productLoading,
    error: productError,
  } = useFetchProducts();

  useEffect(() => {
    const fetchSingleFeature = async () => {
      if (typeof _id === "string") {
        const subCategory = await fetchSubCategoryByCategory(
          "64a966e7b9b0a074b61c90a8"
        );
        console.log(subCategory);
        setSubCategories(subCategory);
      }
    };

    const fetchProducts = async () => {
      if (typeof _id === "string") {
        const subProducts = await fetchProductBySubCategory(
          "64a95ad1b9b0a074b6ff8e16"
        );
        console.log(subProducts);
        setProducts(subProducts);
      }
    };

    fetchSingleFeature();
    fetchProducts();
  }, [_id]);
  return (
    <div className="px-3 py-4">
      <div className="flex">
        <div className="w-64 border-x">
          {subCategories &&
            subCategories.map((subCategory: SubCategoryType) => {
              return (
                <div
                  key={subCategory._id}
                  className="flex space-y-3 items-center border-b px-2 py-2"
                >
                  <div className="relative w-24 h-24">
                    <Image
                      src={subCategory.image}
                      alt={subCategory.name}
                      fill
                    />
                  </div>
                  <h5 className="text-[#1f1f1f] font-semibold">
                    {subCategory.name}
                  </h5>
                </div>
              );
            })}
        </div>
        <div className="grid grid-cols-4 gap-x-3 gap-y-3 px-2">
          {products &&
            products.map((product: ProductType) => {
              return <ProductCard product={product} key={product._id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
