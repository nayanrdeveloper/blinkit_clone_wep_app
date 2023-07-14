import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useFetchProducts from "@/hooks/useFetchProducts";

const ProductDetails = () => {
  const { fetchProductById, error, loading } = useFetchProducts();
  const [product, setProduct] = useState<any>();
  const router = useRouter();
  const { _id } = router.query;
  console.log(_id);

  useEffect(() => {
    const fetchSingleFeature = async () => {
      if (typeof _id === "string") {
        const product = await fetchProductById(_id);
        console.log(product);
        setProduct(product);
      }
    };

    fetchSingleFeature();
  }, [_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="px-4 py-4">
      {product && (
        <div>
          <div className="grid grid-cols-2">
            <div>
              <div className="relative w-96 h-96">
                <Image src={product.images[0]} alt={product.name} fill />
              </div>
            </div>
            <div className="mt-12">
              <h6 className="text-xl font-semibold">{product.name}</h6>
              <div className="space-x-2 items-center bg-[#f8f8f8] px-2 py-1 flex w-24 rounded-lg">
                <div className="relative w-4 h-4">
                  <Image src={"/15-mins.png"} alt={"timer"} fill />
                </div>
                <p className="text-[#363636]">15 mins</p>
              </div>
              <div className="border-t py-2 mt-2 flex justify-between">
                <div>
                  <p className="text-[#4f4f4f]">200 g</p>
                  <p>
                    ₹ 589{" "}
                    <span className="line-through ml-2 text-[#999999]">
                      ₹ 650
                    </span>
                  </p>
                </div>
                <div>
                  <button className="px-2 py-1 text-[#3E8420] border border-[#3E8420] rounded-md">
                    Add
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[#333333] text-xl font-semibold">
                  Why shop from blinkit?
                </p>
                <div className="space-y-5">
                  <div className="flex space-x-2 items-center">
                    <div>
                      <div className="relative w-12 h-12">
                        <Image
                          src={"/10_minute_delivery.png"}
                          alt={"10 Minute Delivery"}
                          fill
                        />
                      </div>
                    </div>
                    <div>
                      <h5>Best Prices and Offers</h5>
                      <p className="text-[#666] text-sm">
                        Best price destination with offers directly from the
                        manufacturers.
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <div className="relative w-12 h-12">
                        <Image
                          src={"/Best_Prices_Offers.png"}
                          alt={"10 Minute Delivery"}
                          fill
                        />
                      </div>
                    </div>
                    <div>
                      <h5> Superfast Delivery</h5>
                      <p className="text-[#666] text-sm">
                        Get your order delivered to your doorstep at the
                        earliest from dark stores near you
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <div className="relative w-12 h-12">
                        <Image
                          src={"/Wide_Assortment.png"}
                          alt={"10 Minute Delivery"}
                          fill
                        />
                      </div>
                    </div>
                    <div>
                      <h5>Wide Assortment</h5>
                      <p className="text-[#666] text-sm">
                        Choose from 5000+ products across food, personal care,
                        household and other categories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="text-[#1c1c1c] font-semibold text-xl">
              Product Details
            </h5>
            <div>
              <h6 className="text-[#1f1f1f] font-semibold">Description</h6>
              <p className="text-[#666666]">{product.description}</p>
            </div>
            <div>
              <h6 className="text-[#1f1f1f] font-semibold">Expiry date</h6>
              <p className="text-[#666666]">{product.expiryDate}</p>
            </div>
            <div>
              <h6 className="text-[#1f1f1f] font-semibold">Seller</h6>
              <p className="text-[#666666]">{product.seller}</p>
            </div>
            <div>
              <h6 className="text-[#1f1f1f] font-semibold">
                Country of Origin
              </h6>
              <p className="text-[#666666]">{product.countryOfOrigin}</p>
            </div>
            <div>
              <h6 className="text-[#1f1f1f] font-semibold">
                Manufacture Details
              </h6>
              <p className="text-[#666666]">{product.manufactureDetails}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
