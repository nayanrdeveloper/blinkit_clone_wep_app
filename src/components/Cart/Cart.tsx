import { useCart } from "@/contexts/CartContext";
import { ProductType } from "@/types";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import React from "react";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    decreaseQuantity,
    addToCart,
    totalQuantity,
    totalPrice,
  } = useCart();
  const handleAddToCart = (product: ProductType) => {
    addToCart(product, 1);
  };

  const handleDecreaseToCart = (product: ProductType) => {
    decreaseQuantity(product._id);
  };
  console.log(cartItems);

  return (
    <div className="px-4 py-3 bg-[#f5f7fd]">
      <h5 className="px-3 py-4 bg-white rounded-md text-2xl font-bold">
        My Cart
      </h5>
      <div className="bg-white mt-4 rounded-md px-3 py-4">
        <div className="">
          <div className="flex items-center">
            <div>
              <div className="relative w-12 h-12">
                <Image src={"/15-mins.png"} alt={"Timer"} fill />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold">Delivery in 18 minutes</p>
              <p className="text-[#666666]">{totalQuantity} Item</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 mt-3">
          {cartItems &&
            cartItems.map((cartItem) => {
              return (
                <div
                  key={cartItem.product._id}
                  className="flex justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-4">
                      <div className="relative w-40 h-40 border rounded-md">
                        <Image
                          src={cartItem.product.images[0]}
                          alt={cartItem.product.name}
                          fill
                          className="p-1"
                        />
                      </div>
                      <div>
                        <p className="text-lg ">{cartItem.product.name}</p>
                        <p className="text-[#696969] text-sm">
                          {cartItem.product.weight} Piece
                        </p>
                        <p className="font-semibold">₹ 589</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center  space-x-2 bg-[#0c831f] text-white rounded-md">
                      <span
                        onClick={() => handleAddToCart(cartItem.product)}
                        className="px-4 py-4 cursor-pointer text-xl hover:bg-[#138f26] rounded-md"
                      >
                        +
                      </span>
                      <span className="px-4 py-4 cursor-pointer text-xl rounded-md">
                        {cartItem.quantity}
                      </span>
                      <span
                        onClick={() => handleDecreaseToCart(cartItem.product)}
                        className="px-4 py-4 cursor-pointer text-xl hover:bg-[#138f26] rounded-md"
                      >
                        -
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-white mt-4 rounded-md px-3 py-4">
        <h5 className="font-semibold text-2xl">Bill Details</h5>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <span className="text-[#666666]">MRP</span>
            <span className="text-[#666666]">₹ {totalPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#666666]">Delivery Charge</span>
            <span className="space-x-4 items-center">
              <span className="line-through text-[#666666]">₹ 15</span>
              <span className="text-green-700">FREE</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Grand Total</span>
            <span className="font-semibold">₹ {totalPrice}</span>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-md px-3 py-4">
        <p className="text-[#666666]">
          Coupons are only applicable on the Blinkit app
        </p>
      </div>
      <div className="bg-white mt-4 rounded-md px-3 py-4">
        <h5 className="font-semibold">Cancellation Policy</h5>
        <p className="text-[#666666] text-sm">
          Orders cannot be cancelled once packed for delivery. In case of
          unexpected delays, a refund will be provided, if applicable.
        </p>
      </div>
      <div className="bg-white mt-4 rounded-md px-3 py-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <FiHome className="w-8 h-8" />
            <div>
              <p className="text-lg font-semibold">Delivering to Home</p>
              <p className="text-[#666666]">
                188, Rukshmani Society vibhag-1,...
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#0c831f]">Change</p>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-md px-3 py-4">
        <div className="px-5 py-2 bg-[#0c831f] rounded-md flex justify-between text-white items-center">
          <div>
            <p>₹ {totalPrice}</p>
            <p>TOTAL</p>
          </div>
          <div className="flex space-x-3 items-center cursor-pointer">
            <p>Proceed to Pay</p>
            <BsChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
