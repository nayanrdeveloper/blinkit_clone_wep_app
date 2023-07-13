import { BannerCarousel } from "@/components/BannerCarousel/BannerCarousel";
import Category from "@/components/Category/Category";

import { Banner } from "@/components/Header/Banner";
import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <main>
      <Banner />
      <BannerCarousel />
      <Category />
      {/* <Alert color={"info"}>Hello Nayan</Alert> */}
    </main>
  );
}
