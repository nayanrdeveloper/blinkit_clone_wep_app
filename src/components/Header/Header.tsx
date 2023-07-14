import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

import { TextInput, Button } from "flowbite-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { totalQuantity, totalPrice } = useCart();
  return (
    <nav className="flex items-center justify-between px-2 py-2 border-b border-[#eeeeee]">
      {/* Logo and Address */}
      <div className="flex items-center space-x-2">
        <div className="w-32 h-20 relative border-r border-[#eeeeee]">
          <Image src={"/logo.png"} alt={"Logo"} fill />
        </div>
        <div>
          <p className="text-xl font-semibold">Delivery in 18 minutes</p>
          <p>xp55+ M8p, Spice Garden Layout...</p>
        </div>
      </div>
      {/* Search */}
      <div>
        <TextInput
          icon={BiSearch}
          id="email4"
          placeholder='search "Milk"'
          required
          type="email"
          className="w-96"
        />
      </div>
      <div className="flex space-x-2">
        <Button className="bg-white text-black hover:bg-white">Login</Button>
        <Link href={"/cart"}>
          <Button className="bg-[#3E8420] hover:bg-[#3E8420]">
            <BsCart3 className="mr-2 h-5 w-5" />
            {totalQuantity > 0 ? (
              <div>
                <p>{totalQuantity} items</p>
                <p>₹ {totalPrice}</p>
              </div>
            ) : (
              <p>My Cart</p>
            )}
          </Button>
        </Link>
      </div>
    </nav>
  );
};
