import useFetchCategories from "@/hooks/useFetchCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  const { categories, error, loading } = useFetchCategories();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex space-x-5 flex-wrap">
        {categories.map((category) => (
          <div key={category._id}>
            <Link href={`/category/${category._id}`}>
              <div className="relative w-48 h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className=""
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
