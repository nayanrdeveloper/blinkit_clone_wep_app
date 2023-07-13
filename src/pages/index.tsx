import { BannerCarousel } from "@/components/BannerCarousel/BannerCarousel";
import Category from "@/components/Category/Category";
import { Features } from "@/components/Features/Features";

import { Banner } from "@/components/Header/Banner";
import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <main>
      <Banner />
      <BannerCarousel />
      <Category />
      <Features />
      {/* <Alert color={"info"}>Hello Nayan</Alert> */}
    </main>
  );
}
