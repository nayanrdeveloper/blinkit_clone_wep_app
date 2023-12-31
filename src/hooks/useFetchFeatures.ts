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

interface Feature {
  _id: string;
  title: string;
  sponsored: boolean;
  products: Product[];
}

const useFetchFeatures = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://blinkit.onrender.com/features`);
      setFeatures(response.data);
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

  const fetchFeatureById = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://blinkit.onrender.com/features/${id}`
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

  return { features, loading, error, fetchFeatureById };
};

export default useFetchFeatures;
