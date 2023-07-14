import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
  images: string[];
  description: string;
  expiryDate: string;
  seller: string;
  countryOfOrigin: string;
  manufactureDetails: string;
  weight: string;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://blinkit.onrender.com/products`);
      setProducts(response.data);
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchProductById = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://blinkit.onrender.com/products/${id}`
      );
      return response.data;
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, fetchProductById };
};

export default useFetchProducts;
