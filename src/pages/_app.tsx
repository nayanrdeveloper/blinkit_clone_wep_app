import CustomSideBar from "@/components/CustomSideBar/CustomSideBar";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { CartProvider } from "@/contexts/CartContext";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </div>
  );
}
